package com.cargo.api.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookingResponse {
    private Long bookingId;
    private String startDate;
    private String endDate;
    private Double bookingPrice;
    private Long carId;
    private String userEmail;
    private boolean accepted;
}
