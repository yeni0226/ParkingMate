package com.app.parkingmate.controller;


import com.app.parkingmate.domain.VO.ParkingVO;
import com.app.parkingmate.service.ParkingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/*")
public class MainController {
    private final ParkingService parkingService;
    ParkingVO parkingVO = new ParkingVO();

     @GetMapping("/")
    public String goToHome(Model model){
         Optional<ParkingVO> checkParkingName = parkingService.getParking(parkingVO);
//        log.info(checkParkingName.get().getParkingCategory());
//        checkParkingName.get().getParkingAddress();
//        db의 카테고리 부분 값 가져옴
         model.addAttribute("parkings",parkingService.getParking(parkingVO).get().getParkingCategory());
        return "/main/main-page";
    }

    @GetMapping("/main-page")
    public String goToMain(){
        return "/main/main-page";
    }


}
