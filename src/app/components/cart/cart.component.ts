import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() isOrderDialogOpen = new EventEmitter<boolean>(false);

  constructor(public cartStorage: CartStorageService) {}

  removeFromCart(productId: number) {
    this.cartStorage.removeFromCart(productId);
  }

  openOrderDialog() {
    this.isOrderDialogOpen.emit(true);
  }
}
