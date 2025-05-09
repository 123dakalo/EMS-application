package net.javaguides.employeebackend.repository;

import net.javaguides.employeebackend.model.AttendanceModel;
import net.javaguides.employeebackend.model.EmployeeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface AttendanceRepository extends JpaRepository<AttendanceModel, Long> {

    List<AttendanceModel> findByEmployee(EmployeeModel employee);

    List<AttendanceModel> findByDate(LocalDate date);

    boolean existsByEmployeeAndDate(EmployeeModel employee, LocalDate date);

}
