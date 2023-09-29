package com.app.parkingmate;

import com.app.parkingmate.domain.VO.ParkingVO;
import com.app.parkingmate.domain.VO.UserVO;
import com.app.parkingmate.mapper.ParkingMapper;
import com.app.parkingmate.mapper.UserMapper;
import com.app.parkingmate.service.ParkingService;
import com.app.parkingmate.service.UserService;
import com.app.parkingmate.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
@Slf4j
class ParkingmateApplicationTests {

	@Autowired
	private ParkingService parkingService;
	@Test
	void contextLoads() {
	}

	@Test
	public void UserTest() {
		ParkingVO parkingVO = new ParkingVO();
		parkingVO.setParkingAddress("서울 강남구 역삼동 825-20");
		parkingVO.setParkingCategory("강남구 서초동");

		parkingService.getParking(parkingVO).map(ParkingVO::toString).ifPresent(log::info);

	}

}
