import { Injectable } from '@angular/core';
import { IItems } from '../models/items';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsResolver implements Resolve<IItems> {
  constructor(private ItemsService: ItemsService)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IItems> {
    return this.ItemsService.getItem(route.params?.['id'])
  }
}
