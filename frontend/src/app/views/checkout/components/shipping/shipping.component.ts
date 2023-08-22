import { Component } from '@angular/core';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  isDisplayed = true;

    showMe(){
      if(this.isDisplayed) {
            this.isDisplayed = false;
        } else{
            this.isDisplayed = true;
        }
  }

}
