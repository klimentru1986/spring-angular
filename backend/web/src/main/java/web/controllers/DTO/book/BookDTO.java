package web.controllers.DTO.book;

import lombok.Data;

@Data
public class BookDTO {
    private long id;
    private String author;
    private String title;
    private Long year;
}

