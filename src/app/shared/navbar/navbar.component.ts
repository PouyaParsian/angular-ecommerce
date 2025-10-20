import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchProductComponent } from "../search-product/search-product.component";
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterLink, RouterLinkActive, SearchProductComponent],
  standalone: true
})
export class NavbarComponent implements OnInit {

  cartService = inject(CartService);
  isScrolled = false;
  isSearching: boolean = false;
  isDropdownMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll',() => {
      this.isScrolled = window.scrollY > 50;
    })
  }

  toggleSearchBox(): void {
    this.isSearching = !this.isSearching;
  }
  closeSearchBox($event: boolean): void {
    this.isSearching = $event;
  }

  toggleDropdownMenu() {
    this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
  }
}
