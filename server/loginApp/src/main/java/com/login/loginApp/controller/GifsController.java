package com.login.loginApp.controller;

import com.login.loginApp.GifsRepository;
import com.login.loginApp.GifsService;
import com.login.loginApp.model.Gifs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/api/gifs")
@CrossOrigin("*")
public class GifsController {

    private final GifsService gifsService;

    @Autowired
    public GifsController(GifsService gifsService, GifsRepository gifsRepository) {
        this.gifsService = gifsService;
    }//constructor


    @GetMapping
    public List< Gifs > getGifs() {
        List< Gifs > list = new ArrayList<>();
        list = gifsService.getAllGifs();
        return list;
    }

    @GetMapping(path = "{userId}")
    public Optional<List<Gifs>> userGifs(@PathVariable("userId") Long userId ) {
        return gifsService.gifsByUser(userId);
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<Map<String, String>> deleteGif(@PathVariable("id") Long id, HttpServletResponse response) throws IOException {
        Map<String, String> responseValue = new HashMap<>();
        boolean gifExists = gifsService.deleteGif(id);
        if ( !gifExists ) {
            responseValue.put("error", "A gif with id: " + id + " doesnt exists.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseValue);
        } else {
            responseValue.put("Status", "Gif Deleted");
            return ResponseEntity.status(HttpStatus.OK).body(responseValue);
        }

    }


}
