package web.controllers.book;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.controllers.book.dto.BookDTO;
import web.controllers.exceptionHandler.CustomNotFoundException;
import web.domain.entity.Book;
import web.services.book.BookService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/book")
@RequiredArgsConstructor
public class BookController {

    private final ModelMapper mapper;
    private final BookService bookService;

    @GetMapping
    public List<BookDTO> getBooks() {
        List<BookDTO> books = bookService.getBooks()
                .stream()
                .map(b -> mapper.map(b, BookDTO.class))
                .collect(Collectors.toList());

        return books;
    }

    @GetMapping("{id}")
    public BookDTO getBookById(@PathVariable Long id) {
        Book bookEntity = bookService.getBookById(id);

        if (bookEntity == null) {
            throw new CustomNotFoundException("Book not found. id=" + id);
        }

        return mapper.map(bookEntity, BookDTO.class);
    }

    @PostMapping
    public BookDTO createBook(@RequestBody BookDTO bookDTO) {
        bookDTO.setId(0);
        Book book = mapper.map(bookDTO, Book.class);
        Book newBook = bookService.saveOrUpdate(book);

        return mapper.map(newBook, BookDTO.class);
    }

    @PutMapping("{id}")
    public BookDTO updateBook(@RequestBody BookDTO bookDTO) {
        Book book = mapper.map(bookDTO, Book.class);
        Book bookEntity = bookService.getBookById(bookDTO.getId());

        if (bookEntity == null) {
            throw new CustomNotFoundException("Book not found. id=" + book.getId());
        }

        Book newBook = bookService.saveOrUpdate(book);

        return mapper.map(newBook, BookDTO.class);
    }


    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);

        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
