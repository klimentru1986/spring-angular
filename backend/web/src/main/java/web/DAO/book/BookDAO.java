package web.DAO.book;

import web.domain.entity.Book;
import web.domain.entity.Customer;

import java.util.List;

public interface BookDAO {

    public List<Book> getBooks();

    public Book getBookById(Long id);

    public Book saveOrUpdateBook(Book book);

    public void deleteBook(Long id);

}
