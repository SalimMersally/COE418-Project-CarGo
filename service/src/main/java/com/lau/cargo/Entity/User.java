package com.lau.cargo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class User {
//    @Id
//    @GeneratedValue(strategy=GenerationType.AUTO)
//    private Integer id;
    @Id
    private String email;
    @Id
    private String password;
    private String fname;
    private String lname;

    private String description;
    private boolean isCompany;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public String getDescription() {
        return description;
    }

    public boolean isCompany() {
        return isCompany;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCompany(boolean company) {
        isCompany = company;
    }
}
