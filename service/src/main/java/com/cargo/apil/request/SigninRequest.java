package com.cargo.apil.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class SigninRequest {
    private String email;
    private String password;
}
