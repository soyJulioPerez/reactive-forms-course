import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RfChangesComponent } from './rf-changes.component';

const routes: Routes = [
  { path: '', component: RfChangesComponent }
];

@NgModule({
  declarations: [RfChangesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RfChangesModule { }
