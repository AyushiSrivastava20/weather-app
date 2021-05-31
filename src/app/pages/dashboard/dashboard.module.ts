import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "@pages/dashboard/dashboard-routing.module";
import {DashboardComponent} from "@pages/dashboard/dashboard.component";
import {SharedModule} from "@shared/shared.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatProgressSpinnerModule
  ]
})
export class DashboardModule { }
