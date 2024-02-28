import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { ChatService } from 'src/app/services/ChatService';

@Component({
  selector: 'app-client-service-chat',
  templateUrl: './client-service-chat.component.html',
  styleUrls: ['./client-service-chat.component.css']
})
export class ClientServiceChatComponent implements OnInit {

  messageInput: string = '';
  userId:     string="00000001";
  receiverId: string="00000046";
  messageList: any[] = [];

  constructor(private chatService: ChatService){}

  ngOnInit(): void {
    this.chatService.joinRoom("00000046");
    this.lisenerMessage();
  }

  sendMessage() {
    const chatMessage = {
      message: this.messageInput,
      producer: this.userId,
      receiver: this.receiverId
    }as ChatMessage
    this.chatService.sendMessage(this.userId, chatMessage);
    this.messageInput = '';
  }

  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messagesJSON: any[]) => {

      this.messageList = messagesJSON.map((item: ChatMessage)=> (
        {
        ...item,
        message_side: item.producer === this.userId ? 'sender': 'receiver'
        })
      )
    });
  }
}
