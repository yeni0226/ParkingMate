package com.app.parkingmate.controller;


import com.app.parkingmate.domain.VO.UserVO;
import com.app.parkingmate.repository.UserDAO;
import com.app.parkingmate.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Date;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/login/*")
public class LoginController {
    private final UserService userService;

    @GetMapping("login")
    public void goToLoginForm(Integer Id){
//        log.info(userService.getMember(UserId).get().getUserName());
//        log.info(userService.getMember(Id).toString());
    }


    @GetMapping("sign-up")
    public void goToSignUpForm(UserVO userVO){
        ;}

    @PostMapping("sign-up")
    public RedirectView signUp(UserVO userVO){
        userVO.setUserNickName("choi3333");
        userVO.setUserPhoneNumber("010-1171-2224");
        userVO.setUserStartDate(new Date());
        userVO.setUserProfile("나는철수");

        log.info(userVO.toString());
        userService.join(userVO);

        return new RedirectView("/login/login");
    }

    @GetMapping("sign-up-complete")
    public void goToSignUpComplete(){;}

    @GetMapping("find-id")
    public void goToFindIdForm(){;}

    @GetMapping("find-password")
    public void goToFindPasswordForm(UserVO userVO){;}

    @PostMapping("find-password")
    public RedirectView findEmail(UserVO userVO){
        UserVO foundEmail = userService.getEmail(userVO);
        log.info(foundEmail.toString());
        return new RedirectView("/login/login");
    }

}
