package com.app.parkingmate.service;

import com.app.parkingmate.domain.VO.UserVO;

import java.util.Optional;

public interface UserService {
//    public Optional<UserVO> getMember(Integer Id);


    public void join(UserVO userVO);


    public UserVO getEmail(UserVO userVO);
}
