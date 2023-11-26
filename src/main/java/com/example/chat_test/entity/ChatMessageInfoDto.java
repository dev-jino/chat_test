package com.example.chat_test.entity;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ChatMessageInfoDto {
    private long chatMessageId;
    private long authorId;
    private String message;
    private LocalDateTime createAt;
}
