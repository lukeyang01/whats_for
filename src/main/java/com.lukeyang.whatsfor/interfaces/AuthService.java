package com.lukeyang.whatsfor.interfaces;

import com.lukeyang.whatsfor.models.User;
import com.lukeyang.whatsfor.models.UserRegistrationDTO;

import java.util.List;

public interface AuthService {
    void saveUser(UserRegistrationDTO userDTO);

    User findUserByEmail(String email);

    List<UserRegistrationDTO> findAllUser();
}
