package com.cargo.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class SignupRequest {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private int phoneNumber;
}
