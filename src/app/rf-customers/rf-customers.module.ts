import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RfCustomersComponent } from './rf-customers.component';

const routes: Routes = [
  { path: '', component: RfCustomersComponent }
];

@NgModule({
  declarations: [RfCustomersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RfCustomersModule { }
