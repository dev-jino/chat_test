package com.example.chat_test.entity;

import lombok.Data;

@Data
public class ChatUserInfoDto {
    private long userId;
    private String nickname;
    private String profileImage;
}
