import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ItemComponent } from './main/item/item.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { ScoreboardComponent } from './main/scoreboard/scoreboard.component';

export const appRoutes: Routes = [
  { path: 'item',component:ItemComponent},
  { path: 'home', component: HomeComponent },
  { path: 'home/item', component: ItemComponent },
  { path: 'home/scoreboard', component: ScoreboardComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'home/register', component: RegisterComponent },
  
];
