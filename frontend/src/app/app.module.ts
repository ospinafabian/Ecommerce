import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { StarRatingComponent } from './views/home/components/star-rating/star-rating.component';
import { RegisterComponent } from './views/register/register.component';
import { FilterPipe } from './shared/filter.pipe';
import { PaymentComponent } from './views/checkout/components/payment/payment.component';
import { ErrorComponent } from './components/error/error.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SummaryComponent } from './views/checkout/components/summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    StarRatingComponent,
    RegisterComponent,
    FilterPipe,
    PaymentComponent,
    ErrorComponent,
    LoaderComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
