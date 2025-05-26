import {Component, OnInit} from '@angular/core';
import {Attendance} from '../../attendance';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-attendance',
  standalone: false,
  templateUrl: './admin-attendance.component.html',
  styleUrl: './admin-attendance.component.css'
})
export class AdminAttendanceComponent implements OnInit{

  attendanceRecords: Attendance[] = [];
  searchName: string = '';
  searchDate: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAttendance();
  }

  filteredAttendance() {
    return this.attendanceRecords.filter(record => {
      const nameMatch = record.employee.fullName.toLowerCase().includes(this.searchName.toLowerCase());
      const dateMatch = this.searchDate ? record.date === this.searchDate : true;
      return nameMatch && dateMatch;
    });
  }

  fetchAttendance() {
    this.http.get<Attendance[]>('http://localhost:8080/api/attendance')
      .subscribe(data => this.attendanceRecords = data.filter(emp =>
        emp.employee.role.toLowerCase() === 'admin' || emp.employee.role.toLowerCase() === 'employee'
      ));
  }

}
