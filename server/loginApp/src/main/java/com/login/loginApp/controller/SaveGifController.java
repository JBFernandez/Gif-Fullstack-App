package com.login.loginApp.controller;

import com.login.loginApp.GifsRepository;
import com.login.loginApp.model.Gifs;
import com.login.loginApp.model.Users;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/gifs")
@CrossOrigin("*")
public class SaveGifController {

    private final GifsRepository gifsRepository;

    public SaveGifController(GifsRepository gifsRepository) {
        this.gifsRepository = gifsRepository;
    }


    @PostMapping
    public ResponseEntity<Map< String, String >> addGif(@RequestBody Gifs gif, HttpServletResponse response) throws IOException {
        Optional<List<Gifs>> gifExists = gifsRepository.findByGif( gif.getTitle() );
        Map<String, String> returnValue = new HashMap<>();



        Long count = gifExists.get().stream().filter( g -> g.getUserId().equals(gif.getUserId()) ).count();


        if ( count == 1  ) {
            returnValue.put("error", "A gif with title: " + gif.getTitle() + " Already exists.");

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(returnValue);

        } else {
            gifsRepository.save(gif);
            returnValue.put("status", "Gif Saved");

            return ResponseEntity.status(HttpStatus.OK).body(returnValue);
        }
    }//PostMapping


}
