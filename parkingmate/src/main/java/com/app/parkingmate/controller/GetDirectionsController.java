package com.app.parkingmate.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/get-directions/*")
public class GetDirectionsController {


    @GetMapping("my-location")
    public void goToMyLocation(){;}

    @GetMapping("payment-page")
    public void goToPaymentPage(){;}

    @GetMapping("road-view")
    public void goToRoadView(){;}

    @GetMapping("view")
    public void goToView(){;}

    @GetMapping("reservation-list")
    public void goToReservationList(){;}

    @GetMapping("reservation-detail")
    public void goToReservationDetail(){;}


}
