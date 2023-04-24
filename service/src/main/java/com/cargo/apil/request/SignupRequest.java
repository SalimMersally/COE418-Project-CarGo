package com.cargo.apil.request;

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
    private String description;
    private boolean isCompany;
}
