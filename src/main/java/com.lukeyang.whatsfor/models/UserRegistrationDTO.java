package com.lukeyang.whatsfor.models;

public class UserRegistrationDTO {
    private Long id;
    private String username;
    private String password;
    private String email;

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public String getEmail() {
        return this.email;
    }
}
