package com.rr.communitim.controller;

import com.rr.communitim.model.User;
import com.rr.communitim.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="/users")
public class UserController {
    private final UserService userService;
    private User authUser;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<User> getAllUsers(){
        return userService.getUsers();
    }

    @PostMapping(path=  "/add")
    public void registerNewUser(@RequestBody User user){
        userService.registerUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody User user) {
        System.out.println("login request " + user);
        try{
             authUser=userService.loginUser(user.getUsername(),user.getPassword());
             System.out.println("loggin succeded" + authUser);
             return new ResponseEntity(HttpStatus.OK);
        }catch(ResponseStatusException r) {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }
}

