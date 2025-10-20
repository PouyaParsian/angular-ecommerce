import { CartService } from './../../../core/services/cart.service';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { NgClass } from '@angular/common';
import { CustomButtonComponent } from "../../../shared/custom-button/custom-button.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [NgClass, CustomButtonComponent, RouterLink]
})
export class ProductCardComponent {
  
  cartService = inject(CartService);
  snackBar = inject(MatSnackBar);
  @Input() product!: Product;

  constructor(private router: Router) { }

  createArray(length: number): any[] {
    return Array(Math.floor(length)).fill(0);
  }

  addToCart(product: Product): void {
    if (product.stock > 0) {
      this.cartService.addToCart(product);
      const snackBarRef = this.snackBar.open("Added to cart", "See cart", {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
      snackBarRef.onAction().subscribe(() => {
        this.router.navigate(['/cart']);
      });
    }
    else {
      this.snackBar.open("This product is currently out of stock", "", {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    }
  }
}
