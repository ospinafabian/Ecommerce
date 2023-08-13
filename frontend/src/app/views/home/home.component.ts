import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/products.service';

import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product [] = [];

  errorMessage: string = "An error has ocurred";

  constructor (private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data.result;
      },
      (error) => {
        this.errorMessage = "An error has ocurred when bringing the products"
      }
    )
  }
}
