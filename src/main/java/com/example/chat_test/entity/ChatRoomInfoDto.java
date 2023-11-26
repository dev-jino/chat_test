package com.example.chat_test.entity;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Data
public class ChatRoomInfoDto {
    private String chatRoomId;
    private ChatMessage lastChatMessage;
    private Set<ChatUserInfoDto> chatRoomMembers;
    private List<ChatMessageInfoDto> latestChatMessages;
    private LocalDateTime createAt;
}
