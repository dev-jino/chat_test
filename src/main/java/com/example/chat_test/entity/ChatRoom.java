package com.example.chat_test.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Data
@Entity
public class ChatRoom {
    @EqualsAndHashCode.Include
    @Id
    @Column(name = "id")
    private String id;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "lastChatMessageId")
    private ChatMessage lastChatMessageId;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "ChatRoomMembers",
            joinColumns = @JoinColumn(name = "chatRoomId"),
            inverseJoinColumns = @JoinColumn(name = "memberId"))
    private Set<User> chatRoomMembers = new HashSet<>();

    @Column(name = "createdAt")
    private String createdAt;

    public static ChatRoom create() {
        ChatRoom room = new ChatRoom();
        room.setId(UUID.randomUUID().toString());

        return room;
    }

    public void createMember(User roomMaker) {
        this.chatRoomMembers.add(roomMaker);
    }

    public void addMember(User guest) {
        this.chatRoomMembers.add(guest);
    }
}
