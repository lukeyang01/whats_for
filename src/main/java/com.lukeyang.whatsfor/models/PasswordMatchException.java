package com.lukeyang.whatsfor.models;

public class PasswordMatchException extends RuntimeException {
    public PasswordMatchException() {
        super();
    }

    public PasswordMatchException(String message) {
        super(message);
    }
}
