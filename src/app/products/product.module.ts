import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }
