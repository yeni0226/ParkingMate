package com.app.parkingmate.repository;

import com.app.parkingmate.domain.VO.UserVO;
import com.app.parkingmate.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Slf4j
public class UserDAO {
    private final UserMapper userMapper;

//  회원 정보 조회
    public Optional<UserVO> findByMember(Integer Id) {
//        Optional<UserVO> member = userMapper.select(Id);
        return userMapper.select(Id);
    };
}
