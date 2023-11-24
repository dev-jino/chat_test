package com.example.chat_test.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.ArrayList;
import java.util.List;

@Component
@Log4j2
public class WebSocketHandler extends TextWebSocketHandler {
    private static List<WebSocketSession> list = new ArrayList<>();

    // Client가 접속 시 호출되는 메서드
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        list.add(session);
        log.info(session + " 클라이언트 접속");
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        /*
        * payload : 전송되는 데이터를 의미
        * 예를 들어, 택배를 주고 받을 때, 택배 물건이 payload
        * 송장이나 박스 등 부가적인 것들은 payload가 아님
        */
        String payload = message.getPayload();
        log.info("payload : " + payload);

        for (WebSocketSession webSession : list) {
            webSession.sendMessage(message);
        }
    }

    // Client가 접속 해제 시 호출되는 메서드
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        list.remove(session);
        log.info(session + " 클라이언트 접속 해제");
    }
}
