import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { NgClass } from '@angular/common';
import { ProductDetailsSkeletonComponent } from "../product-details-skeleton/product-details-skeleton.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [NgClass, ProductDetailsSkeletonComponent]
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  imageURL: string = "";
  loading = signal<boolean>(false);
  cartService = inject(CartService);
  snackBar = inject(MatSnackBar);

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.loading.set(true);
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    this.productService
      .getProductById(productId!)
      .subscribe((res) => {
        this.product = res;
        this.loading.set(false);
      });
  }

  handleImageSlider(imageURL: string): void {
    this.imageURL = imageURL;
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
