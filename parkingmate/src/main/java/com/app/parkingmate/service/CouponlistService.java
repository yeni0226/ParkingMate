package com.app.parkingmate.service;

import com.app.parkingmate.domain.VO.CouponVO;
import com.app.parkingmate.domain.VO.CouponlistVO;

import java.util.List;
import java.util.Optional;

public interface CouponlistService {
    // 쿠폰 작성
    public void create(CouponlistVO couponlistVO);

    //    쿠폰 리스트
    public List<CouponlistVO> list(Integer userId);


    //    쿠폰 status 수정
    public void updateStatus(CouponlistVO couponlistVO);
}
