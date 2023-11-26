package com.example.chat_test.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;

/* 
* @Configuration
* Spring에서 Bean을 수동으로 등록하기 위해 사용
* Bean을 등록할 때 singleton이 되도록 보장
* spring 컨테이너에서 Bean을 관리할 수 있게 됨
*
* @RequiredArgsConstructor
* final이 붙거나 @NotNull이 붙은 필드의 생성자를 자동 생성해주는 롬복 어노테이션
* 한번 의존성을 주입받은 객체는 프로그램이 끝날때 까지 변하지 않는 특징을 가지므로 final을 붙인다.
*
* */
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
                .setAllowedOrigins("*");
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/pub");
        registry.enableSimpleBroker("/sub");
    }
}
