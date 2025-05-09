package net.javaguides.employeebackend.controller;

import net.javaguides.employeebackend.model.AttendanceModel;
import net.javaguides.employeebackend.model.EmployeeModel;
import net.javaguides.employeebackend.repository.AttendanceRepository;
import net.javaguides.employeebackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "*") // Optional, for frontend access
public class AttendanceController {

    @Autowired
    private AttendanceRepository attendanceRepo;

    @Autowired
    private EmployeeRepository employeeRepo;

    // Clock in
    @PostMapping("/clock-in/{employeeId}")
    public String clockIn(@PathVariable Long employeeId) {
        EmployeeModel employee = employeeRepo.findById(employeeId).orElseThrow();
        LocalDate today = LocalDate.now();

        if (attendanceRepo.existsByEmployeeAndDate(employee, today)) {
            return "Already clocked in today.";
        }

        AttendanceModel attendance = new AttendanceModel();
        attendance.setEmployee(employee);
        attendance.setDate(today);
        attendance.setClockInTime(LocalTime.now());
        attendance.setLate(LocalTime.now().isAfter(LocalTime.of(8, 0))); // Example: late after 8:00 AM
        attendanceRepo.save(attendance);
        return "Clocked in successfully.";
    }

    // Clock out
    @PostMapping("/clock-out/{employeeId}")
    public String clockOut(@PathVariable Long employeeId) {
        EmployeeModel employee = employeeRepo.findById(employeeId).orElseThrow();
        LocalDate today = LocalDate.now();

        AttendanceModel attendance = attendanceRepo.findByEmployee(employee).stream()
                .filter(a -> a.getDate().equals(today))
                .findFirst()
                .orElseThrow();

        attendance.setClockOutTime(LocalTime.now());
        attendance.setEarlyLeave(LocalTime.now().isBefore(LocalTime.of(16, 0))); // Example: early before 4:00 PM
        attendanceRepo.save(attendance);
        return "Clocked out successfully.";
    }

    // Get all attendance for an employee
    @GetMapping("/employee/{employeeId}")
    public List<AttendanceModel> getAttendanceForEmployee(@PathVariable Long employeeId) {
        EmployeeModel employee = employeeRepo.findById(employeeId).orElseThrow();
        return attendanceRepo.findByEmployee(employee);
    }

    // Get all attendance records
    @GetMapping
    public List<AttendanceModel> getAllAttendance() {
        return attendanceRepo.findAll();
    }
}
