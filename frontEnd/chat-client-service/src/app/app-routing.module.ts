import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceCharacterComponent } from './component/choice-character/choice-character.component';
import { ClientServiceChatComponent } from './component/client-service-chat/client-service-chat.component';
import { UserChatComponent } from './component/user-chat/user-chat.component';

const routes: Routes = [

  { path: 'choiceCharacter', component: ChoiceCharacterComponent},
  { path: 'userChat1', component: UserChatComponent},
  { path: 'clientServiceChat', component: ClientServiceChatComponent},
  { path: '**', redirectTo: 'choiceCharacter'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
