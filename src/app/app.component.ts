import { Component, OnInit } from '@angular/core';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ProductsStorageService } from './services/products-storage.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductGridItemComponent, NgFor, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(public storage: ProductsStorageService) {}

  ngOnInit() {
    this.storage.loadProducts();
  }
}
