import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService,private router: Router) {
    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService.createEmployee(this.employeeForm.value).subscribe({
        next: (res) => {
          alert('Employee created successfully!');
          this.employeeForm.reset();
          this.router.navigate(['/superadmin/manage-employee'])
        },
        error: (err) => {
          console.error(err);
          alert('Something went wrong.');
        }
      });
    }
  }
}
