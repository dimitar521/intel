import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wellcome-msg',
  standalone: true,
  imports: [],
  templateUrl: './wellcome-msg.component.html',
  styleUrl: './wellcome-msg.component.css'
})
export class WellcomeMsgComponent {
  @Input('isLoggedIn')isLoggedIn = false;

}
