package com.login.loginApp;

import com.login.loginApp.model.Token;
import com.login.loginApp.model.Users;
import com.login.loginApp.utils.SHAUtil;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Calendar;
import java.util.Date;
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
        Optional<Users> user = usersRepository.findById(id);
        if ( usersRepository.existsById(id) ) {
            if ( user.get().getId() == id ) {
                usersRepository.deleteById(id);
            } else {
                throw new IllegalStateException("You cant delete that user");
            }
        } else {
            throw new IllegalStateException("The user with the id: " + id + " Does not exist.");
        }
    } //deleteUser()

    @Transactional
    public void updateUser( Long id, String currentPassword, String newPassword ) {

        Users user = usersRepository.findById(id).orElseThrow( () -> new IllegalStateException("The user with the id: " + id + " Does not exist.") );

        if ( (currentPassword == null) || (newPassword == null) ) {

            throw new IllegalStateException("You need to submit your current and new password");
        }

        if (!SHAUtil.verifyHash(currentPassword, user.getPassword() )) {

            throw new IllegalStateException("Password is incorrect");

        } else {
            user.setPassword(newPassword);
        }
    }//updateUser()
} //class UsersService
