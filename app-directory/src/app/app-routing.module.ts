import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsDetailsComponent } from './components/items-details/items-details.component';
import { ItemResolver } from './services/items.resolver';
import { MainComponent } from './components/main/main.component';
import {FormComponent} from './components/form/form.component'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'form', component: FormComponent},
  // { path: 'form', loadChildren: () => import('./components/form/form.component').then(m => m.FormComponent) },
  {path: 'items/:id', component: ItemsDetailsComponent, resolve: {data: ItemResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
