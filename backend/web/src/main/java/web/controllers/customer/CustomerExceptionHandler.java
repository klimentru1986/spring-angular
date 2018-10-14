package web.controllers.customer;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import web.controllers.exceptionHandler.CustomExceptionHandler;
import web.controllers.exceptionHandler.CustomErrorResponse;
import web.controllers.exceptionHandler.CustomNotFoundException;

@ControllerAdvice
public class CustomerExceptionHandler extends CustomExceptionHandler {

    @ExceptionHandler
    ResponseEntity<CustomErrorResponse> exceptionHandler(CustomNotFoundException exc) {

        CustomErrorResponse errorResponse = new CustomErrorResponse();
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        errorResponse.setMessage(exc.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

}
