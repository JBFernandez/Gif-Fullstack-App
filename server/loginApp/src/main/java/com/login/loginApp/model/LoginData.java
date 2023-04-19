package com.login.loginApp.model;

public class LoginData {

    private final String email;
    private final String password;

    public LoginData(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public LoginData() {
        this.email = "";
        this.password = "";
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}//class LoginData
