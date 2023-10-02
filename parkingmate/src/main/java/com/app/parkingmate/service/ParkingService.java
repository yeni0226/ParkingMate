package com.app.parkingmate.service;

import com.app.parkingmate.domain.VO.ParkingVO;

import java.util.Optional;

public interface ParkingService {
    //    주차장 조회
    public Optional<ParkingVO> getParking(ParkingVO parkingVO);
}
