package com.app.parkingmate.mapper;

import com.app.parkingmate.domain.VO.UserVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface UserMapper {
//    회원 정보 조회
    public Optional<UserVO> select(Integer Id);
}
