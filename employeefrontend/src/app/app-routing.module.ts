import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SuperadminComponent} from './superadmin/superadmin.component';
import {AdminComponent} from './admin/admin.component';
import {EmployeeComponent} from './employee/employee.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'superadmin',  component: SuperadminComponent
  },
  {
    path: 'admin',  component: AdminComponent
  },
  {
    path: 'employee',  component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
