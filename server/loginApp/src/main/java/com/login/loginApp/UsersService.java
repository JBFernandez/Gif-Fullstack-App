package com.login.loginApp;

import com.login.loginApp.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    private final UsersRepository usersRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }// Constructor

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    } // getAllUsers()

    public Users getUser(Long id) {
        return usersRepository.findById(id).orElseThrow( () -> new IllegalStateException("The user with the id: " + id + " Does not exist."  ) );
    }// getUser()

    public void deleteUser(Long id) {
        if ( usersRepository.existsById(id) ) {
            usersRepository.deleteById(id);
        } else {
            throw new IllegalStateException("The user with the id: " + id + " Does not exist.");
        }
    } //deleteUser()

    public void addUser(Users user) {
        Optional<Users> userByEmail = usersRepository.findByEmail( user.getEmail() );

        if ( userByEmail.isPresent() ) {
            throw new IllegalStateException("An account with the email: " + user.getEmail() + " Already exists.");
        } else {
            usersRepository.save(user);
        }
    }//addUser

    @Transactional
    public void updateUser( Long id, String currentPassword, String newPassword ) {

        Users user = usersRepository.findById(id).orElseThrow( () -> new IllegalStateException("The user with the id: " + id + " Does not exist.") );

        if ( (currentPassword == null) || (newPassword == null) ) {

            throw new IllegalStateException("You need to submit your current and new password");
        }

        if ( !currentPassword.equals(user.getPassword())  ) {

            throw new IllegalStateException("Password is incorrect");

        } else {
            user.setPassword(newPassword);
        }
    }//updateUser()
} //class UsersService
