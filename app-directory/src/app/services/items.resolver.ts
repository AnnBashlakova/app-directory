import { IItems } from '../models/items';
import { ItemsService } from './items.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<IItems> {
  constructor(private ItemsService: ItemsService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IItems> {
    return this.ItemsService.getItem(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['items']);
        return EMPTY;
      })
    );
  }
};
