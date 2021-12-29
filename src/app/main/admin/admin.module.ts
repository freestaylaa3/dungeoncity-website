import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { PanelUserComponent } from './panel-user/panel-user.component';
import { PanelItemComponent } from './panel-item/panel-item.component';
import { PanelEnemyComponent } from './panel-enemy/panel-enemy.component';
import { RouterModule, Routes } from '@angular/router';
import { PanelBarComponent } from './panel-bar/panel-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {path:'panel-user',component:PanelUserComponent},
  {path:'panel-item',component:PanelItemComponent},
  {path:'panel-enemy',component:PanelEnemyComponent},
  {path:'panel-bar',component:PanelBarComponent},
]

@NgModule({
  declarations: [
    AdminComponent,
    PanelUserComponent,
    PanelItemComponent,
    PanelEnemyComponent,
    PanelBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
