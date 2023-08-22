import { Component, Input, OnInit} from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { Product } from 'src/app/models/products.model';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    products: Product [] = [];

    public grandTotal !: number;


    constructor (private cartService: CartService ) {}

    ngOnInit(): void {
        this.cartService.getProducts().subscribe(res => {
            this.products = res;
            this.grandTotal = this.cartService.getTotalPrice();
        })

    }

}
