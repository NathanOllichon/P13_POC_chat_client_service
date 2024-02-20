import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { ChatMessage } from './../models/ChatMessage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private stompClient: any
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);

  constructor() { 
    this.initConnenctionSocket();
  }

  initConnenctionSocket() {
    const url = '//localhost:4200/chat-socket';
    // const socket = new SockJS(url);
    // this.stompClient = Stomp.over(socket)
  }

  joinRoom(roomId: string) {
    this.stompClient.connect({}, ()=>{
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: ChatMessage) => {
        const messageContent = JSON.parse(messages.message);
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
