import { ProductsComponent } from './pages/products/products.component';
import { Routes } from '@angular/router';
import { MainComponent } from './pages/landing/main.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';

export const routes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full' },
    { path: "products", component: ProductsComponent },
    { path: "cart", component: CartComponent },
    { path: "details/:productId", component: ProductDetailsPageComponent },
    { path: "payment-success", component: PaymentSuccessComponent },
    { path: "**", component: NotFoundPageComponent },
];
