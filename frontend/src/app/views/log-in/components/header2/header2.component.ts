import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Client } from 'src/app/models/clients.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  id: string | null = '';

  customer: Client = {
    username: '',
    email: '',
    birthdate: '',
    password: '',
  };

  credentials = {
    username: "",
    password: ""
  }

  isError: boolean = false;
  errorMessage: string = "";

  public totalItem: number = 0;
  public searchTerm!: string;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
    
    this.authService.login(this.credentials).subscribe(
      (data: { token: string, code?: number }) =>{
        if(data.code  === 404){
          this.isError = true;
          this.errorMessage = "Credenciales no válidas";
        }else{
          this.isError = false;
          this.authService.setToken(data.token);
        }
      },
      (error:any) => {
        this.isError = true;
        this.errorMessage = "Correo o contraseña no es correcto";
        console.error(error);
      }
    )
  }

  

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
