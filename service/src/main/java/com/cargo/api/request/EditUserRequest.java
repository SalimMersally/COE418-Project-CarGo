package com.cargo.api.request;

import lombok.Getter;

@Getter
public class EditUserRequest {
    private String firstName;
    private String lastName;
    private int phoneNumber;
}
