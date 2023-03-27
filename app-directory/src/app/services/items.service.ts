import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { map } from 'rxjs';
import { IItems } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url: string = 'http://localhost:3000/items';
  constructor(private http: HttpClient) { 

  }

  getItems() {
    return this.http.get<IItems[]>(this.url);
  }

  getItem(id: number) {
    return this.http.get<IItems>(`${this.url}/${id}`);
  }

  postItem(item: IItems) {
    return this.http.post<IItems>(this.url, item);
  }


}
