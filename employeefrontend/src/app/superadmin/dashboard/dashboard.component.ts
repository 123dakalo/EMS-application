import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = [
    {
      title: 'Manage Employees',
      text: 'Add, update, and remove employee records.',
      icon: 'fas fa-users',
      link: '/superadmin/manage-employee',
    },
    {
      title: 'Attendance',
      text: 'Track clock-in/out, lateness, and early leaves.',
      icon: 'fas fa-calendar-check',
      link: '/attendance'
    },
    {
      title: 'Role Management',
      text: 'Assign roles to employees: Admin, SuperAdmin.',
      icon: 'fas fa-user-shield',
      link: '/roles'
    },
    {
      title: 'Analytics',
      text: 'Visualize attendance trends and performance.',
      icon: 'fas fa-chart-line',
      link: '/analytics'
    },
    {
      title: 'Settings',
      text: 'Configure system preferences and schedules.',
      icon: 'fas fa-cogs',
      link: '/settings'
    }
  ];
}
