import { NgClass } from '@angular/common';
import { ProductQueryService } from './../../core/services/product-query.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
  imports: [FormsModule, NgClass]
})
export class SearchProductComponent implements OnInit {

  @Output() isSearching = new EventEmitter<boolean>;
  searchInputValue: string = "";
  selectedCategory!: string;
  isCategorySectionOpen: boolean = false;
  categories = [
    { label: "All", value: "" },
    { label: "Beauty", value: "beauty" },
    { label: "Fragrances", value: "fragrances" },
    { label: "Furniture", value: "furniture" },
    { label: "Groceries", value: "groceries" },
    { label: "Home Decoration", value: "home-decoration" },
    { label: "Kitchen Accessories", value: "kitchen-accessories" },
    { label: "Laptops", value: "laptops" },
    { label: "Mens Shirts", value: "mens-shirts" },
    { label: "Mens Shoes", value: "mens-shoes" },
    { label: "Mens Watches", value: "mens-watches" },
    { label: "Mobile Accessories", value: "mobile-accessories" },
    { label: "Motorcycle", value: "motorcycle" },
    { label: "Skin Care", value: "skin-care" },
    { label: "Smartphones", value: "smartphones" },
    { label: "Sports Accessories", value: "sports-accessories" },
    { label: "Sunglasses", value: "sunglasses" },
    { label: "Tablets", value: "tablets" },
    { label: "Tops", value: "tops" },
    { label: "Vehicle", value: "vehicle" },
    { label: "Womens Bags", value: "womens-bags" },
    { label: "Womens Dresses", value: "womens-dresses" },
    { label: "Womens Jewellery", value: "womens-jewellery" },
    { label: "Womens Shoes", value: "womens-shoes" },
    { label: "Womens Watches", value: "womens-watches" }
  ];

  constructor(private productQueryService: ProductQueryService, private router: Router) { }
  ngOnInit(): void {
    this.searchInputValue = this.productQueryService.searchProduct();
    this.selectedCategory = this.productQueryService.selectedCategory();
  }

  handleSearchClick(): void {
    this.productQueryService.searchProduct.set(this.searchInputValue);
    this.productQueryService.selectedCategory.set("");
    this.router.navigate(['/products']);
    this.isSearching.emit(false);
  }

  toggleCategorySection(): void {
    this.isCategorySectionOpen = !this.isCategorySectionOpen;
  }

  selectCategory(categoryValue: string) {
    this.selectedCategory = categoryValue;
    this.productQueryService.selectedCategory.set(categoryValue);
    this.productQueryService.searchProduct.set("");
    this.router.navigate(['/products']);
    this.isSearching.emit(false);
  }
}
