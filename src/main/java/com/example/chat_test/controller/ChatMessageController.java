package com.example.chat_test.controller;

import com.example.chat_test.entity.ChatMessage;
import com.example.chat_test.service.ChatMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ChatMessageController {
    private final ChatMessageService chatMessageService;

    @MessageMapping("chat.message")
    public void send(ChatMessage chatMessage) {
        ChatMessage newChat = chatMessageService.createChatMessage(chatMessage);

        
    }
}
