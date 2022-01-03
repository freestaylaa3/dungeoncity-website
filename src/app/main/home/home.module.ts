import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from '../homepage/homepage.component';
import { AboutUsComponent } from '../about-us/about-us.component';

const routes : Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'item', component: ItemComponent,},
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: HomepageComponent },
]
@NgModule({
  declarations: [
    ItemComponent,
    ScoreboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  
})
export class HomeModule { }
