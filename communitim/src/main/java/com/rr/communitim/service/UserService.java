package com.rr.communitim.service;

import com.rr.communitim.model.User;
import com.rr.communitim.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {


    private UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User registerUser(User user){
        if(user.getUsername() != null && user.getPassword() != null){
            return userRepository.save(user);
        }
        else
        {
            User errorUser = new User("Error Name","Error password","Error muie");
            return userRepository.save(errorUser);
        }
    }

    public User loginUser(String username, String password) {
        User response = userRepository.findByUsernameAndPassword(username,password).orElse(null);
        if(response!=null){
            System.out.println("This is the response: " + response);
            return response;

        }
        else
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username does not exist.\n");
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
