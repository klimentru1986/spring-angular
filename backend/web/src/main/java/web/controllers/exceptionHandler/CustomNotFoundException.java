package web.controllers.exceptionHandler;

public class CustomNotFoundException extends RuntimeException {
    public CustomNotFoundException() {
    }

    public CustomNotFoundException(String s) {
        super(s);
    }

    public CustomNotFoundException(String s, Throwable throwable) {
        super(s, throwable);
    }

    public CustomNotFoundException(Throwable throwable) {
        super(throwable);
    }

    public CustomNotFoundException(String s, Throwable throwable, boolean b, boolean b1) {
        super(s, throwable, b, b1);
    }
}
