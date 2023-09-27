package com.app.parkingmate.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/*")
public class MainController {

     @GetMapping("/")
    public String goToHome(){
        return "/main/main-page";
    }

    @GetMapping("/main-page")
    public String goToMain(){
        return "/main/main-page";
    }


}
