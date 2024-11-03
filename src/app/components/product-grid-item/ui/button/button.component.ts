import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/Product';
import { NgIf } from '@angular/common';
import { CartStorageService } from '../../../../services/cart/cart-storage.service';

@Component({
  selector: 'product-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) product!: Product;

  constructor(public cartStorage: CartStorageService) {}

  increaseQuantity() {
    this.cartStorage.increaseQuantity(this.product);
  }

  decreaseQuantity() {
    this.cartStorage.decreaseQuantity(this.product.id);
  }
}
