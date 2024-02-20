package com.chat.kafka.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;

import com.chat.kafka.ChatMessage;

@RestController
public class KafkaController {

	@Autowired
	private KafkaTemplate<Object, Object> template;

	public void sendFoo(@PathVariable String sender, @PathVariable String producer, @PathVariable String message) {
		this.template.send("topic1", new ChatMessage(sender, producer, message));
	}

}