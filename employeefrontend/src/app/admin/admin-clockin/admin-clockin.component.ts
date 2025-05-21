import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-clockin',
  standalone: false,
  templateUrl: './admin-clockin.component.html',
  styleUrl: './admin-clockin.component.css'
})
export class AdminClockinComponent implements OnInit{

  employeeId: number = 0;
  statusMessage: string = '';
  attendanceHistory: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.employeeId = user.id;

    if (this.employeeId) {
      this.loadAttendanceHistory();
    } else {
      this.statusMessage = 'No logged-in user found.';
    }
  }

  clockIn(): void {
    this.http.post(`http://localhost:8080/api/attendance/clock-in/${this.employeeId}`, {}, { responseType: 'text' })
      .subscribe({
        next: res => {
          this.statusMessage = res;
          this.loadAttendanceHistory();
        },
        error: err => {
          this.statusMessage = err.error || 'Error clocking in.';
        }
      });
  }

  clockOut(): void {
    this.http.post(`http://localhost:8080/api/attendance/clock-out/${this.employeeId}`, {}, { responseType: 'text' })
      .subscribe({
        next: res => {
          this.statusMessage = res;
          this.loadAttendanceHistory();
        },
        error: err => {
          this.statusMessage = err.error || 'Error clocking out.';
        }
      });
  }

  loadAttendanceHistory(): void {
    this.http.get<any[]>(`http://localhost:8080/api/attendance/employee/${this.employeeId}`)
      .subscribe({
        next: data => {
          this.attendanceHistory = data;
        },
        error: err => {
          this.statusMessage = 'Failed to load attendance history.';
        }
      });
  }
}
