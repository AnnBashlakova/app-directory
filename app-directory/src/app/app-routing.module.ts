import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsDetailsComponent } from './components/items-details/items-details.component';
import { ItemResolver } from './services/items.resolver';
// import { ItemsComponent } from './components/items/items.component';
import { MainComponent } from './components/main/main.component';
import {FormComponent} from './components/form/form.component'

const routes: Routes = [
  {path: '', component: MainComponent},
  // {path: 'items', component: ItemsComponent},
  {path: 'form', component: FormComponent},
  {path: 'items/:id', component: ItemsDetailsComponent, resolve: {data: ItemResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
