package web.config;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import web.domain.entity.Customer;


@org.springframework.context.annotation.Configuration
public class AppConfig {

    private SessionFactory sessionFactory = new Configuration()
            .configure("hibernate.cfg.xml")
            .addAnnotatedClass(Customer.class)
            .buildSessionFactory();

    @Bean
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

}
