import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../views/home/home.component';
import {LogInComponent} from '../views/log-in/log-in.component';
import { RegisterComponent } from '../views/register/register.component'
import {CheckoutComponent} from '../views/checkout/checkout.component';
import {ShoppingCartComponent} from '../views/shopping-cart/shopping-cart.component';


// const routes: Routes = [
//   {path: '', component: HomeComponent },
//   {path: 'login', component: LogInComponent },
//   {path: 'register', component: RegisterComponent },
//   {path: 'checkout', component: CheckoutComponent },
//   {path: 'shoppingCart', component: ShoppingCartComponent }
// ];

const routes: Routes = [
  {path: '', component: LogInComponent },
  {path: 'products', component: HomeComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'checkout', component: CheckoutComponent },
  {path: 'shoppingCart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
