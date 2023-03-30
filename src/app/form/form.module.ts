import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { FormComponent } from './form.component';
import { HttpClientModule }   from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [{path: '', component: FormComponent}];

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    MatListModule,
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


export class FormModule { }
