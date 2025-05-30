import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../employee.service';

@Component({
  selector: 'app-admin-edit',
  standalone: false,
  templateUrl: './admin-edit.component.html',
  styleUrl: './admin-edit.component.css'
})
export class AdminEditComponent implements  OnInit{

  employeeForm!: FormGroup;
  employeeId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id')!;
    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });

    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
      this.employeeForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(this.employeeId, this.employeeForm.value)
        .subscribe(() => {
          alert('Employee updated successfully!');
          this.router.navigate(['/admin/admin-manage']);
        });
    }
  }
}
