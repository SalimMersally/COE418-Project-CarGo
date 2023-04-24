package com.cargo.temporal.worker;

import com.cargo.temporal.workflow.BookingWorkflowImpl;
import io.temporal.client.WorkflowClient;
import io.temporal.serviceclient.WorkflowServiceStubs;
import io.temporal.worker.Worker;
import io.temporal.worker.WorkerFactory;
import io.temporal.worker.WorkerFactoryOptions;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Configuration;

@Configuration
@AllArgsConstructor
public class WorkerStarter {
    @PostConstruct
    public static void startParentWorker() {
        WorkflowServiceStubs service = WorkflowServiceStubs.newLocalServiceStubs();
        WorkflowClient client = WorkflowClient.newInstance(service);

        WorkerFactoryOptions factoryOptions = WorkerFactoryOptions.newBuilder().build();
        WorkerFactory factory = WorkerFactory.newInstance(client, factoryOptions);

        Worker worker = factory.newWorker("TASK_QUEUE");

        worker.registerWorkflowImplementationTypes(BookingWorkflowImpl.class);

        System.out.println("Starting Workflow worker");
        factory.start();
    }
}
