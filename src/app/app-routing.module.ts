/* Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

// endregion

const routes: Routes = [


  { path: '', redirectTo: '/home', pathMatch: 'full' },

  /* Wildcard Routes ,should be the last route configuration */
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: false, // <-- debugging purposes only

    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingComponents = [];
