import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RfArrayComponent } from './rf-array.component';

const routes: Routes = [
  { path: '', component: RfArrayComponent }
];

@NgModule({
  declarations: [RfArrayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RfArrayModule { }
