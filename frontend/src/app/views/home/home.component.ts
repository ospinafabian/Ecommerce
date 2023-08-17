import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/products.service';

import { ApiService } from '../../services/api.service';

import { Product } from 'src/app/models/products.model';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';

  errorMessage: string = 'An error has ocurred';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.result;
        this.productList = data.result;
        this.filterCategory = data.result;

        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      },
      (error) => {
        this.errorMessage = 'An error has ocurred when bringing the products';
      }
    );
  }

  addToCart(products: any) {
    this.cartService.addToCart(products);
  }
}
