import {Component, OnInit} from '@angular/core';
import {Attendance} from '../../attendance';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-attendance',
  standalone: false,
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit {

  attendanceRecords: Attendance[] = [];
  searchName: string = '';
  searchDate: string = '';

  constructor(private http: HttpClient) {}

  filteredAttendance() {
    return this.attendanceRecords.filter(record => {
      const nameMatch = record.employee.fullName.toLowerCase().includes(this.searchName.toLowerCase());
      const dateMatch = this.searchDate ? record.date === this.searchDate : true;
      return nameMatch && dateMatch;
    });
  }

  fetchAttendance() {
    this.http.get<Attendance[]>('http://localhost:8080/api/attendance')
      .subscribe(data => this.attendanceRecords = data);
  }

  ngOnInit(): void {
    this.fetchAttendance();
  }

}
