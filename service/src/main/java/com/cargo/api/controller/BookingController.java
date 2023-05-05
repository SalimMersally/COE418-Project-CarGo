package com.cargo.api.controller;

import com.cargo.api.request.BookingRequest;
import com.cargo.api.response.BookingResponse;
import com.cargo.entity.Booking;
import com.cargo.entity.Car;
import com.cargo.entity.User;
import com.cargo.repository.BookingRepository;
import com.cargo.repository.CarRepository;
import com.cargo.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin
@AllArgsConstructor
public class BookingController {
    private BookingRepository bookingRepository;
    private UserRepository userRepository;

    private CarRepository carRepository;

    @GetMapping()
    public List<BookingResponse> getAllBookings() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userRepository.findByEmail(email);

        List<Booking> bookingList = bookingRepository.findBookingByUser(user);

        return bookingList.stream().map(this::getBookingResponse).collect(Collectors.toList());
    }

    @GetMapping("/car")
    public List<BookingResponse> getAllBookingsForCar() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userRepository.findByEmail(email);
        List<Car> carList = user.getCar();

        List<Booking> bookingList = new ArrayList<>();
        for(Car car: carList) {
            bookingList.addAll(bookingRepository.findBookingByCar(car));
        }

        return bookingList.stream().map(this::getBookingResponse).collect(Collectors.toList());
    }

    @PostMapping()
    public BookingResponse createBooking(@RequestBody BookingRequest request) {
        Booking booking = new Booking();
        booking.setBookingPrice(request.getBookingPrice());
        booking.setStartDate(request.getStartDate());
        booking.setEndDate(request.getEndDate());

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        User user = userRepository.findByEmail(email);
        booking.setUser(user);

        if (carRepository.existsById(request.getCarId())) {
            Optional<Car> car = carRepository.findById(request.getCarId());
            booking.setCar(car.get());
        }

        Booking createdBooking = bookingRepository.save(booking);

        return getBookingResponse(createdBooking);
    }

    @DeleteMapping("/{bookingId}")
    public ResponseEntity<?> deleteBooking(@PathVariable(value = "bookingId") Long bookingId) {
        Booking booking;
        if (bookingRepository.existsById(bookingId)) {
            booking = bookingRepository.findById(bookingId).orElseThrow(() -> new RuntimeException("not found"));
            bookingRepository.delete(booking);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(booking);
    }

    public BookingResponse getBookingResponse(Booking booking) {
        return new BookingResponse(
                booking.getStartDate(),
                booking.getEndDate(),
                booking.getBookingPrice(),
                booking.getCar().getCarId(),
                booking.getUser().getEmail());
    }
}
