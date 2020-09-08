import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ShoppingCartNum = 0;

  shopingCartArr = [];

  UpdateTheCart(products){

    console.log("check P count " , products);

    this.ShoppingCartNum = products;

    this.shopingCartArr.push(products);

    console.log("test Array", this.shopingCartArr)
  }

}
