package com.login.loginApp.controller;

import com.login.loginApp.UsersRepository;
import com.login.loginApp.UsersService;
import com.login.loginApp.model.Token;
import com.login.loginApp.model.Users;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.http.HttpHeaders;
import java.util.*;

@RestController
@RequestMapping("/api/register")
@CrossOrigin("*")
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


//    @PostMapping
//    public Token addUser(@RequestBody Users user, HttpServletResponse response) throws IOException {
//        Optional<Users> userByEmail = usersRepository.findByEmail( user.getEmail() );
//
//        if ( userByEmail.isPresent() ) {
//
//            response.setHeader("Custom-Header", "foo");
//            response.setStatus(200);
//            response.getWriter().println("Hello World!");
//
//            throw new IllegalStateException("An account with the email: " + user.getEmail() + " Already exists.");
//        } else {
//            usersRepository.save(user);
//             return new Token(generateToken( user.getEmail() ), user.getId() );
//        }
//    }

    @PostMapping
    public ResponseEntity<Map< String, String >> addUser(@RequestBody Users user, HttpServletResponse response) throws IOException {
        Optional<Users> userByEmail = usersRepository.findByEmail( user.getEmail() );
            Map<String, String> returnValue = new HashMap<>();

        if ( userByEmail.isPresent() ) {
            returnValue.put("error", "An account with the email: " + user.getEmail() + " Already exists.");

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(returnValue);

        } else {
            usersRepository.save(user);
            returnValue.put("token", generateToken( user.getEmail() ));
            returnValue.put("id", user.getId().toString() );

            return ResponseEntity.status(HttpStatus.OK).body(returnValue);
        }
    }




}//class UserController
