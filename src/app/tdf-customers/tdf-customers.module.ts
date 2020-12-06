import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TdfCustomersComponent } from './tdf-customers.component';

const routes: Routes = [
  { path: '', component: TdfCustomersComponent }
];

@NgModule({
  declarations: [TdfCustomersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TdfCustomersModule { }
