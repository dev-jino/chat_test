package com.example.chat_test.entity;

import lombok.Data;
import lombok.Builder;

import java.util.List;

@Data
@Builder
public class ChatRoomListDto {
    private int page;
    private int count;
    private long reqUserId;
    private List<ChatRoomInfoDto> chatRooms;
}
