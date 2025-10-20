import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../../features/products/product-details/product-details.component';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
  imports: [ProductDetailsComponent]
})
export class ProductDetailsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
