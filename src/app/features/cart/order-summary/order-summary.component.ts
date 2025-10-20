import { Component, computed, inject, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from "../../../shared/custom-button/custom-button.component";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  imports: [RouterLink, CustomButtonComponent]
})
export class OrderSummaryComponent {

  tax = 15;
  shippingCost = 32;
  cartService = inject(CartService);
  
  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.product.price * item.quantity;
    }
    if (total > 0) {
      total += this.tax + this.shippingCost;
      return Number(total.toFixed(2));
    }
    else {
      return 0;
    }
  })
}
