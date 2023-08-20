import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    // let sum = 1;
    // this.cartItemList.forEach((b:any) => {
    //   if (product.id === b.product){
    //     b.quantity++;
    //     b.total = b.price * b.quantity;
    //     sum = 0
    //     b.total.toFixed(2)
    //     }
    //   });
    // if (sum==1) {
    this.cartItemList.push(product)

    // this.cartItemList.push(((b:any) => {
    //   if (product.id === b.product){
    //     b.quantity++;
    //     b.total = b.price * b.quantity;
    //     b.total.toFixed(2)
    //   }
    // }));
    // console.log(product)
      // }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log((this.cartItemList));
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
