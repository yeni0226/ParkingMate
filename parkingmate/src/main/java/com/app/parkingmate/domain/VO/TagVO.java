package com.app.parkingmate.domain.VO;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
public class TagVO {
//    태그 고유 id
//    not null
    private Integer TagId;
//    태그 1
    private String Tag1;
//    태그 2
    private String Tag2;
//    태그 3
    private String Tag3;
//    생성 날짜
    private LocalDateTime CreateDate;
//    업데이트 날짜
    private LocalDateTime UpdateDate;
//    =================================================== FK
//    회원 테이블 id
//    not null
    private Integer UserId;
//    주차장 테이블 id
//    not null
    private Integer ParkingId;
}
