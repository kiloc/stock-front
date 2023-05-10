import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppRouteReuseStrategy } from './app-route-reuse-strategy';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from './_service/api.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { KLineComponent } from './k-line/k-line.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, KLineComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatBadgeModule,
  ],
  providers: [
    ApiService,
    { provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    // this.name = params['name'];
    // });
  }
}
