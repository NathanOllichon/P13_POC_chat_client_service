import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';

import { ChatMessage } from './../models/ChatMessage';
import { BehaviorSubject } from 'rxjs';

declare var SockJS: any;


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private stompClient: any;
  private messageSubject: BehaviorSubject<String[]> = new BehaviorSubject<String[]>([]);

  constructor() { 
    const url = '//localhost:3001/chat-socket';

    this.stompClient = Stomp.over(function(){
      return new SockJS(url);
    });
  }

  joinRoom(roomId: string) {
    this.stompClient.connect({}, ()=>{
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {

        console.log("messages.body => " + messages.body);
        const messageContent = JSON.parse(messages.body);

        const currentMessage = this.messageSubject.getValue();
        currentMessage.push(messageContent);

        this.messageSubject.next(currentMessage);
      })
    })
  }

  sendMessage(roomId: string, chatMessage: ChatMessage) {
    this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage))
  }

  getMessageSubject(){
    return this.messageSubject.asObservable();
  }
}
