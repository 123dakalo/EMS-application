import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-superadmin',
  standalone: false,
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.css'
})
export class SuperadminComponent implements OnInit{
  fullName: string='';

ngOnInit() {
  const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  this.fullName = user.fullName || '';
}

  logout() {
    // Clear auth, redirect, etc.
    localStorage.clear();
    window.location.href = '/login';
  }
}
