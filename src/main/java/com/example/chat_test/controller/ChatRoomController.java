package com.example.chat_test.controller;

import com.example.chat_test.entity.ChatMessage;
import com.example.chat_test.entity.ChatMessageInfoDto;
import com.example.chat_test.entity.ChatRoom;
import com.example.chat_test.entity.User;
import com.example.chat_test.service.ChatMessageService;
import com.example.chat_test.service.ChatRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chat/room")
@RequiredArgsConstructor
public class ChatRoomController {
    private final ChatRoomService chatRoomService;
    private final ChatMessageService chatMessageService;

    @PostMapping("/create_chat")
    public ChatRoom createChatRoom(@RequestParam("roomMakerId") long roomMakerId) {
        ChatRoom newRoom = ChatRoom.create();
        User createUser = new User(roomMakerId, "test@test.com", "홍길동", "1233");
        newRoom.createMember(createUser);

        return newRoom;
    }

    @GetMapping("/list")
    public List<ChatRoom> getChatRoomList(@RequestParam("userId") long userId) {
        return chatRoomService.findListByChatRoomMembersId(userId);
    }

    @GetMapping("/enter")
    public List<ChatMessage> getChatRoomMessage(@RequestParam("roomId") String roomId) {
        return chatMessageService.findChatMessages(roomId);
    }


}
