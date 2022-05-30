package com.rr.communitim.controller;

import com.rr.communitim.model.User;
import com.rr.communitim.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<User> getAllUsers(){
        return userService.getUsers();
    }

    @PostMapping(path="/add")
    public void registerNewUser(@RequestBody User user){
        userService.registerUser(user);
    }

    @PostMapping("/login")
    public void loginUser(@RequestBody User user){
        System.out.println("login request " + user);
        User loggedIn = userService.loginUser(user.getUsername(),user.getPassword());
        if(loggedIn!=null){
            System.out.println("succeded");
        }
        else{
            System.out.println("not succeded");
        }
    }
}
