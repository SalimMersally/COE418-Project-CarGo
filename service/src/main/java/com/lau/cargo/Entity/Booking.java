package com.lau.cargo.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long bookingId;
    private Date startDate;
    private Date endDate;
    private Double bookingPrice;


}
