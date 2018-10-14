package web.services.book;

import web.domain.entity.Book;
import web.domain.entity.Customer;

import java.util.List;

public interface BookService {

    public List<Book> getBooks();

    public Book getBookById(Long id);

    public Book saveOrUpdate(Book book);

    public void deleteBook(Long id);

}
