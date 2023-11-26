package com.example.chat_test.repository;

import com.example.chat_test.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, String> {
    List<ChatRoom> findListByChatRoomMembersId(long userId);
}
