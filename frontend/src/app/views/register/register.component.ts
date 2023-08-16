import { Component } from '@angular/core';
import { ClientService } from '../../services/clients.service';
import { Client } from '../../models/clients.model';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../log-in/log-in.component.css']
})
export class RegisterComponent {
  client: Client = {
    username: "",
    email: "",
    birthdate: "",
    password: "",
  }

  constructor (private clientService: ClientService, private router: Router) {}

  registerClient(){
    this.clientService.registerClient(this.client).subscribe (
      (data) => {
        this.router.navigate(['/login']);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
