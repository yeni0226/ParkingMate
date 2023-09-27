package com.app.parkingmate.domain.DTO;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Date;

@Component
@Data
public class CarInfoDTO {
//    차량정보 고유 id
//     not null
    private Integer CarInfoId;
//    차량 모델
//     not null
    private String CarModel;
//    차량 번호
//     not null
    private String CarNumber;
//    차량 등록일
//     not null
    private Date CarRegisterDate;
//    차량 등록 상태
//    기본 값 : 등록 중
//    옵션 : 등록, 취소, 알 수 없음
//     not null
    private String CarRegisterStatus;
//    생성 날짜
    private LocalDateTime CreateDate;
//    업데이트 날짜
    private LocalDateTime UpdateDate;

//    ================================ FK
//    회원 테이블 회원 id
//     not null
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
}
