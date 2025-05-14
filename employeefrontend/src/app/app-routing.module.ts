import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SuperadminComponent} from './superadmin/superadmin.component';
import {AdminComponent} from './admin/admin.component';
import {EmployeeComponent} from './employee/employee.component';
import {ManageEmployeeComponent} from './superadmin/manage-employee/manage-employee.component';
import {DashboardComponent} from './superadmin/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  //super admin routing

  { path: 'superadmin',
    component: SuperadminComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'manage-employee', component: ManageEmployeeComponent },
  ]},


  { path: 'admin',  component: AdminComponent },
  { path: 'employee',  component: EmployeeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
