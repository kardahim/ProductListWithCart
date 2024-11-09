import { Injectable } from '@angular/core';
import { ProductsApiService } from './products-api.service';
import { BehaviorSubject, finalize } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsStorageService {
  readonly products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  readonly productsLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private api: ProductsApiService) {}

  loadProducts(): void {
    this.productsLoading$.next(true);
    this.api
      .getProducts()
      .pipe(finalize(() => this.productsLoading$.next(false)))
      .subscribe((data: Product[]) => {
        this.products$.next(data);
      });
  }
}
