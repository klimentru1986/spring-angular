package web.controllers.customer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import web.controllers.CustomExceptionHandler;

@ControllerAdvice
public class CustomerExceptionHandler extends CustomExceptionHandler {

    @ExceptionHandler
    ResponseEntity<CustomerErrorResponse> exceptionHandler(CustomerNotFoundException exc) {

        CustomerErrorResponse errorResponse = new CustomerErrorResponse();
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        errorResponse.setMessage(exc.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

}
