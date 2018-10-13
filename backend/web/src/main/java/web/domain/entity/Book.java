package web.domain.entity;

import lombok.Data;

import javax.persistence.*;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @NotNull
    private long id;

    @Column(name = "author")
    @NotNull
    private String author;

    @Column(name = "title")
    @NotNull
    private String title;

    @Column(name = "year")
    @NotNull
    private Long year;
}
