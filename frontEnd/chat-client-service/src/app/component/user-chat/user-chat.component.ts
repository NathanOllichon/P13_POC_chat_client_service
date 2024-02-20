import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  messageInput: string = '';
  userId: string="";            // userId doit récupérer l'id (en dur) envoyé par le click sur le lien user1 ou user2.
  serviceId: string="";         // serviceId doit récupérer l'id (en dur et toujours le même pour le POC). 
                                // Plus tard il pourra être remplacé par l'id du compte de service si plusieurs comptes.
  messageList: ChatMessage[] = [];

  constructor(private chatService: ChatService){
  }

  ngOnInit(): void {
    this.serviceId = "1"
    //this.userId = this.route.snapshot.params["userId"];
    //a refaire, on passe pas par les parms url mais par une var en dur ? ou envoyé par le lien ? 

    this.chatService.joinChat(this.userId);
    this.lisenerMessage();
  }

  sendMessage() {
    const chatMessage = {
      message: this.messageInput,
      user: this.userId,
      service: this.serviceId
    }as ChatMessage
    this.chatService.sendMessage(chatMessage);
    this.messageInput = '';
  }

  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any)=> ({
        ...item,
        message_side: item.user === this.userId ? 'sender': 'receiver'
      }))
    });
  }

}
