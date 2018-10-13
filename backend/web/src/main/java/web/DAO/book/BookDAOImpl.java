package web.DAO.book;

import org.springframework.stereotype.Repository;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import web.domain.entity.Book;
import web.domain.entity.Customer;

import javax.persistence.*;
import java.util.List;

@Repository
@Transactional
public class BookDAOImpl implements BookDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Book> getBooks() {
        return entityManager.createQuery("from Book order by id").getResultList();
    }

    @Override
    public Book getBookById(Long id) {
        return entityManager.find(Book.class, id);
    }

    @Override
    public Book saveOrUpdateBook(Book book) {
        return entityManager.merge(book);
    }

    @Override
    public void deleteBook(Long id) {
        Book book = getBookById(id);
        entityManager.remove(book);
    }

}
