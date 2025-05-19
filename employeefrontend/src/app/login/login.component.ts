import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailId = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}
  onLogin() {
    const body = {
      emailId: this.emailId,
      password: this.password
    };

    this.http.post<any>('http://localhost:8080/api/employees/auth/login', body).subscribe(
      response => {
        // ✅ Save user data in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(response));

        const role = response.role.toLowerCase();

        // ✅ Navigate based on role
        if (role === 'superadmin') {
          this.router.navigate(['/superadmin']);
        } else if (role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (role === 'employee') {
          this.router.navigate(['/employee']);
        } else {
          alert('Role not recognized');
        }
      },
      error => {
        alert('Login failed: ' + (error.error.message || 'Unknown error'));
      }
    );
  }


}
