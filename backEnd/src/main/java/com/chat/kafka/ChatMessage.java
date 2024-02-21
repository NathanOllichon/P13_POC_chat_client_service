package com.chat.kafka;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@Builder
@ToString
public class ChatMessage {
	
	private String message;
    private String producer;
    private String consumer;
}