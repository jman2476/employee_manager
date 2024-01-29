USE employee_management_db;

-- view all departments
SELECT
    id,
    dep_name
    FROM departments;

-- view all roles
SELECT
    roles.title,
    roles.salary,
    departments.dep_name AS department
    FROM roles
    JOIN departments
        ON roles.department_id = departments.id;

-- view all employees

-- add a department

-- add a role

-- add an employee

-- update an employee role

