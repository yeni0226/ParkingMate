package com.app.parkingmate.mapper;

import com.app.parkingmate.domain.VO.CouponlistVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CouponlistMapper {
    //    쿠폰 생성
    public void insert(CouponlistVO couponlistVO);


    //    쿠폰 status 수정
    public void updateStatus(CouponlistVO couponlistVO);

    //    쿠폰 list
    public List<CouponlistVO> selectAll(Integer userId);

}
