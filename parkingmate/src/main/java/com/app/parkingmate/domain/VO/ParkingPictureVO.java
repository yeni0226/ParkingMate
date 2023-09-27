package com.app.parkingmate.domain.VO;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
public class ParkingPictureVO {
//    주차장 사진 고유 번호
//    not null
    private Integer ParkingPictureId;
//    주차장 사진 명
//    not null
//    500자
    private String ParkingPictureName;
//    주차장 사진 경로
//    3000자
//    not null
    private String ParkingPicturePath;
//    생성날짜
    private LocalDateTime CreateDate;
//    업데이트 날짜
    private LocalDateTime UpdateDate;

//    =========================================== FK
//    주차장 테이블 고유번호
//    not null
    private Integer ParkingId;
//    회원 테이블 고유 번호
//    not null
    private Integer UserId;
}
