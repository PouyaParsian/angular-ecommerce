import { Component, effect, OnInit } from '@angular/core';
import { ProductQueryService } from '../../../core/services/product-query.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sort-products',
  templateUrl: './sort-products.component.html',
  styleUrls: ['./sort-products.component.css'],
  imports: [NgClass]
})
export class SortProductsComponent implements OnInit {

  isSortMenuOpen: boolean = false;
  selectedOrder!: string;
  selectedSort!: string;
  searchInputValue !: string;
  sortOptions = [
    {
      label: "Nothing",
      value: "",
      order: ""
    },
    {
      label: "Highest Price",
      value: "price",
      order: "desc"
    },
    {
      label: "Lowest Price",
      value: "price",
      order: "asc"
    },
    {
      label: "Most Popular",
      value: "rating",
      order: "desc"
    },
    {
      label: "Least Popular",
      value: "rating",
      order: "asc"
    },
    {
      label: "In Stock",
      value: "stock",
      order: "desc"
    }
  ];
  constructor(private productQueryService: ProductQueryService) {
    effect(() => {
      const searchInputValue = this.productQueryService.searchProduct();
      this.searchInputValue = searchInputValue;
    });
   }
  ngOnInit(): void {
    this.selectedSort = this.productQueryService.selectedSort();
    this.selectedOrder = this.productQueryService.selectedOrder();
    this.searchInputValue = this.productQueryService.searchProduct();
  }

  toggleSortMenu(): void {
    this.isSortMenuOpen = !this.isSortMenuOpen;
  }

  selectSort(sort: string, order: string): void {
    this.selectedOrder = order;
    this.selectedSort = sort;
    this.productQueryService.selectedSort.set(sort);
    this.productQueryService.selectedOrder.set(order);
    this.isSortMenuOpen = false;
  }

}
