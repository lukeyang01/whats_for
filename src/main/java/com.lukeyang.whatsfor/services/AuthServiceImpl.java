package com.lukeyang.whatsfor.services;

import com.lukeyang.whatsfor.interfaces.AuthService;
import com.lukeyang.whatsfor.controllers.RestExceptionHandler;
import com.lukeyang.whatsfor.models.ApiError;
import com.lukeyang.whatsfor.models.PasswordMatchException;
import com.lukeyang.whatsfor.models.User;
import com.lukeyang.whatsfor.models.UserRegistrationDTO;
import com.lukeyang.whatsfor.repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthServiceImpl implements AuthService {
    private UserRepository userRepository;
    private BCryptPasswordEncoder passwordEncoder;
    private RestExceptionHandler restExceptionHandler;

    public AuthServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void saveUser(UserRegistrationDTO userDTO) {
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(user);
    }

    public void login(UserRegistrationDTO userDTO) {
        User user = findUserByEmail(userDTO.getEmail());
        if (!passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
            throw new PasswordMatchException("Password does not match");
        }
        
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User findUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public List<UserRegistrationDTO> findAllUser() {
        return null;
    }

}
