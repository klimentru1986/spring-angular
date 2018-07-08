package web.DAO.customer;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import web.domain.entity.Customer;

import java.util.List;

@Repository
public class CustomerDAOImpl implements CustomerDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Customer> getCustomers() {
        Session session = sessionFactory.getCurrentSession();
        List<Customer> customers;

        try {
            session.beginTransaction();
            customers = session.createQuery("from Customer").getResultList();
            session.getTransaction().commit();

        } finally {
            session.close();
        }

        return customers;
    }

    @Override
    public Customer getCustomerById(Long id) {
        Session session = sessionFactory.getCurrentSession();
        Customer customer;

        try {
            session.beginTransaction();
            customer = session.get(Customer.class, id);
            session.getTransaction().commit();

        } finally {
            session.close();
        }

        return customer;
    }
}
