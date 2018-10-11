package web.controllers.customer;

import lombok.Data;

@Data
public class CustomerDTO {

    private long id;
    private String firstName;
    private String lastName;
    private CustomerAdditionalInfoDTO additionalInfo;
}
