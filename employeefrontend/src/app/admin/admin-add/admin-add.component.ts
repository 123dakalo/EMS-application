import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-add',
  standalone: false,
  templateUrl: './admin-add.component.html',
  styleUrl: './admin-add.component.css'
})
export class AdminAddComponent{

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
