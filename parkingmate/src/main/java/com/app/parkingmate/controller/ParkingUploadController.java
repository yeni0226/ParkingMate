package com.app.parkingmate.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/parking-upload/*")
public class ParkingUploadController {

    @GetMapping("parking-upload")
    public void goToUParkingUploadForm(){;}
}
