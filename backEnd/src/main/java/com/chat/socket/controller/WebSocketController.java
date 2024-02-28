package com.chat.socket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import com.chat.kafka.ChatMessage;

@Controller
public class WebSocketController {

	@Autowired
	private KafkaTemplate<String, ChatMessage> template;

	@MessageMapping("/chat/{roomId}")
	public void chat(@DestinationVariable String roomId, ChatMessage message) {

		template.send("first_topic", new ChatMessage(message.getMessage(), message.getProducer(), message.getReceiver()));

	}

}
