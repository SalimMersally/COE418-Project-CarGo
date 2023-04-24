package com.cargo.temporal.workflow;

public class BookingWorkflowImpl implements BookingWorkflow {
    @Override
    public void bookCar() {
        System.out.println("Car booked");
    }
}