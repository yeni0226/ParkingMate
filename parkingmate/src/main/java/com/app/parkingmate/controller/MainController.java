package com.app.parkingmate.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/main/*")
public class MainController {

    @GetMapping("main-page")
    public void goToMainPage(){;}

    @GetMapping("footer")
    public void goToFooter(){;}

    @GetMapping("header")
    public void goToHeader(){;}

    @GetMapping("main-header")
    public void goToMainHeader(){;}
}
