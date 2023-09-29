package com.app.parkingmate.service;

import com.app.parkingmate.domain.VO.UserVO;
import com.app.parkingmate.repository.UserDAO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import java.util.Optional;


@RequiredArgsConstructor
@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserDAO userDAO;

//
    @Override
    public Optional<UserVO> getMember(Integer Id) {
//        Optional<UserVO> member = userDAO.findByMember(Id);
//        log.info(member);
        return userDAO.findByMember(Id);
    }
}
