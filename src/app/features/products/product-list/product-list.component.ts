import { ProductQueryService } from './../../../core/services/product-query.service';
import { Component, effect, Input, input, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductCardSkeletonComponent } from "../product-card-skeleton/product-card-skeleton.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { SortProductsComponent } from "../sort-products/sort-products.component";
import { Router } from '@angular/router';
import { CustomButtonComponent } from "../../../shared/custom-button/custom-button.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [ProductCardComponent, ProductCardSkeletonComponent, NgxPaginationModule, CustomButtonComponent]
})
export class ProductListComponent implements OnInit {

  limitNumber = input<number>(0);
  @Input() categoryURL!: string;
  @Input() isHomePage!: boolean;
  @Input() sortProducts!: string;
  @Input() orderProducts!: string;
  searchInputValue!: string;
  excludedIds = [65, 99];

  products = signal<Product[]>([]);
  loading = signal<boolean>(false);

  p: number = 1;
  itemsPerPage: number = 32;
  items!: Array<number>;

  constructor(
    private productService: ProductService,
    private productQueryService: ProductQueryService,
    private breakpointObserver: BreakpointObserver
  ) {
    effect(() => {
      const search = this.productQueryService.searchProduct();
      const category = this.productQueryService.selectedCategory();
      const sort = this.productQueryService.selectedSort();
      const order = this.productQueryService.selectedOrder();
      this.searchInputValue = search;
      this.loading.set(true);
      this.goUp();
      this.fetchProducts();
    });
  }

  ngOnInit() {
    this.loading.set(true);
    this.fetchProducts();
    this.setupItems();
  }

  private getAllProducts() {
    this.productService
      .getProducts(this.limitNumber(), this.productQueryService.searchProduct(), this.sortProducts, this.orderProducts)
      .subscribe((res) => {
        const filtered = res.products.filter(p => !this.excludedIds.includes(p.id));
        this.products.set(filtered);
        this.loading.set(false);
      });
  }

  private getProductsByCategory() {
    this.productService
      .getProductsByCategory(this.categoryURL, this.limitNumber(), this.sortProducts, this.orderProducts)
      .subscribe((res) => {
        const filtered = res.products.filter(p => !this.excludedIds.includes(p.id));
        this.products.set(filtered);
        this.loading.set(false);
      });
  }

  private fetchProducts() {
    if (!this.categoryURL) {
      this.getAllProducts();
    } else {
      this.getProductsByCategory();
    }
  }

  private setupItems() {
    this.breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.Large] || result.breakpoints[Breakpoints.XLarge]) {
        this.items = new Array(4).fill(0);
      }
      else if (result.breakpoints[Breakpoints.Medium]) {
        this.items = new Array(3).fill(0);
      }
      else {
        this.items = new Array(2).fill(0);
      }
    });
  }

  resetFilters() {
    this.productQueryService.searchProduct.set('');
    this.productQueryService.selectedCategory.set('');
    this.productQueryService.selectedSort.set('');
    this.productQueryService.selectedOrder.set('');
    this.p = 1;
  }

  goUp() {
    window.scrollTo({ top: 0 });
  }
}