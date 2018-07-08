package spring.angular.controllers.customer;

import org.apache.tomcat.jni.Status;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.rmi.StubNotFoundException;

@ControllerAdvice
public class CustomerExceptionHandler {

    @ExceptionHandler
    ResponseEntity<CustomerErrorResponse> exceptionHandler(CustomerNotFoundException exc) {

        CustomerErrorResponse errorResponse = new CustomerErrorResponse();
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        errorResponse.setMessage(exc.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    ResponseEntity<CustomerErrorResponse> exceptionHandler(Exception exc) {

        CustomerErrorResponse errorResponse = new CustomerErrorResponse();
        errorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        errorResponse.setMessage(exc.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

}
