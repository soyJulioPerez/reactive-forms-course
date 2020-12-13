import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RfArrayComponent } from './rf-array.component';

const routes: Routes = [
  { path: '', component: RfArrayComponent }
];

@NgModule({
  declarations: [RfArrayComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RfArrayModule { }
