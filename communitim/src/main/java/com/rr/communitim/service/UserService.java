package com.rr.communitim.service;

import com.rr.communitim.model.User;
import com.rr.communitim.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    private UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User registerUser(String username, String password, String email){
        if(username != null && password != null){
            User user = new User();
            user.setUsername(username);
            user.setPassword(password);
            user.setEmail(email);
            return userRepository.save(user);
        }
        else
            return null;
    }

    public User loginUser(String username, String password){
        return userRepository.findByUsernameAndPassword(username, password).orElse(null);
    }
}
