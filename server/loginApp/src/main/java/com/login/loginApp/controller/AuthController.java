package com.login.loginApp.controller;

import com.login.loginApp.UsersRepository;
import com.login.loginApp.model.LoginData;
import com.login.loginApp.model.Token;
import com.login.loginApp.model.Users;
import com.login.loginApp.utils.SHAUtil;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import java.rmi.server.ServerCloneException;
import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/login")
@CrossOrigin("*")
public class AuthController {


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
    public AuthController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @PostMapping
    public Token login(@RequestBody LoginData data) throws ServletException {

        Optional<Users> userByEmail = usersRepository.findByEmail( data.getEmail() );
        if ( userByEmail.isPresent() ) {

            if (SHAUtil.verifyHash( data.getPassword(), userByEmail.get().getPassword() )) {

                return new Token(generateToken( data.getEmail() ));
            }
        }

        throw new ServletException("Invalid login. Please check your credentials.");
    }

}//Class AuthController
