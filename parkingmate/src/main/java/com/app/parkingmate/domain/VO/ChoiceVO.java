package com.app.parkingmate.domain.VO;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Data
public class ChoiceVO {
//    찜 고유 id
//     not null
    private Integer ChoiceId;
//    찜 카테고리
//    도시
//    도시 : (시), (구) 카테고리
//    500자
    private  String ChoiceCategory;
//   찜 기간
    private Integer Choice_Period;
//    재판매 요청
//    기본 값 : false
//    Ture : 해당 찜 재판매 요청
//    False : 해당 찜 재판매 요청 x
//     not null
    private Boolean ReChoiceRequest;
//    생성 날짜
    private Date CreateDate;
//    업데이트 날짜
    private Date UpdateDate;

//    =========================================== FK
//    회원 테이블의 회원 id
//     not null
    private Integer UserId;
//    주차장 테이블의 주차장 id
//     not null
    private Integer ParkingId;
}
