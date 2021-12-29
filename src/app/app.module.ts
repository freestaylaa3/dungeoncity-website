import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './main/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { HomeComponent } from './main/home/home.component';
import { AdminComponent } from './main/admin/admin.component';
import { HomepageComponent } from './main/homepage/homepage.component';
import { AuthService } from './services/auth.service';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () =>
      import('./main/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./main/admin/admin.module').then((m) => m.AdminModule),
      canActivate:[LoginGuardService]
  },
  { path: '**', component: HomeComponent },
];
@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, HomepageComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [AlertifyService,AuthService,LoginGuardService],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
