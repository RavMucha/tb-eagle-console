import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@app/sidebar/sidebar.module';
import { RouterModule, Routes } from '@angular/router';

import { DashboardsComponent } from './dashboards/dashboards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent
  }
]

@NgModule({
  declarations: [DashboardsComponent],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardsModule { }