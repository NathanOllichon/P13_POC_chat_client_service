import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage } from '../../models/ChatMessage';
import { ChatService } from '../../services/ChatService';
import { messageList } from 'src/app/models/messageList';


@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  messageInput: string = '';
  userId: string="00000046";
  consumerId: string="";
  messageList: messageList[] = [];

  constructor(private chatService: ChatService,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["userId"];
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
      this.messageList = messages.map((item: ChatMessage)=> ({
        ...item,
        message_side: item.producer === this.userId ? 'sender': 'receiver'
      }))
    });
  }

}
