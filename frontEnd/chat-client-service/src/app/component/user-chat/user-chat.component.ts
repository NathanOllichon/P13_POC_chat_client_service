import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { ChatService } from 'src/app/services/ChatService';
import { messageList } from 'src/app/models/messageList';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  messageInput: string = '';
  userId: string="00000046";
  consumerId: string="00000001";
  messageList: messageList[] = [];

  constructor(private chatService: ChatService){}

  ngOnInit(): void {
    this.chatService.joinRoom(this.userId);
    this.lisenerMessage();
  }

  sendMessage() {
    const chatMessage = {
      message: this.messageInput,
      producer: this.userId,
      consumer: this.consumerId
    }as ChatMessage
    this.chatService.sendMessage(this.userId, chatMessage);
    this.messageInput = '';
  }

  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {

      this.messageList = messages.map((item: any)=> (
        
        console.log("Listen message item => " + item),
        {
        ...item,
        message_side: item.producer === this.userId ? 'sender': 'receiver'
      }))
    });
  }

}
