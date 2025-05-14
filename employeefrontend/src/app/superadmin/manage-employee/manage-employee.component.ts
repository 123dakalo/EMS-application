import {Component, OnInit} from '@angular/core';
import {Employee} from '../../employee';
import {EmployeeService} from '../../employee.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manage-employee',
  standalone: false,
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.css'
})
export class ManageEmployeeComponent implements OnInit {

  employees:  Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private http: HttpClient) {}

  ngOnInit() {
    this.getAllEmployees();
  }

  openAddForm(){

  }

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  editEmployee(employee: Employee) {

  }
  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.getAllEmployees();
      });
    }
  }
}
