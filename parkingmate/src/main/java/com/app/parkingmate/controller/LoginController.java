package com.app.parkingmate.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/login/*")
public class LoginController {


    @GetMapping("login")
    public void goToLoginForm(){;}

    @GetMapping("sign-up")
    public void goToSignUpForm(){;}

    @GetMapping("sign-up-complete")
    public void goToSignUpComplete(){;}

    @GetMapping("find-id")
    public void goToFindIdForm(){;}

    @GetMapping("find-password")
    public void goToFindPasswordForm(){;}

}
