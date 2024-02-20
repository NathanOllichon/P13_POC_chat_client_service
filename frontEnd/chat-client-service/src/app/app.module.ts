import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceCharacterComponent } from './component/choice-character/choice-character.component';
import { UserChatComponent } from './component/user-chat/user-chat.component';
import { ClientServiceChatComponent } from './component/client-service-chat/client-service-chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceCharacterComponent,
    UserChatComponent,
    ClientServiceChatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
