import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { CaseInsensitiveMatcher } from '../core/base/url-case-insensitive/case-insensitive-matcher';
import { NewHomeComponent } from './new-home/new-home.component';

export function HomeMatch() {
  return CaseInsensitiveMatcher('Home').apply(this, arguments);
}
export function NewHomeMatch() {
  return CaseInsensitiveMatcher('NewHome').apply(this, arguments);
}

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        matcher: HomeMatch,
        component: HomeComponent
      },
      {
        matcher: NewHomeMatch,
        component: NewHomeComponent
      },
      { path: '', pathMatch: 'full', redirectTo: 'Home' },
    ]
  }


  // { path: '', pathMatch: 'full', redirectTo: 'en' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
