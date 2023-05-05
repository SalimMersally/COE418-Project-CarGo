package com.cargo.repository;

import com.cargo.entity.Booking;
import com.cargo.entity.Car;
import com.cargo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findBookingByCar(Car car);
    List<Booking> findBookingByUser(User user);
}
