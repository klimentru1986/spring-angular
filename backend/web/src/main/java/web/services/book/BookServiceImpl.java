package web.services.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web.DAO.book.BookDAO;
import web.domain.entity.Book;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    BookDAO bookDAO;

    @Override
    public List<Book> getBooks() {
        return bookDAO.getBooks();
    }

    @Override
    public Book getBookById(Long id) {
        return bookDAO.getBookById(id);
    }

    @Override
    public Book saveOrUpdate(Book book) {
        return bookDAO.saveOrUpdateBook(book);
    }

    @Override
    public void deleteBook(Long id) {
        bookDAO.deleteBook(id);
    }
}
