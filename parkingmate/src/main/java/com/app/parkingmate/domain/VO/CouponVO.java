package com.app.parkingmate.domain.VO;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Date;

@Component
@Data
public class CouponVO {
//    쿠폰 고유 id
//     not null
    private Integer CouponId;
//    쿠폰 명
//     not null
    private String CouponName;
//    쿠폰 내용
//    3000자
//     not null
    private String CouponContent;
//    쿠폰 할인률
//    기본 값 : 10
//     not null
    private Integer CouponDiscountPercent;
//    쿠폰 발급 날짜
//    not null
    private Date CouponStartDate;
//    쿠폰 종료 날짜
//     not null
    private Date CouponEndDate;
//    쿠폰 사용 조건
//    3000자
    private String CouponUseCondition;
//    쿠폰 코드
//     not null
//    500자
    private String CouponCode;
//    쿠폰 상태
//    기본 값 : 0
//    옵션 : 0 - 사용 가능, 1 - 사용 불가
    private Integer CouponStatus;
//    생성 날짜
    private LocalDateTime CreateDate;
//    업데이트 날짜
    private LocalDateTime UpdateDate;

//    ================================ FK
//    회원 테이블의 회원 고유 id
//     not null
    private Integer UserId;
//    이벤트 테이블의 이벤트 고유 id
//     not null
    private Integer EventId;
}
