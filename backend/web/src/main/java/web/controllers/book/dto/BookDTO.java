package web.controllers.book.dto;

import lombok.Data;

@Data
public class BookDTO {
    private long id;
    private String author;
    private String title;
    private Long year;
}

