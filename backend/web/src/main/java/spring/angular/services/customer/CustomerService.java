package spring.angular.services.customer;

import spring.angular.domain.entity.Customer;

import java.util.List;

public interface CustomerService {

    public List<Customer> getCustomers();

    public Customer getCustomerById(Long id);
}
