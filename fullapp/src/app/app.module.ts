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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddEmployeeComponent } from './backoffice/employee/add-employee/add-employee.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ListProductComponent } from './backoffice/product/list-product/list-product.component';
import { AddProductComponent } from './backoffice/product/add-product/add-product.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';

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
    SettingsComponent,
    AddEmployeeComponent,
    ListProductComponent,
    AddProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, MatToolbarModule,MatButtonModule,
    MatDialogModule,MatFormFieldModule,MatInputModule,FormsModule,MatCardModule,MatTableModule,MatPaginator,MatExpansionModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
