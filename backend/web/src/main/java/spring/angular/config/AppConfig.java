package spring.angular.config;

import com.sun.xml.internal.fastinfoset.sax.Properties;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.context.annotation.Bean;
import spring.angular.domain.entity.Customer;

@org.springframework.context.annotation.Configuration
public class AppConfig {

    private SessionFactory sessionFactory = new Configuration()
            .configure("hibernate.cfg.xml")
            .addAnnotatedClass(Customer.class)
            .buildSessionFactory();

    @Bean
    public SessionFactory getSessionFactory() {
        return this.sessionFactory;
    }
}
