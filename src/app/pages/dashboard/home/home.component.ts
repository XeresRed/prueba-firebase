import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userData$: Observable<User | null> = of(null);

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.userData$ = this.userService.user$;
  }

  ngOnInit(): void {}

  logout() {
    this.authService.SignOut();
  }
}
