package com.login.loginApp.model;

import javax.persistence.*;

@Entity
@Table(name ="gifs")
public class Gifs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id;
    private String title;
    private String url;
    private Long userId;

    public Gifs(Long id, String title, String url, Long userId) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.userId = userId;
    }

    public Gifs() {

    } //constructor vacío

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    public Long getUserId() {
        return userId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
