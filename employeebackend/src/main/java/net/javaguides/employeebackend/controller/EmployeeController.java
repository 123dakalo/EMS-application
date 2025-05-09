package net.javaguides.employeebackend.controller;

import net.javaguides.employeebackend.exception.EmployeeNotFoundException;
import net.javaguides.employeebackend.model.EmployeeModel;
import net.javaguides.employeebackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // GET all employees
    @GetMapping
    public List<EmployeeModel> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // GET employee by ID
    @GetMapping("/{id}")
    public EmployeeModel getEmployeeById(@PathVariable Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found with ID: " + id));
    }

    // POST create new employee
    @PostMapping
    public EmployeeModel createEmployee(@RequestBody EmployeeModel employee) {
        return employeeRepository.save(employee);
    }

    // PUT update employee
    @PutMapping("/{id}")
    public EmployeeModel updateEmployee(@PathVariable Long id, @RequestBody EmployeeModel updatedEmployee) {
        EmployeeModel employee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found with ID: " + id));

        employee.setFullName(updatedEmployee.getFullName());
        employee.setEmailId(updatedEmployee.getEmailId());
        employee.setPassword(updatedEmployee.getPassword());
        employee.setRole(updatedEmployee.getRole());

        return employeeRepository.save(employee);
    }

    // DELETE employee
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        EmployeeModel employee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found with ID: " + id));

        employeeRepository.delete(employee);
        return "Employee with ID " + id + " deleted successfully.";
    }

    // POST login (basic)
    @PostMapping("/auth/login")
    public EmployeeModel login(@RequestBody EmployeeModel credentials) {
        EmployeeModel employee = employeeRepository.findByEmailId(credentials.getEmailId())
                .orElseThrow(() -> new EmployeeNotFoundException("No account found with email: " + credentials.getEmailId()));

        if (!employee.getPassword().equals(credentials.getPassword())) {
            throw new EmployeeNotFoundException("Invalid password.");
        }

        return employee; // or return a safe DTO without password
    }
}
