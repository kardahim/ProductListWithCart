import { Component, EventEmitter, Output } from '@angular/core';
import { CartStorageService } from '../../services/cart/cart-storage.service';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'order-dialog',
  standalone: true,
  imports: [NgFor, AsyncPipe, CurrencyPipe],
  templateUrl: './order-dialog.component.html',
  styleUrl: './order-dialog.component.scss',
})
export class OrderDialogComponent {
  @Output() isOrderDialogOpen = new EventEmitter<boolean>(true);

  constructor(public cartStorage: CartStorageService) {}

  openOrderDialog() {
    this.isOrderDialogOpen.emit(false);
    this.cartStorage.removeCart();
  }
}
