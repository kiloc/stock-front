import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { KLineComponent } from './k-line/k-line.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent, data: { reuseComponent: true } },
  { path: 'login', component: LoginComponent },
  { path: 'kLine', component: KLineComponent },
  { path: '**', component: HomeComponent, data: { reuseComponent: true }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
