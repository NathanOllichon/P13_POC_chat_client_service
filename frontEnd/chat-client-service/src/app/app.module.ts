import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceCharacterComponent } from './choice-character/choice-character.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { ClientServiceChatComponent } from './client-service-chat/client-service-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceCharacterComponent,
    UserChatComponent,
    ClientServiceChatComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
