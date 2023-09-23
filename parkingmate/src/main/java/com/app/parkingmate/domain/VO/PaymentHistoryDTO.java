package com.app.parkingmate.domain.VO;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Date;

@Component
@Data
public class PaymentHistoryDTO {
//    결제 내역 고유 id
//    not null
    private Integer PaymentHistoryId;
//    결제 일
//    not null
    private Date PaymentHistoryDate;
//    결제 취소 일
    private Date PaymentHistoryCancelDate;
//    결제 상태
//    기본 값 : 신용 카드 결제
//    옵션 : 신용 카드, 네이버 페이, 카카오 페이
//    not null
    private String PaymentHistoryStatus;
//    생성 날짜
    private LocalDateTime CreateDate;
//    업데이트 날짜
    private LocalDateTime UpdateDate;

//    ================================== FK
//    쿠폰 테이블 id
//    not null
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
//=============================================
//    주차장 테이블 id
//    not null
    private Integer ParkingId;
    //    주차장 주소
//    3000자
//    not null
    private String ParkingAddress;
    //    주차장 카테고리
//    1000자
//    도시(시),(구)를 나타냄
    private String ParkingCategory;
    //    주차장 명
//    1000자
//    not null
    private String ParkingName;
    //    주차장내용(세부정보)
//    3000자
    private String ParkingContent;
    //    주차장 평점
//    기본 값 : 5
    private Integer ParkingGrade;
    //    주차장 이용 수
//    기본 값 : 0
    private  Integer ParkingUseCount;
    //    주차장 대여 금액(시간당)
//    기본 값 : 1000
    private Integer ParkingPrice;
    //    주차 면수
//    기본 값 : 5
//    not null
    private Integer Parking_Count;
    //=============================================
//    회원 테이블 고유 번호
//    not null
    private Integer UserId;
    //    회원 닉네임
//    not null
    private String UserNickName;
    //    회원 이름
//    not null
    private String UserName;
    //    회원 패스워드
//    500자
//    not null
    private String UserPassword;
    //    회원 이메일
//    500자
//    not null
    private String UserEmail;
    //    회원 전화번호
//    not null
    private Integer UserPhoneNumber;
    //    회원 상태
//    기본 값 : 이용 중
//    옵션 : 이용 중, 정지, 탈퇴
//    not null
    private String UserStatus;
    //    회원 구분
//    기본 값 : 회원
//    옵션 : 회원 ,판매자
//    not null
    private String UserClass;
    //    회원 가입 날짜
//    not null
    private Date UserStartDate;
    //    회원탈퇴 일수
//    기본 값 : 0
    private Integer UserWithdrawalCount;
    //  회원 프로필
//  not null
    private  String UserProfile;
    //    SNS 로그인상태
//    기본 값 : 미사용
//    옵션 : 미사용, 카카오 로그인
    private String UserSnsLoginStatus;
    //=============================================
//    예약 테이블 고유 번호
//    not null
    private Integer ReservationId;
    //    예약 테이블의 예약 날짜
//    not null
    private Date ReservationDate;
    //    예약 요청 사항
//    1000자
    private String ReservationRequest;
    //    예약 번호
//    1000자
//    not null
    private String ReservationNumber;
    //    예약 상태
//    기본 값 : 결제 중
//    not null
    private String ReservationStatus;
    //=============================================
//    이용내역 테이블 고유 번호
//    not null
    private  Integer UseHistoryId;
    //    이용내역 카테고리
//    기본 값 : 이용 중
//    옵션 : 이용 중, 이용 완료, 취소
//    not null
    private String UseHistoryCategory;
    //    이용내역 제목
//    1000자
//    not null
    private String UseHistoryTitle;
    //    이용내역 본문
//    3000자
//    not null
    private  String UseHistoryContent;
    //    이용날짜
//    not null
    private Date UseDate;
    //    이용 시간
//    기본 값 : 30(분)
//    not null
    private Date UseTime;
}
