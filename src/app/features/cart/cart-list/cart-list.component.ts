import { CartService } from './../../../core/services/cart.service';
import { Component, inject, OnInit } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CustomButtonComponent } from "../../../shared/custom-button/custom-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  imports: [CartItemComponent, CustomButtonComponent, RouterLink]
})
export class CartListComponent implements OnInit {

  cartService = inject(CartService);
  constructor() { }

  ngOnInit() {
  }

}
