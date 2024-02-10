import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontoffice/header/header.component';
import { BodyComponent } from './backoffice/body/body.component';
import { SidenavComponent } from './backoffice/sidenav/sidenav.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
import { ProductComponent } from './backoffice/product/product.component';
import { StatisticsComponent } from './backoffice/statistics/statistics.component';
import { EmployeeComponent } from './backoffice/employee/employee.component';
import { SettingsComponent } from './backoffice/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductComponent,
    StatisticsComponent,
    EmployeeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
