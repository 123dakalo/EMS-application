import {Component, OnInit} from '@angular/core';
import {Employee} from '../../employee';
import {EmployeeService} from '../../employee.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manage-employee',
  standalone: false,
  templateUrl: './manage-employee.component.html',
  styleUrl: './manage-employee.component.css'
})
export class ManageEmployeeComponent implements OnInit {

  employees:  Employee[] = [];

  constructor(private employeeService: EmployeeService,
              private http: HttpClient, private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.getAllEmployees();
    const id = this.route.snapshot.paramMap.get('id');
  }

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  editEmployee(employee: Employee) {
    this.router.navigate(['/superadmin/edit-employee', employee.id]);
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.getAllEmployees();
      });
    }
  }
}
