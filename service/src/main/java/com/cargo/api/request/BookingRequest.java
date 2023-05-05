package com.cargo.api.request;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class BookingRequest {
    private String startDate;
    private String endDate;
    private Double bookingPrice;
    private Long carId;
}
