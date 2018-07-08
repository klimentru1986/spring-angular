package web.services.customer;

import web.domain.entity.Customer;

import java.util.List;

public interface CustomerService {

    public List<Customer> getCustomers();

    public Customer getCustomerById(Long id);
}
