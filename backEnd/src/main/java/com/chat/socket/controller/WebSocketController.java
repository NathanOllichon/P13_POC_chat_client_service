package com.chat.socket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.chat.kafka.ChatMessage;

@Controller
public class WebSocketController {
	
	@Autowired
	private KafkaTemplate<Object, Object> template;
	
    @MessageMapping("/chat/{roomId}")
    @SendTo("/topic/{roomId}")
    public ChatMessage chat(@DestinationVariable String roomId, ChatMessage message) {
    	
        System.out.println(message);
        
        //return new ChatMessage(message.getMessage(), message.getProducer(), message.getConsumer());
        
        this.template.send("first_topic", new ChatMessage(message.getMessage(), message.getProducer(), message.getConsumer()));
		
        
        return message;

        
    }
}