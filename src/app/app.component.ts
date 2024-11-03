import { Component, OnInit } from '@angular/core';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ProductsStorageService } from './services/product/products-storage.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductGridItemComponent, CartComponent, NgFor, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(public productStorage: ProductsStorageService) {}

  ngOnInit() {
    this.productStorage.loadProducts();
  }
}
