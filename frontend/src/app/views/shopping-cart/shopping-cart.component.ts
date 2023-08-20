import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/products.model';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  products: Product [] = [];
  // public products: any = [];

  public grandTotal !: number;

  constructor (private cartService: CartService) {}

  ngOnInit(): void {
      this.cartService.getProducts().subscribe(res => {
          this.products = res;
          this.grandTotal = this.cartService.getTotalPrice();
      })
  }

  removeItem(item:any){
      this.cartService.removeCartItem(item);
  }

  emptyCart(){
      this.cartService.removeAllCart();
  }
}