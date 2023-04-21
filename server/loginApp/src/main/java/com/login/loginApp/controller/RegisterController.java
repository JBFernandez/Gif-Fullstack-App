package com.login.loginApp.controller;

import com.login.loginApp.UsersRepository;
import com.login.loginApp.UsersService;
import com.login.loginApp.model.Token;
import com.login.loginApp.model.Users;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    private final UsersRepository usersRepository;

    private String generateToken(String email) {

        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.HOUR, 10); //Token valid time
        String secret = "this-secret-is-not-very-secret-99";

        return Jwts.builder().setSubject(email).claim("role", "user")
                .setIssuedAt( new Date() ).setExpiration( calendar.getTime() )
                .signWith( SignatureAlgorithm.HS256, secret ).compact();

    }

    @Autowired
    public RegisterController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }//constructor


    @PostMapping
    public Token addUser(@RequestBody Users user ){
        Optional<Users> userByEmail = usersRepository.findByEmail( user.getEmail() );

        if ( userByEmail.isPresent() ) {
            throw new IllegalStateException("An account with the email: " + user.getEmail() + " Already exists.");
        } else {
            usersRepository.save(user);
             return new Token(generateToken( user.getEmail() ), user.getId() );
        }
    }


}//class UserController
