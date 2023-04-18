package com.login.loginApp.controller;

import com.login.loginApp.UsersService;
import com.login.loginApp.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    private final UsersService usersService;

    @Autowired
    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }//constructor


    @GetMapping
    public List<Users> getUsers(){
        return usersService.getAllUsers();
    }//getUsers


    @GetMapping(path = "{userId}")
    public Users getUser(@PathVariable("userId") Long userId ) {
        return usersService.getUser(userId);
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") Long userId ) {
        usersService.deleteUser(userId);
    }

    @PostMapping
    public void addUser(@RequestBody Users user ){
        usersService.addUser( user );
    }

    @PutMapping(path = "{userId}")
    public void updateUser(@PathVariable("userId") Long userId, @RequestParam(required = true) String currentPassword, @RequestParam(required = true) String newPassword ){
        usersService.updateUser(userId, currentPassword, newPassword);
    }

}//class UserController
