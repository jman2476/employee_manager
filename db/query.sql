USE employee_management_db;

-- view all departments
SELECT
    id,
    department_name
    FROM departments;

-- view all roles
SELECT
    roles.id,
    roles.title,
    departments.department_name AS department,
    roles.salary
    FROM roles
    JOIN departments
        ON roles.department_id = departments.id;

-- view all employees
SELECT
    employees.id,
    CONCAT (employees.first_name, ' ', employees.last_name) AS name,
    roles.title AS position,
    departments.department_name AS department,
    roles.salary,
    CONCAT (managers.first_name, ' ', managers.last_name) AS manager
    FROM employees
    JOIN roles 
        ON employees.role_id = roles.id
    JOIN departments
        ON roles.department_id = departments.id
    LEFT JOIN employees AS managers
        ON employees.manager_id = managers.id;

-- add a department
INSERT INTO department
    (department_name)
    VALUES (?);

-- add a role
INSERT INTO roles
    (title, salary, department_id)
    VALUES (?, ?, ?);

-- add an employee
INSERT INTO emploees
    (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?);

-- update an employee role
UPDATE employees
    SET role_id = ?
    WHERE id = ?;

-- **** BONUS ****
-- Update employee managers.
UPDATE employees
    SET manager_id = ?
    WHERE id = ?;

-- View employees by manager.
SELECT
    employees.id,
    CONCAT (employees.first_name, ' ', employees.last_name) AS name,
    roles.title AS position,
    departments.department_name AS department,
    roles.salary,
    CONCAT (managers.first_name, ' ', managers.last_name) AS manager
    FROM employees
    JOIN roles 
        ON employees.role_id = roles.id
    JOIN departments
        ON roles.department_id = departments.id
    LEFT JOIN employees AS managers
        ON employees.manager_id = managers.id
    WHERE employees.manager_id = ?;

-- View employees by department.
SELECT
    employees.id,
    CONCAT (employees.first_name, ' ', employees.last_name) AS name,
    roles.title AS position,
    departments.department_name AS department,
    roles.salary,
    CONCAT (managers.first_name, ' ', managers.last_name) AS manager
    FROM employees
    JOIN roles 
        ON employees.role_id = roles.id
    JOIN departments
        ON roles.department_id = departments.id
    LEFT JOIN employees AS managers
        ON employees.manager_id = managers.id
    WHERE roles.department_id = ?;

-- Delete departments
DELETE 
    FROM departments
    WHERE id = ?;

-- Delete roles
DELETE 
    FROM roles
    WHERE id = ?;

-- Delete employees
DELETE 
    FROM roles
    WHERE id = ?;


-- View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.