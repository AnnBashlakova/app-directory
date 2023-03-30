import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ItemsDetailsComponent } from './item-details/items-details.component';

import { MainComponent } from './main/main.component';
import { ItemResolver } from './services/items.resolver';



const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'form',
  loadChildren: ():any =>
      import('./form/form.module').then( (m):any => m.FormModule)
},
  {path: 'items/:id', 
  loadChildren: ():any =>
      import('./item-details/item-details.module').then( (m):any => m.ItemDetailsModule),
      resolve: {data: ItemResolver}
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
