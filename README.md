# Application

This application is a POC for implement a first kafka with websocket for have a asynchronious system of messaging.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.
Don't forget to install your node_modules before starting (`npm install`).

## Kafka

First install and run a kafka based on zookeeper, keep basics ports.

## Back

### install dependencies

Use a `maven clean install`.

### Launch back server

Run application at Spring Boot App.  

## Front

Go on front folder.

### install dependencies

Use `npm install`.

### Launch front server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.




## Try it

Open two windows, one with chatUser and another with clientService.
First send you messages like a conversation.

After that on cli go at kafka folder and send a message like a producer. 
On windows "bin\windows\kafka-console-producer.bat --topic first_topic --bootstrap-server localhost:9092"
Don't forget the JSON format ! Producer and Receiver ID should not be change for have the good result in front.
"{"message":"Bonjour à vous deux, voici un message asynchrone","producer":"00000046","receiver":"00000001"}"
