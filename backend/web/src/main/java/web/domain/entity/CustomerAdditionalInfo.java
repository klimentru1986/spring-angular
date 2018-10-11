package web.domain.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
@Table(name = "additional_info")
public class CustomerAdditionalInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @NotNull
    private long id;

    @Column(name = "email")
    @NotNull
    private String email;

    @Column(name = "phose")
    @NotNull
    private String phone;
}