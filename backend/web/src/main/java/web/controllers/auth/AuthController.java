package web.controllers.auth;

import lombok.RequiredArgsConstructor;


import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    @PostMapping
    @RequestMapping("/login")
    public boolean login(@RequestBody SecurityProperties.User user){
        return user.getName().equals("user") && user.getPassword().equals("password");
    }

}
