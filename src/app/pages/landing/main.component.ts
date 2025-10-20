import { Component, OnInit } from '@angular/core';
import { HeroComponent } from "../../features/hero/hero.component";
import { ProductListComponent } from "../../features/products/product-list/product-list.component";
import { Router } from '@angular/router';
import { ProductQueryService } from '../../core/services/product-query.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [HeroComponent, ProductListComponent]
})
export class MainComponent implements OnInit {

  limit = 4;
  productList = [
    { url: "mobile-accessories", name: "Mobile Accessories" },
    { url: "fragrances", name: "Fragrances" },
    { url: "groceries", name: "Groceries" },
    { url: "home-decoration", name: "Home Decoration" },
    { url: "furniture", name: "Furniture" },
    { url: "mens-shirts", name: "Mens Shirts" },
    { url: "mens-shoes", name: "Mens Shoes" },
    { url: "mens-watches", name: "Mens Watches" },
    { url: "sports-accessories", name: "Sports Accessories" },
  ]
  constructor(
    private router: Router,
    private productQueryService: ProductQueryService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.resetFilters();
    this.manageVisibleProducts();
  }

  handleSeeMoreClick(category: string) {
    this.router.navigate(['/products']);
    this.productQueryService.selectedCategory.set(category);
  }

  manageVisibleProducts() {
    this.breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.Large] || result.breakpoints[Breakpoints.XLarge]) {
        this.limit = 4
      }
      else if (result.breakpoints[Breakpoints.Medium]) {
        this.limit = 3;
      }
      else {
        this.limit = 2;
      }
    });
  }

  resetFilters() {
    this.productQueryService.searchProduct.set("");
    this.productQueryService.selectedCategory.set("");
    this.productQueryService.selectedOrder.set("");
    this.productQueryService.selectedSort.set("");
  }
}