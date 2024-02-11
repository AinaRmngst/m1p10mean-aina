import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { StatisticsComponent } from './backoffice/statistics/statistics.component';
import { ProductComponent } from './backoffice/product/product.component';
import { EmployeeComponent } from './backoffice/employee/employee.component';
import { SettingsComponent } from './backoffice/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
