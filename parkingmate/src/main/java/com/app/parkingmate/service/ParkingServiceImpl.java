package com.app.parkingmate.service;

import com.app.parkingmate.domain.VO.ParkingVO;
import com.app.parkingmate.repository.ParkingDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ParkingServiceImpl implements ParkingService {
    private final ParkingDAO parkingDAO;

    @Override
    public Optional<ParkingVO> getParking(ParkingVO parkingVO) {
        return parkingDAO.findByParking(parkingVO);
    }
}
