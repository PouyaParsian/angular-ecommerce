import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<{ product: Product; quantity: number }[]>([]);
  snackBar = inject(MatSnackBar);

  constructor() {
    // Load cart from localStorage on service initialization
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart.set(JSON.parse(savedCart));
    }
  }

  addToCart(product: Product): void {
    const current = this.cart();
    const found = current.find(item => item.product.id === product.id);

    if (found) return;

    this.cart.set([...current, { product, quantity: 1 }]);
    this.saveCartToLocalStorage();
  }

  increaseQuantity(productId: number): void {
    const current = this.cart();
    const found = current.find(item => item.product.id === productId);

    if (!found) return;

    if (found.quantity < found.product.stock) {
      found.quantity += 1;
      this.cart.set([...current]);
      this.saveCartToLocalStorage();
    } else {
      if(found.product.stock === 1) {
        this.snackBar.open(`Only ${found.product.stock} left in stock`,'',
        {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        }
      );
      }
    }
  }

  decreaseQuantity(productId: number): void {
    const current = this.cart();
    const found = current.find(item => item.product.id === productId);

    if (!found) return;

    if (found.quantity > 1) {
      found.quantity -= 1;
      this.cart.set([...current]);
      this.saveCartToLocalStorage();
    } else {
      this.deleteFromCart(productId);
    }
  }

  deleteFromCart(productId: number): void {
    this.cart.set(this.cart().filter(item => item.product.id !== productId));
    this.saveCartToLocalStorage();
  }

  clearCart(): void {
    this.cart.set([]);
    this.saveCartToLocalStorage();
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart()));
  }
}