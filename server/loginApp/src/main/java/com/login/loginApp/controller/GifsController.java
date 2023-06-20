package com.login.loginApp.controller;

import com.login.loginApp.GifsService;
import com.login.loginApp.model.Gifs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/gifs")
public class GifsController {

    private final GifsService gifsService;

    @Autowired
    public GifsController(GifsService gifsService) {
        this.gifsService = gifsService;
    }

    @GetMapping
    public List< Gifs > getGifs() {
        List< Gifs > list = new ArrayList<>();
        list = gifsService.getAllGifs();
        return list;
    }

}
