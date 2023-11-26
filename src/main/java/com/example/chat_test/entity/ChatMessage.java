package com.example.chat_test.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "ChatMessage")
@Builder
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessage {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JoinColumn(name = "roomId", insertable = false, updatable = false)
    private String roomId;

    @JoinColumn(name = "authorId", insertable = false, updatable = false)
    private int authorId;

    @Column(name = "message")
    private String message;

    @Column(name = "createdAt")
    private LocalDateTime createdAt;
}
