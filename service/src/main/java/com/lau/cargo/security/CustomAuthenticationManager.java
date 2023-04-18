package com.lau.cargo.security;

import com.lau.cargo.entity.User;
import com.lau.cargo.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CustomAuthenticationManager implements AuthenticationManager {
    private UserRepository userRepository;
    private PasswordEncoder encoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String email = authentication.getName();
        String password = authentication.getCredentials().toString();

        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new BadCredentialsException("1000");
        }
        if (!encoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("1000");
        }

        return new UsernamePasswordAuthenticationToken(email, password);
    }
}
