import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { Product } from './../../../core/models/product.model';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  imports: [RouterLink, CurrencyPipe]
})
export class CartItemComponent implements OnInit {

  cartService = inject(CartService);
  @Input() item!: { product: Product, quantity: number };
  
  constructor() { }

  ngOnInit() {
  }
}
