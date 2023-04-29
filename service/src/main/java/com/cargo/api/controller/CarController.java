package com.cargo.api.controller;

import com.cargo.api.response.CarResponse;
import com.cargo.entity.Car;
import com.cargo.repository.CarRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/car")
@CrossOrigin
@AllArgsConstructor
public class CarController {
    private CarRepository carRepository;

    @GetMapping()
    public ResponseEntity<List<CarResponse>> getAllCars() {
        List<Car> carList = carRepository.findAll();

        List<CarResponse> carResponseList = carList.stream().map(this::getResponseFromCar).toList();

        return ResponseEntity.ok(carResponseList);
    }

    @GetMapping(value = "/{carId}")
    public ResponseEntity<CarResponse> getCarById(@PathVariable(value = "carId") Long carId) {
        Car car;
        if (carRepository.findById(carId).isPresent()) {
            car = carRepository.findById(carId).get();
        } else {
            return ResponseEntity.notFound().build();
        }

        CarResponse response = getResponseFromCar(car);

        return ResponseEntity.ok().body(response);
    }

    @PostMapping()
    public ResponseEntity<CarResponse> createCar(@Validated @RequestBody Car receivedCar) {
        Car car = carRepository.save(receivedCar);

        CarResponse response = getResponseFromCar(car);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/{carId}")
    public ResponseEntity<CarResponse> updateCar(@PathVariable(value = "carId") Long carId, @Validated @RequestBody Car carDetails) {
        final Car updatedCar;
        if (carRepository.existsById(carId)) {
            Car car = carRepository.findById(carId).orElseThrow(() -> new RuntimeException("not found"));
            car.setMake(carDetails.getMake());
            car.setModel(carDetails.getModel());
            car.setYear(carDetails.getYear());
            car.setColor(carDetails.getColor());
            car.setUser(carDetails.getUser());
            car.setAddress(carDetails.getAddress());
            updatedCar = carRepository.save(car);
        } else {
            return ResponseEntity.notFound().build();
        }

        CarResponse response = getResponseFromCar(updatedCar);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{carId}")
    public ResponseEntity<String> deleteCar(@PathVariable(value = "carId") Long carId) {
        Car car;
        if (carRepository.existsById(carId)) {
            car = carRepository.findById(carId).orElseThrow(() -> new RuntimeException("not found"));
            carRepository.delete(car);
        } else {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok("Car deleted successfully");
    }

    private CarResponse getResponseFromCar(Car car) {
        return new CarResponse(car.getCarId(), car.getMake(), car.getModel(), car.getYear(), car.getColor(), car.getCostPerDay());
    }
}
