package spring.angular.services.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.angular.DAO.customer.CustomerDAO;
import spring.angular.domain.entity.Customer;
import spring.angular.services.customer.CustomerService;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerDAO customerDAO;

    @Override
    public List<Customer> getCustomers() {
        return customerDAO.getCustomers();
    }
}
