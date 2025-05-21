import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  cards = [
    {
      title: 'Manage Employees',
      text: 'Add, update, and remove employee records.',
      icon: 'fas fa-users',
      link: '/admin/admin-manage',
    },
    {
      title: 'Clock In/Out',
      text: 'Track clock-in/out, lateness, and early leaves.',
      icon: 'fas fa-clock',
      link: '/admin/admin-clockin'
    },
    {
      title: 'Attendance',
      text: 'Track clock-in/out, lateness, and early leaves.',
      icon: 'fas fa-calendar-check',
      link: '/admin/admin-attendance'
    },
  ];
}
