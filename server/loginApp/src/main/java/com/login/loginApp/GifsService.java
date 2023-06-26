package com.login.loginApp;

import com.login.loginApp.model.Gifs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class GifsService {

    private final GifsRepository gifsRepository;

    @Autowired
    public GifsService(GifsRepository gifsRepository) {
        this.gifsRepository = gifsRepository;
    } // constructor

    public List<Gifs> getAllGifs() {
        List<Gifs> list = new ArrayList<>();
        list = gifsRepository.findAll();

        return list;
    }

//    public List<Gifs> getAllGifs() {
//        return gifsRepository.findAll();
//    }

    public Optional<List<Gifs>> gifsByUser(Long userId) {
        Optional<List<Gifs>> list = gifsRepository.findUserGifs(userId);
        return list;
    }

    public boolean deleteGif(Long id) {
        if ( !gifsRepository.existsById(id) ) {
            return false;
        } else {
            gifsRepository.deleteById(id);
            return true;
        }

    }


}
