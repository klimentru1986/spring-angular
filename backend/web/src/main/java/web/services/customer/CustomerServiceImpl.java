package web.services.customer;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web.DAO.customer.CustomerDAO;
import web.domain.entity.Customer;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerDAO customerDAO;

    @Override
    public List<Customer> getCustomers() {
        return customerDAO.getCustomers();
    }

    @Override
    public Customer getCustomerById(Long id) {
        return customerDAO.getCustomerById(id);
    }

    @Override
    public Customer saveOrUpdate(Customer customer) {
        return customerDAO.saveOrUpdateCustomer(customer);
    }

    @Override
    public void deleteCustomer(Long id) {
        customerDAO.deleteCustomer(id);
    }
}
