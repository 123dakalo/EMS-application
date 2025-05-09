package net.javaguides.employeebackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class EmployeeModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "full_name")
    private String fullName;
    @Column(name = "email_id", unique = true)
    private String emailId;
    @Column(name = "password")
    private String password;
    @Column(name = "role")
    private String role;

    public EmployeeModel() {
        super();
    }

    public EmployeeModel(String firstName, String emailId, String password, String role) {
        this.fullName = firstName;
        this.emailId = emailId;
        this.password = password;
        this.role = role;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }

}