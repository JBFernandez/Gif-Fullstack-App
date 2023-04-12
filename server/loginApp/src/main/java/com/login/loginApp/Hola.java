package com.login.loginApp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hola {

    @GetMapping("/hola")
    public String fergie() {
        return "Hola baby";
    }

    @GetMapping("/hola2")
    public String fergie2() {
        return "Fergie la más guapa";
    }


}
