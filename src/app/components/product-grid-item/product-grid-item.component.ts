import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { ButtonComponent } from './ui/button/button.component';
import { CurrencyPipe } from '@angular/common';
import { CartStorageService } from '../../services/cart/cart-storage.service';

@Component({
  selector: 'product-grid-item',
  standalone: true,
  imports: [ButtonComponent, CurrencyPipe],
  templateUrl: './product-grid-item.component.html',
  styleUrl: './product-grid-item.component.scss',
})
export class ProductGridItemComponent {
  @Input({ required: true }) product!: Product;

  constructor(public cartStorage: CartStorageService) {}
}
