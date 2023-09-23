package com.app.parkingmate.domain.VO;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@Data
public class ProfileVO {
//    프로필 고유 id
//    not null
    private Integer ProfileId;
//    프로필 명
//    not null
    private String ProfileName;
//    프로필 내용
//    기본 값 : 안녕하세요
//    3000자
    private String ProfileContent;
//    프로필 이미지 경로
//    3000자
//    not null
    private String ProfileImagePath;
//    생성 날짜
    private LocalDateTime CreateDate;
//    업데이트 날짜
    private LocalDateTime UpdateDate;
//    =========================================== FK
//    회원 테이블 고유 id
//    not null
    private Integer UserId;
}
