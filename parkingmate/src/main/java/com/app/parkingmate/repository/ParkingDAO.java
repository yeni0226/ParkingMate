package com.app.parkingmate.repository;

import com.app.parkingmate.domain.VO.ParkingVO;
import com.app.parkingmate.mapper.ParkingMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ParkingDAO {
    private final ParkingMapper parkingMapper;

    //    주차장 조회
    public Optional<ParkingVO> findByParking(ParkingVO parkingVO){return parkingMapper.select(parkingVO);}
}
