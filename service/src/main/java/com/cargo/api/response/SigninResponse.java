package com.cargo.api.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class SigninResponse {
    private static long serialVersionUID = -8091879091924046844L;
    private String jwtToken;
}
