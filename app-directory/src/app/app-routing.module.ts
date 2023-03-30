import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsDetailsComponent } from './components/items-details/items-details.component';
import { ItemResolver } from './services/items.resolver';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'form', 
  // component: FormComponent,
  loadChildren: ():any =>
      import('./form/form.module').then( (m):any => m.FormModule)
},
  // { path: 'form', loadChildren: () => import('./components/form/form.component').then(m => m.FormComponent) },
  {path: 'items/:id', component: ItemsDetailsComponent, resolve: {data: ItemResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
