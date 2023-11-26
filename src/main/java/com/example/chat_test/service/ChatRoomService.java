package com.example.chat_test.service;

import com.example.chat_test.entity.ChatRoom;
import com.example.chat_test.repository.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;

    public List<ChatRoom> findListByChatRoomMembersId(Long userId) {
        return chatRoomRepository.findListByChatRoomMembersId(userId);
    }

    public ChatRoom findChatRoomByChatRoomId(String chatRoomId) {
        return chatRoomRepository.findById(chatRoomId).get();
    }
}
