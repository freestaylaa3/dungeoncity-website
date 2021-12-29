import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  // {path:'home',component:HomeComponent,children:[
  //   {path:'item',component:ItemComponent,outlet:'home'},
  //   {path:'login',component:LoginComponent,outlet:'home'},
  //   {path:'register',component:RegisterComponent,outlet:'home'},
  //   {path:'scoreboard',component:ScoreboardComponent,outlet:'home'}
  // ]},
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',component:HomeComponent,
    loadChildren: () => import('./main/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
