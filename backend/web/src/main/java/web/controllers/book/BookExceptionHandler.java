package web.controllers.book;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import web.controllers.exceptionHandler.CustomErrorResponse;
import web.controllers.exceptionHandler.CustomExceptionHandler;
import web.controllers.exceptionHandler.CustomNotFoundException;

@ControllerAdvice
public class BookExceptionHandler extends CustomExceptionHandler {
}
