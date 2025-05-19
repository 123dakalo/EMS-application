package net.javaguides.employeebackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "attendance")
public class AttendanceModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private EmployeeModel employee;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "date")
    private LocalDate date;
    @JsonFormat(pattern = "HH:mm:ss")
    @Column(name = "clock_in_time")
    private LocalTime clockInTime;
    @JsonFormat(pattern = "HH:mm:ss")
    @Column(name = "clock_out_time")
    private LocalTime clockOutTime;
    @Column(name = "late")
    private boolean late;
    @Column(name = "early_leave")
    private boolean earlyLeave;

    // Constructors
    public AttendanceModel() {
        super();
    }

    public AttendanceModel(EmployeeModel employee, LocalDate date, LocalTime clockInTime, LocalTime clockOutTime, boolean late, boolean earlyLeave) {
        this.employee = employee;
        this.date = date;
        this.clockInTime = clockInTime;
        this.clockOutTime = clockOutTime;
        this.late = late;
        this.earlyLeave = earlyLeave;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public EmployeeModel getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeModel employee) {
        this.employee = employee;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public boolean isEarlyLeave() {
        return earlyLeave;
    }

    public void setEarlyLeave(boolean earlyLeave) {
        this.earlyLeave = earlyLeave;
    }

    public boolean isLate() {
        return late;
    }

    public void setLate(boolean late) {
        this.late = late;
    }

    public LocalTime getClockOutTime() {
        return clockOutTime;
    }

    public void setClockOutTime(LocalTime clockOutTime) {
        this.clockOutTime = clockOutTime;
    }

    public LocalTime getClockInTime() {
        return clockInTime;
    }

    public void setClockInTime(LocalTime clockInTime) {
        this.clockInTime = clockInTime;
    }
}

