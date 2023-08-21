import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  // private cartObs$: ReplaySubject<cartItemList[]> = new ReplaySubject(1);

  constructor() {}

  // getCartItems(): Observable<cartItemList> {
  //   return this.cartObs$.asObservable();
  // }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItemList.push(product)


    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
      grandTotal.toFixed(2)
    });
    return grandTotal;
  }

  removeItem(index: number){
    this.cartItemList.splice(index, 1);
    this.productList.next(this.cartItemList)
}

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
