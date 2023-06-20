package com.login.loginApp;

import com.login.loginApp.model.Gifs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GifsService {

    private final GifsRepository gifsRepository;

    @Autowired
    public GifsService(GifsRepository gifsRepository) {
        this.gifsRepository = gifsRepository;
    }

    public List< Gifs > getAllGifs() {
        List<Gifs> list = new ArrayList<>();
        list = gifsRepository.findAll();

        return list;
    }

}
