package net.javaguides.employeebackend.repository;

import net.javaguides.employeebackend.model.EmployeeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeModel, Long> {

    // Find by email for login
    Optional<EmployeeModel> findByEmailId(String emailId);

    // Check existence by email
    boolean existsByEmailId(String emailId);
}
