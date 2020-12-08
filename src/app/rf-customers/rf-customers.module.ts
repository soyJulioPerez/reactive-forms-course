import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RfCustomersComponent } from './rf-customers.component';

const routes: Routes = [
  { path: '', component: RfCustomersComponent }
];

@NgModule({
  declarations: [RfCustomersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RfCustomersModule { }
