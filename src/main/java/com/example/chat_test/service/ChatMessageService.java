package com.example.chat_test.service;

import com.example.chat_test.entity.ChatMessage;
import com.example.chat_test.repository.ChatMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatMessageService {
    private final ChatMessageRepository chatMessageRepository;

    public List<ChatMessage> findChatMessages(String roomId) {
        return chatMessageRepository.findChatMessagesByRoomId(roomId);
    }

    public ChatMessage createChatMessage(ChatMessage chatMessage) {
        chatMessage.setCreatedAt(LocalDateTime.now());

        return chatMessage;
    }
}
