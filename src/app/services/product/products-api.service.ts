import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const url: string = './assets/json/data.json';
    return this.http.get<Product[]>(url);
  }
}
