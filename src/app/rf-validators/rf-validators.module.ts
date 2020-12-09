import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RfValidatorsComponent } from './rf-validators.component';

const routes: Routes = [
  { path: '', component: RfValidatorsComponent }
];

@NgModule({
  declarations: [RfValidatorsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RfValidatorsModule { }
