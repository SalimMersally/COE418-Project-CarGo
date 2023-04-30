package com.cargo.api.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class CarResponse {
    private Long carId;
    private String make;
    private String model;
    private Integer year;
    private String color;
    private int costPerDay;
    private String description;
}
