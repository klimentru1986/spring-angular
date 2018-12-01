package web.controllers.customer;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.controllers.customer.dto.CustomerDTO;
import web.controllers.exceptionHandler.CustomNotFoundException;
import web.domain.entity.Customer;
import web.services.customer.CustomerService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class CustomerController {

    private final ModelMapper modelMapper;
    private final CustomerService customerService;

    @GetMapping
    public List<CustomerDTO> getCustomers() {
        List<Customer> customersEntity = customerService.getCustomers();
        List<CustomerDTO> customers = customersEntity
                .stream()
                .map(c -> modelMapper.map(c, CustomerDTO.class))
                .collect(Collectors.toList());

        return customers;
    }

    @GetMapping("/{id}")
    public CustomerDTO getCustomerById(@PathVariable long id) {
        Customer customerEntity = customerService.getCustomerById(id);

        if (customerEntity == null) {
            throw new CustomNotFoundException("Customer not found. id:" + id);
        }

        return modelMapper.map(customerEntity, CustomerDTO.class);
    }

    @PostMapping
    public CustomerDTO createCustomer(@RequestBody CustomerDTO customerDTO) {
        customerDTO.setId(0);
        Customer customer = modelMapper.map(customerDTO, Customer.class);
        Customer newCustomer = customerService.saveOrUpdate(customer);

        return modelMapper.map(newCustomer, CustomerDTO.class);
    }


    @PutMapping("{id}")
    public CustomerDTO updateCustomer(@RequestBody CustomerDTO customerDTO) {
        Customer customer = modelMapper.map(customerDTO, Customer.class);
        Customer customerEntity = customerService.getCustomerById(customer.getId());

        if (customerEntity == null) {
            throw new CustomNotFoundException("Customer not found. id:" + customerDTO.getId());
        }

        Customer newCustomer = customerService.saveOrUpdate(customer);

        return modelMapper.map(newCustomer, CustomerDTO.class);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
