package com.login.loginApp.model;

public class Token {

    private final String accessToken;
    private Long id;

    public Token(String accessToken, Long id) {
        this.accessToken = accessToken;
        this.id = id;
    }

    public Token(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}//Class Token
