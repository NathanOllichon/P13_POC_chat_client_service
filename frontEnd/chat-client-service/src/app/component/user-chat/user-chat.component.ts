import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { ChatService } from 'src/app/services/ChatService';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  messageInput: string = '';
  userId:     string="00000046";
  receiverId: string="00000001";
  messageList: any[] = [];

  constructor(private chatService: ChatService){}

  ngOnInit(): void {
    this.chatService.joinRoom(this.userId);
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
