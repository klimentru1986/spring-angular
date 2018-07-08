package spring.angular.DAO.customer;

import spring.angular.domain.entity.Customer;

import java.util.List;

public interface CustomerDAO {

    public List<Customer> getCustomers();

    public Customer getCustomerById(Long id);
}
