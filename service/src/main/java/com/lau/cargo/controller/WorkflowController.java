package com.lau.cargo.controller;

import com.lau.cargo.temporal.workflow.BookingWorkflow;
import io.temporal.client.WorkflowClient;
import io.temporal.client.WorkflowClientOptions;
import io.temporal.client.WorkflowOptions;
import io.temporal.serviceclient.WorkflowServiceStubs;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/book")
public class WorkflowController {

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        WorkflowServiceStubs service = WorkflowServiceStubs.newLocalServiceStubs();
        WorkflowClientOptions clientOptions = WorkflowClientOptions.newBuilder().build();
        WorkflowClient client = WorkflowClient.newInstance(service, clientOptions);

        WorkflowOptions options = WorkflowOptions.newBuilder().setTaskQueue("TASK_QUEUE").build();
        BookingWorkflow workflow = client.newWorkflowStub(BookingWorkflow.class, options);

        workflow.bookCar();

        return ResponseEntity.ok("Car is Booked");
    }

}
