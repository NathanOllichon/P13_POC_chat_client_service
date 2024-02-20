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
    public void chat(@DestinationVariable String roomId, ChatMessage message) {
    	
        System.out.println(message);
                
        this.template.send("first_topic", new ChatMessage(message.getMessage(), message.getProducer(), message.getConsumer()));
		
        
        //return message;
        //not return, but use a fonction with     @SendTo("/topic/{roomId}")
        //sendToRoom(roomId, )
    }
    
    //on a aucun autre moyen de passer la roomID ? 
    //ça passera pas sans le @DestinationVariable qui viens de la route de messageMapping
    @SendTo("/topic/{roomId}")
    public ChatMessage sendToRoom(String roomId) {
    	
    	//find message from kafka consumer, filter
    	//kafkaMessage = new chatMessage;
        //System.out.println(message);
        
        //return new ChatMessage(kafkaMessage.getMessage(), kafkaMessage.getProducer(), kafkaMessage.getConsumer());
        		
        //return message;
		return null;
    }

    
}
