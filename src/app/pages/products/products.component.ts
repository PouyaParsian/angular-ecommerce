import { Component, effect, OnInit } from '@angular/core';
import { ProductListComponent } from "../../features/products/product-list/product-list.component";
import { ProductQueryService } from '../../core/services/product-query.service';
import { SortProductsComponent } from "../../features/products/sort-products/sort-products.component";
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [ProductListComponent, SortProductsComponent, NgxPaginationModule]
})
export class ProductsComponent {

  selectedCategory!: string;
  selectedSort!: string;
  order!: string;

  constructor(private productQueryService: ProductQueryService) {
    effect(() => {
      const category = this.productQueryService.selectedCategory();
      const sort = this.productQueryService.selectedSort();
      const order = this.productQueryService.selectedOrder();
      this.selectedCategory = category;
      this.selectedSort = sort;
      this.order = order;
    });
  }

}
