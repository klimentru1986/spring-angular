package web.controllers.exceptionHandler;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
}
