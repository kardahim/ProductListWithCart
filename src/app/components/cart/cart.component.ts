import { Component } from '@angular/core';
import { CartStorageService } from '../../services/cart/cart-storage.service';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(public cartStorage: CartStorageService) {}

  removeFromCart(productId: number) {
    this.cartStorage.removeFromCart(productId);
  }
}
