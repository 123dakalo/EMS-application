import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManageEmployeeComponent } from './superadmin/manage-employee/manage-employee.component';
import { DashboardComponent } from './superadmin/dashboard/dashboard.component';
import { AddEmployeeComponent } from './superadmin/add-employee/add-employee.component';
import { EditEmployeeComponent } from './superadmin/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuperadminComponent,
    AdminComponent,
    EmployeeComponent,
    ManageEmployeeComponent,
    DashboardComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
