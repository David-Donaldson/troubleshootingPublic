import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutagesComponent } from './outages/outages.component';
import { TroubleshootingDashboardComponent } from './troubleshooting-dashboard/troubleshooting-dashboard.component';

const routes: Routes = [
  { path: '', component: TroubleshootingDashboardComponent },
  { path: 'outages', component: OutagesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
