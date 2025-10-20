import { Component, inject, OnInit } from '@angular/core';
import { CartListComponent } from "../../features/cart/cart-list/cart-list.component";
import { OrderSummaryComponent } from "../../features/cart/order-summary/order-summary.component";
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CartListComponent, OrderSummaryComponent]
})
export class CartComponent implements OnInit {

  cartService = inject(CartService);
  constructor() { }

  ngOnInit() {
  }

}
