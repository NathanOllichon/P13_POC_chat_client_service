import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice-character',
  templateUrl: './choice-character.component.html',
  styleUrls: ['./choice-character.component.css']
})
export class ChoiceCharacterComponent {

  constructor(
    private router: Router
  ) { }

  routeToUserChat1() {
    this.router.navigate(['userChat1'])
  }

  routeToClientServiceChat() {
    this.router.navigate(['clientServiceChat'])
  }

}
