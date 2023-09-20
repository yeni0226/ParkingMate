package com.app.parkingmate.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class UserVO {
    private String name;
    private int age;
}
