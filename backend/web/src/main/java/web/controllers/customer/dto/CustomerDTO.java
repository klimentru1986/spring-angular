package web.controllers.customer.dto;

import lombok.Data;
import web.controllers.customer.dto.CustomerAdditionalInfoDTO;

@Data
public class CustomerDTO {

    private long id;
    private String firstName;
    private String lastName;
    private CustomerAdditionalInfoDTO additionalInfo;
}
