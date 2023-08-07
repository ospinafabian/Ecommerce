import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../views/home/home.component';
import {LogInComponent} from '../views/log-in/log-in.component';
import {CheckoutComponent} from '../views/checkout/checkout.component';
import {ShoppingCartComponent} from '../views/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'logIn', component: LogInComponent },
  {path: 'checkout', component: CheckoutComponent },
  {path: 'shoppingCart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
