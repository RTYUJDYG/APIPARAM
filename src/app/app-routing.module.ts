import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ParametroComponent } from './parametro/parametro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: ''          , component: HomeComponent },
  { path: 'home'      , component: HomeComponent },
  { path: 'parametro' , component: ParametroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
