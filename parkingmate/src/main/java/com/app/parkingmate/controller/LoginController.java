package com.app.parkingmate.controller;


import com.app.parkingmate.domain.VO.UserVO;
import com.app.parkingmate.repository.UserDAO;
import com.app.parkingmate.service.UserService;
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
    private final UserService userService;
    private final UserDAO userDAO;
    @GetMapping("login")
    public void goToLoginForm(Integer Id){
//        log.info(userService.getMember(UserId).get().getUserName());
        log.info(userService.getMember(Id).toString());
    }


    @GetMapping("sign-up")
    public void goToSignUpForm(){;}

    @GetMapping("sign-up-complete")
    public void goToSignUpComplete(){;}

    @GetMapping("find-id")
    public void goToFindIdForm(){;}

    @GetMapping("find-password")
    public void goToFindPasswordForm(){;}

}
