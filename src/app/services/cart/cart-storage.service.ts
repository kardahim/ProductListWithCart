import { Injectable } from '@angular/core';
import { ProductInCart } from '../../models/ProductInCart';
import { Product } from '../../models/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartStorageService {
  private cartProducts: ProductInCart[] = [];
  readonly cartProducts$: BehaviorSubject<ProductInCart[]> =
    new BehaviorSubject<ProductInCart[]>(this.cartProducts);
  readonly totalAmount$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  readonly productsInCart$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  constructor() {}

  increaseQuantity(product: Product) {
    const existingProduct = this.findById(product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartProducts.push({
        product: product,
        quantity: 1,
      });
    }

    this.cartProducts$.next(this.cartProducts);
    this.calculateTotalAmount();
  }

  decreaseQuantity(productId: number) {
    const existingProduct = this.findById(productId);

    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity--;
      this.cartProducts$.next(this.cartProducts);
      this.calculateTotalAmount();
    } else {
      this.removeFromCart(productId);
    }
  }

  removeFromCart(productId: number) {
    this.cartProducts = this.cartProducts.filter(
      (item) => item.product.id !== productId
    );
    this.cartProducts$.next(this.cartProducts);
    this.calculateTotalAmount();
  }

  removeCart() {
    this.cartProducts = [];
    this.cartProducts$.next(this.cartProducts);
    this.calculateTotalAmount();
  }

  public findById(productId: number): ProductInCart | null {
    const existingProduct = this.cartProducts.find(
      (item) => item.product.id === productId
    );

    if (existingProduct) return existingProduct;
    else return null;
  }

  private calculateTotalAmount() {
    this.sumProductsInCart();

    const total = this.cartProducts.reduce(
      (calculatedAmount, currentProduct) =>
        calculatedAmount +
        currentProduct.product.price * currentProduct.quantity,
      0
    );

    this.totalAmount$.next(total);
  }

  private sumProductsInCart() {
    const total = this.cartProducts.reduce(
      (calculatedAmount, currentProduct) =>
        calculatedAmount + currentProduct.quantity,
      0
    );

    this.productsInCart$.next(total);
  }
}
