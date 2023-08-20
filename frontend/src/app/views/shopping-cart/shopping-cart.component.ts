import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/products.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  products: Product [] = [];
  // public products: any = [];
  // public sum: Observable <number>;

  public grandTotal !: number;

  constructor (private cartService: CartService, ) {}

  ngOnInit(): void {
      this.cartService.getProducts().subscribe(res => {
          this.products = res;
          this.grandTotal = this.cartService.getTotalPrice();
          this.products.reduce((p, {price}) => p + price,0)
      })
  }

  additemtocart(item:any){
    this.products.push(item);
  }

  totalPrice(){
    return this.products.reduce((p, {price}) => p + price, 0);
  }

  removeItem(item:any){
      this.cartService.removeItem(item);
  }

  emptyCart(){
      this.cartService.removeAllCart();
  }
}