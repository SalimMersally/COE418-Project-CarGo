package com.cargo.apil.controller;

import com.cargo.repository.BookingRepository;
import com.cargo.entity.Booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;
    @GetMapping()
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
    @GetMapping(value = "/{bookingId}")
    public ResponseEntity<?> getBookingById(@PathVariable(value = "bookingId") Long bookingId) {
        Optional<Booking> booking;
        if(bookingRepository.existsById(bookingId)) {
            booking = bookingRepository.findById(bookingId);
        } else {
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok().body(booking);
    }
    @PostMapping()
    public Booking createBooking(@Validated @RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }
    @PutMapping("/{bookingId}")  //update
    public ResponseEntity<?> updateBooking(@PathVariable(value = "bookingId") Long bookingId,
                                       @Validated @RequestBody Booking bookingDetails) {
        final Booking updatedBooking;
        if(bookingRepository.existsById(bookingId)) {
            Booking booking = bookingRepository.findById(bookingId).orElseThrow(()-> new RuntimeException("not found"));
            booking.setBookingPrice(bookingDetails.getBookingPrice());
            booking.setEndDate(bookingDetails.getEndDate());
            booking.setStartDate(bookingDetails.getStartDate());
            booking.setUser(bookingDetails.getUser());
            booking.setAddress(bookingDetails.getAddress());
            booking.setCar(bookingDetails.getCar());
            updatedBooking = bookingRepository.save(booking);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedBooking);
    }
    @DeleteMapping("/{bookingId}")
    public ResponseEntity<?> deleteBooking(@PathVariable(value = "bookingId") Long bookingId) {
        Booking booking;
        if(bookingRepository.existsById(bookingId)) {
            booking = bookingRepository.findById(bookingId).orElseThrow(()-> new RuntimeException("not found"));
            bookingRepository.delete(booking);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(booking);
    }
}
