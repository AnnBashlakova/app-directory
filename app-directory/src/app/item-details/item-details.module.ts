
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }   from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsDetailsComponent } from './items-details.component';
import { ItemResolver } from '../services/items.resolver';

const routes: Routes = [
  {path: '', 
  component: ItemsDetailsComponent,
  resolve: {data: ItemResolver},
  }];

@NgModule({
  declarations: [ItemsDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    RouterModule.forChild(routes),
],

  exports: [RouterModule],
})


export class ItemDetailsModule { }
