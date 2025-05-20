import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  fullName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.fullName = user.fullName;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

}
