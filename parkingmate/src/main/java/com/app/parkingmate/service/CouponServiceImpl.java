package com.app.parkingmate.service;

import com.app.parkingmate.domain.VO.CouponVO;
import com.app.parkingmate.repository.CouponDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService {
    private final CouponDAO couponDAO;
    @Override
    public void create(CouponVO couponVO) {couponDAO.save(couponVO);}

    @Override
    public List<CouponVO> list() {
        return couponDAO.list();
    }

    @Override
    public Optional<CouponVO> select(Integer id) {
        return couponDAO.select(id);
    }

    @Override
    public void update(CouponVO couponVO) { couponDAO.update(couponVO);}

    @Override
    public void updateStatus(CouponVO couponVO) {couponDAO.updateStatus(couponVO);}
}
