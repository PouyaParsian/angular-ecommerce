import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(
    limitNumber: number = 0,
    searchProducts: string = "",
    sortProducts: string = "",
    order: string = ""
  ): Observable<{ products: Product[] }> {
    let url = this.apiUrl;

    if (searchProducts) {
      url += `/search?q=${searchProducts}&limit=${limitNumber}&skip=0`;
    } else {
      url += `?sortBy=${sortProducts}&order=${order}&limit=${limitNumber}&skip=0`;
    }

    return this.httpClient.get<{ products: Product[] }>(url);
  }

  getProductsByCategory(
    categoryName: string,
    limitNumber: number = 0,
    sortProducts: string = "",
    order: string = ""
  ): Observable<{ products: Product[] }> {
    const url = `${this.apiUrl}/category/${categoryName}?sortBy=${sortProducts}&order=${order}&limit=${limitNumber}`;
    return this.httpClient.get<{ products: Product[] }>(url);
  }

  getProductById(productId: string): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.httpClient.get<Product>(url);
  }
}