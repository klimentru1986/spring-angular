package web.services.customer;

import web.domain.entity.Customer;

import java.util.List;

public interface CustomerService {

    public List<Customer> getCustomers();

    public Customer getCustomerById(Long id);

    public Customer saveOrUpdate(Customer customer);

    public void deleteCustomer(Long id);
}
