import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email]),
      password: new FormControl(null),
    });
  }

  submit() {
    console.log(`first`, this.loginForm);
    if (!this.loginForm?.valid) {
      return;
    }
    const { email, password } = this.loginForm.value;
    this.authService.SignIn(email, password);
  }
}
