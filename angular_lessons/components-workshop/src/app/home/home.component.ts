import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WellcomeMsgComponent } from '../shared/wellcome-msg/wellcome-msg.component';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, WellcomeMsgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  constructor(private userService: UserService) {}

}
