-- create department table
    -- id, name
-- create role table
    -- id, title, salary, department_id
    -- uses the id from department table for department id
-- create employee table
    -- id, first name, last name, role id, manager id
    -- takes role id from the value on roles table
    -- takes manager id from id value of manager in the emploees table

DROP DATABASE IF EXISTS employee_management_db;

CREATE DATABASE employee_management_db;

USE employee_management_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary VARCHAR(30) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES departments (id)
    ON DELETE CASCADE
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles (id)
    ON DELETE CASCADE,
    FOREIGN KEY (manager_id)
    REFERENCES employees (id)
    ON DELETE SET NULL
);