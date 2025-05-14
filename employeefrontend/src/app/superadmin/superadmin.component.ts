import { Component } from '@angular/core';

@Component({
  selector: 'app-superadmin',
  standalone: false,
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.css'
})
export class SuperadminComponent {
  fullName: string='Tshivhase Dakalo';


  logout() {
    // Clear auth, redirect, etc.
    localStorage.clear();
    window.location.href = '/login';
  }
}
