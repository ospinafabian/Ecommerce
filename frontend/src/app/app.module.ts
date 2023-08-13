import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { StarRatingComponent } from './views/home/components/star-rating/star-rating.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
