import { Component, OnInit } from '@angular/core';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ProductsStorageService } from './services/product/products-storage.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { OrderDialogComponent } from './components/order-dialog/order-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductGridItemComponent,
    CartComponent,
    OrderDialogComponent,
    NgFor,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isOrderDialogOpen: boolean = false;

  constructor(public productStorage: ProductsStorageService) {}

  ngOnInit() {
    this.productStorage.loadProducts();
  }

  handleOrderDialogOpen(event: boolean) {
    this.isOrderDialogOpen = event;
    console.log(event);
  }
}
