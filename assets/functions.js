const db = require('../db/connections') //import database
// view all departments
async function getDepartments() {
    try {
        // query to get a list of all departments
        const [departments] = await db.query(
            `SELECT
            id,
            department_name
            FROM departments;`
        )

        console.table(departments)
    } catch (err) {
        console.log(err)
    }
}


// view all roles
async function getRoles() {
    try {
        // query to get a list of all roles
        // displaying role, department, salary
        const [roles] = await db.query(
            `SELECT
            roles.id,
            roles.title,
            departments.department_name AS department,
            roles.salary
            FROM roles
            JOIN departments
                ON roles.department_id = departments.id`)

        console.table(roles)
    } catch (err) {
        console.log(err)
    }
}

// view all employees
async function getEmployees() {
    try {
        // query to get a list of all employees
        // displaying name, role, department, salary, manager
        const [employees] = await db.query(
            `SELECT
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
                ON employees.manager_id = managers.id`
        )

        console.table(employees)
    } catch (err) {
        console.log(err)
    }
}


// add a department
async function addDepartment(newDepartment) {
    try {
        // check if the department is in the list yet
        const [departments] = await db.query(
            `SELECT
            id,
            department_name
            FROM departments
            WHERE department_name = ?`,
            newDepartment
        )

        // if the departments array has length, then say the department already exists
        if (departments.length) {
            return console.log('This department already exists')
        }

        // query to insert a department
        const [insert] = await db.query(`
            INSERT INTO departments
            (department_name)
            VALUES (?)`, newDepartment)

        return console.log(`Department added successfully wih and id of ${insert.insertId}`)

    } catch (err) {
        console.log(err)
    }
}


// add a role
// takes an object as parameter, in the format:
// newRole = {
//     title: 'string',
//     salary: int,
//     department_id: int
// }


async function addRole(newRole) {
    try {
        // check if the role is in the table yet
        const [roles] = await db.query(
            `SELECT
            roles.id,
            roles.title,
            departments.department_name AS department,
            roles.salary
            FROM roles
            JOIN departments
                ON roles.department_id = departments.id
            WHERE (roles.title, roles.department_id) = (?, ?)`,
            [newRole.title, newRole.department_id]
        )

        // if role array has length, say the role already exists
        if (roles.length) {
            return console.log('This role already exists')
        }

        // query to insert the role
        const [insert] = await db.query(
            `INSERT INTO roles
            (title, salary, department_id)
            VALUES (?, ?, ?)`,
            [newRole.title, newRole.salary, newRole.department_id]
        )

        return console.log(`Role added successfully with an id of ${insert.insertId}`)

    } catch (err) {
        console.log(err)
    }
}

// add an employee
// takes an object as parameter, in the format:
// newEmployee = {
//     first_name: 'string',
//     last_name: 'string',
//     role_id: Int,
//     manager_id: int
// }
async function addEmployee(newEmployee) {
    try {
        // get name of new Employee to check against existing employees
        const employeeName = `${newEmployee.first_name} ${newEmployee.last_name}`
        // check if the employee is in the table yet
        const [employees] = await db.query(
            `SELECT
            employees.id,
            CONCAT (employees.first_name, ' ', employees.last_name),
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
            WHERE CONCAT (employees.first_name, ' ', employees.last_name) = ?`,
            employeeName
        )

        // if employee array has length, say the role already exists
        if (employees.length) {
            return console.log('This employee already exists')
        }

        // query to insert the employee
        const [insert] = await db.query(
            `INSERT INTO employees
            (first_name, last_name, role_id, manager_id)
            VALUES (?, ?, ?, ?)`,
            [newEmployee.first_name, newEmployee.last_name, newEmployee.role_id, newEmployee.manager_id]
        )

        return console.log(`Employee added successfully with an id of ${insert.insertId}`)

    } catch (err) {
        console.log(err)
    }
}

// update an employee's role
async function updateRole(employee_id, role_id) {
    try {
        // check if there is a an employee with the specified id
        const [employees] = await db.query(
            `SELECT
            id,
            first_name
            FROM employees
            WHERE id = ?`,
            employee_id
        )

        // check if the role exist
        const [roles] = await db.query(
            `SELECT 
            id,
            title
            FROM roles
            WHERE id = ?`,
            role_id
        )

        
        // if there is a user with the given id, and the role exists, change the role_id
        // if either doesn't exist in the tables, report this to the user
        if (employees.length && roles.length) {
            // set array for role_id and employee_id
            const idValues = [roles[0].id, employees[0].id]
            await db.query(
                `UPDATE employees
                SET role_id = ?
                WHERE id = ?`,
                idValues
            )

            return console.log(`${employees[0].first_name}\'s role updated successfully to ${roles[0].title}`)
        } else if (employees.length) {
            return console.log("Error: The role you specified does not exist")
        } else if (roles.length) {
            return console.log("Error: The employee you specified does not exist")
        } else {
            return console.log('Error: Neither the employee or the role you specified exists')
        }

    } catch (err) {
        console.log(err)
    }
}

// update an meployee's manager
async function updateManager(employee_id, manager_id) {
    try {
        // check if there is a an employee with the specified id
        const [employees] = await db.query(
            `SELECT
            id,
            first_name
            FROM employees
            WHERE id = ?`,
            employee_id
        )
         
        // check if the role exist
        const [managers] = await db.query(
            `SELECT
            id,
            first_name
            FROM employees
            WHERE id = ?`,
            manager_id
        )
     
        // if there is a user with the given id, and the role exists, change the role_id
        // if either doesn't exist in the tables, report this to the user
        if (employees.length && managers.length) {
            // set array for role_id and employee_id
            const idValues = [managers[0].id, employees[0].id]
            await db.query(
                `UPDATE employees
                SET manager_id = ?
                WHERE id = ?;`,
                idValues
            )

            return console.log(`${employees[0].first_name}\'s manager updated successfully to ${managers[0].first_name}`)
        } else if (employees.length) {
            return console.log("Error: The manager you specified does not exist")
        } else if (managers.length) {
            return console.log("Error: The employee you specified does not exist")
        } else {
            return console.log('Error: Neither the employee or the manager you specified exists')
        }
    } catch (err) {
        console.log(err)
    }
}

// view employees by manager
async function employeesByManager(manager_id) {
    try {

    } catch (err) {
        console.log(err)
    }
}

// view employees by department
async function employeesByDepartment(department_id) {
    try {

    } catch (err) {
        console.log(err)
    }
}

// delete department
async function shutterDepartment(department_id) {
    try {

    } catch (err) {
        console.log(err)
    }
}

// delete role
async function makeRedundant(role_id) {
    try {

    } catch (err) {
        console.log(err)
    }
}

// delete employee
async function sackEmployee(employee_id) {
    try {

    } catch (err) {
        console.log(err)
    }
}

// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department
async function departmentBudget(department_id) {
    try {

    } catch (err) {
        console.log(err)
    }
}



module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateRole,
    updateManager
}