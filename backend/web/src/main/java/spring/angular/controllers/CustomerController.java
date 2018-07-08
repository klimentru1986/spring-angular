package spring.angular.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.angular.DAO.customer.CustomerDAO;
import spring.angular.DTO.CustomerDTO;
import spring.angular.domain.entity.Customer;
import spring.angular.services.customer.CustomerService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    CustomerService customerService;

    @RequestMapping
    public List<CustomerDTO> getCustomers() {
        List<Customer> customersEntity = customerService.getCustomers();
        List<CustomerDTO> customers = customersEntity
                .stream()
                .map(c -> modelMapper.map(c, CustomerDTO.class))
                .collect(Collectors.toList());

        return customers;
    }
}
