package web.controllers.DTO.user;

import lombok.Data;

@Data
public class UserDTO {

    private Long id;
    private String userName;
    private String password;
}
