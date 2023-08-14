import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  credentials = {
    username: "",
    password: ""
  }
  isError:boolean = false;
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  login (){
    this.authService.login(this.credentials).subscribe(
      (data: {token: string, code?: number }) => {
        if (data.code ===404) {
          this.isError = true;
          this.errorMessage = "Credentials not valid";
        } else {
          this.isError = false;
          this.authService.setToken(data.token);
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.isError = true;
        this.errorMessage = 'Incorrect username or password';
        console.error(error);
      }
    );
  };
};
