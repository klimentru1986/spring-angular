package web.DAO.customer;

import web.domain.entity.Customer;

import java.util.List;

public interface CustomerDAO {

    public List<Customer> getCustomers();

    public Customer getCustomerById(Long id);
}
