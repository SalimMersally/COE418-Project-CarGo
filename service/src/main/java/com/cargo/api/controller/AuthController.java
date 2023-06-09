package com.cargo.api.controller;

import com.cargo.api.request.EditUserRequest;
import com.cargo.api.request.SigninRequest;
import com.cargo.api.request.SignupRequest;
import com.cargo.api.response.SigninResponse;
import com.cargo.api.response.UserDataResponse;
import com.cargo.entity.User;
import com.cargo.repository.UserRepository;
import com.cargo.security.jwt.JwtTokenUtil;
import com.cargo.security.jwt.JwtUserDetailsService;
import com.cargo.util.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin()
@AllArgsConstructor
public class AuthController {
    private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;
    private JwtUserDetailsService userDetailsService;
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private EmailService emailService;

    @GetMapping()
    public ResponseEntity<UserDataResponse> getUserData() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        User user = userRepository.findByEmail(email);
        UserDataResponse userDataResponse = new UserDataResponse(user.getEmail(), user.getFirstName(), user.getLastName(), user.getPhoneNumber());

        return ResponseEntity.ok(userDataResponse);
    }

    @PutMapping()
    public ResponseEntity<String> editUserData(@RequestBody EditUserRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        User user = userRepository.findByEmail(email);
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setPhoneNumber(request.getPhoneNumber());
        userRepository.save(user);

        return ResponseEntity.ok("User updated");
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody SigninRequest signinRequest) {
        String email = signinRequest.getEmail();
        String password = signinRequest.getPassword();

        try {
            Authentication userAuthentication = new UsernamePasswordAuthenticationToken(email, password);
            authenticationManager.authenticate(userAuthentication);
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Wrong Email or password");
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(signinRequest.getEmail());
        String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new SigninResponse(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody SignupRequest signupRequest) {
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity.status(409).body("Email is already in use!");
        }

        User user = new User(0L,
                signupRequest.getEmail(),
                passwordEncoder.encode(signupRequest.getPassword()),
                signupRequest.getFirstName(),
                signupRequest.getLastName(),
                signupRequest.getPhoneNumber(),
                new ArrayList<>(),
                new ArrayList<>());
        userRepository.save(user);

        new Thread(() -> {
            try {
                emailService.sendEmail(signupRequest.getEmail(), "Welcome to CarGo", "Welcome ;) now you can enter our amazing world");
            } catch (Exception e) {
                System.out.println("Email is not valid");
            }
        }).start();

        return ResponseEntity.ok("User registered successfully!");
    }
}
