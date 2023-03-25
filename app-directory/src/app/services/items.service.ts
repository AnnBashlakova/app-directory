import { Injectable } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { map } from 'rxjs';
import { IItems } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  url: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { 

  }

  getProducts() {
    return this.http.get<IItems[]>(this.url);
  }

  getProduct(id: number) {
    return this.http.get<IItems>(`${this.url}/${id}`);
  }

  postProduct(product: IItems) {
    return this.http.post<IItems>(this.url, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  updateProduct(product: IItems) {
    return this.http.put<IItems>(`${this.url}/${product.id}`, product);
  }
}
