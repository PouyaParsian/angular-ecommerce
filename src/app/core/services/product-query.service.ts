import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductQueryService {
  searchProduct = signal<string>("");
  selectedCategory = signal<string>("");
  selectedSort = signal<string>("");
  selectedOrder = signal<string>("");
}
