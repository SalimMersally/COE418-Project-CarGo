package com.lau.cargo.controller;

import com.lau.cargo.controller.request.SigninRequest;
import com.lau.cargo.controller.request.SignupRequest;
import com.lau.cargo.controller.response.SigninResponse;
import com.lau.cargo.entity.User;
import com.lau.cargo.repository.UserRepository;
import com.lau.cargo.security.jwt.JwtTokenUtil;
import com.lau.cargo.security.jwt.JwtUserDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
@AllArgsConstructor
public class AuthController {
    private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;
    private JwtUserDetailsService userDetailsService;
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signin")
    public ResponseEntity<SigninResponse> signIn(@RequestBody SigninRequest signinRequest) {
        String email = signinRequest.getEmail();
        String password = signinRequest.getPassword();

        Authentication userAuthentication = new UsernamePasswordAuthenticationToken(email, password);
        authenticationManager.authenticate(userAuthentication);

        UserDetails userDetails = userDetailsService.loadUserByUsername(signinRequest.getEmail());
        String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new SigninResponse(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody SignupRequest signupRequest) {
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        User user = new User(0L,
                signupRequest.getEmail(),
                passwordEncoder.encode(signupRequest.getPassword()),
                signupRequest.getFirstName(),
                signupRequest.getLastName(),
                signupRequest.getDescription(),
                signupRequest.isCompany(),
                new ArrayList<>(),
                new ArrayList<>(),
                new ArrayList<>());
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }
}
