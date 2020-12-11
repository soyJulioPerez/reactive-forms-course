import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'tdf-customers',
    loadChildren: () => import('./tdf-customers/tdf-customers.module').then(m => m.TdfCustomersModule)
  },
  { path: 'rf-customers',
    loadChildren: () => import('./rf-customers/rf-customers.module').then(m => m.RfCustomersModule)
  },
  { path: 'rf-validators',
    loadChildren: () => import('./rf-validators/rf-validators.module').then(m => m.RfValidatorsModule)
  },
  { path: 'rf-value-changes',
    loadChildren: () => import('./rf-changes/rf-changes.module').then(m => m.RfChangesModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
