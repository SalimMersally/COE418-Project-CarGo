package com.cargo.api.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class UserDataResponse {
    private String email;
    private String firstName;
    private String lastName;
    private int phoneNumber;
}
