import {Component, OnInit} from '@angular/core';
import {Employee} from '../../employee';
import {EmployeeService} from '../../employee.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-manage',
  standalone: false,
  templateUrl: './admin-manage.component.html',
  styleUrl: './admin-manage.component.css'
})
export class AdminManageComponent implements OnInit{

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
      // Only include admins and employees (exclude superadmin)
      this.employees = data.filter(emp =>
        emp.role.toLowerCase() === 'admin' || emp.role.toLowerCase() === 'employee'
      );
    });
  }

  editEmployee(employee: Employee) {
    this.router.navigate(['/admin/admin-edit', employee.id]);
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.getAllEmployees();
      });
    }
  }
}
