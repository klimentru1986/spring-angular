package web.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import web.controllers.customer.CustomerErrorResponse;

public class CustomExceptionHandler {

    @ExceptionHandler
    ResponseEntity<CustomerErrorResponse> exceptionHandler(Exception exc) {

        CustomerErrorResponse errorResponse = new CustomerErrorResponse();
        errorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        errorResponse.setMessage(exc.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
