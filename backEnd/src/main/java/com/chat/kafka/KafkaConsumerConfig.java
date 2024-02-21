package com.chat.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.apache.kafka.clients.consumer.ConsumerConfig;

import java.util.HashMap;
import java.util.Map;

@EnableKafka
@Configuration
public class KafkaConsumerConfig {

	@Autowired
	SimpMessagingTemplate template;

	@Value(value = "${spring.kafka.bootstrap-servers}")
	private String bootstrapAddress;

	@Value(value = "${spring.kafka.consumer.group-id}")
	private String groupId;

	@Bean
	ConsumerFactory<String, ChatMessage> consumerFactory() {
		Map<String, Object> props = new HashMap<>();
		props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
		props.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);
		props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
//		props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
		// not working, kakfa issue
		props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);

		return new DefaultKafkaConsumerFactory<>(props);
	}

	@Bean
	ConcurrentKafkaListenerContainerFactory<String, ChatMessage> kafkaListenerContainerFactory() {

		ConcurrentKafkaListenerContainerFactory<String, ChatMessage> factory = new ConcurrentKafkaListenerContainerFactory<>();
		factory.setConsumerFactory(consumerFactory());
		return factory;
	}

	@KafkaListener(topics = "first_topic", groupId = "${spring.kafka.consumer.group-id}")
	public void listen( String in) {
		System.out.println("in listener: " + in);

		template.convertAndSend("/topic/00000046", in);
		System.out.println("! After template.convertAndSendToUser !");
	}

}
