import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceCharacterComponent } from './choice-character/choice-character.component';
import { ClientServiceChatComponent } from './client-service-chat/client-service-chat.component';
import { UserChatComponent } from './user-chat/user-chat.component';

const routes: Routes = [

  { path: 'choiceCharacter', component: ChoiceCharacterComponent},
  { path: 'userChat', component: UserChatComponent},
  { path: 'clientServiceChat', component: ClientServiceChatComponent},
  { path: '**', redirectTo: 'choiceCharacter' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
