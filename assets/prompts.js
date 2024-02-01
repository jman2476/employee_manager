// list of prompts, set up as an array of options for inquirer
menuArray = [{
    type: 'list',
    name: 'menuChoice',
    message: 'WhatDyaWannaDo?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Update an employee\'s manager', 'Exit program']
}]

addDeptArray = [{
    type: 'input',
    name: 'depName',
    message: 'What is the new department called?',
}]

addRoleArray = [{
    type: 'input',
    name: 'title',
    message: 'What is the new title?'
},
{
    type: 'number',
    name: 'salary',
    message: 'What is the salary?'
},
{
    type: 'number',
    name: 'department_id',
    message: 'What department is this part of? Use depatment id'
}]

addEmplArray = [{
    type: 'input',
    name: 'first_name',
    message: 'Employee first name?'
},
{
    type: 'input',
    name: 'last_name',
    message: 'Employee last name?'
},
{
    type: 'number',
    name: 'role_id',
    message: 'Employee role? Use role id'
},
{
    type: 'number',
    name: 'manager_id',
    message: 'Employee manager? Use manager\'s id'
}]

updateRoleArray = [{
    type: 'number',
    name: 'employee_id',
    message: 'Which employee would you like to update? Use id'
},
{
    type: 'number',
    name: 'role_id',
    message: 'What is their new role? Use role id'
}]

updateManagerArray = [{
    type: 'number',
    name: 'employee_id',
    message: 'Which employee would you like to update? Use id'
},
{
    type: 'number',
    name: 'manager_id',
    message: 'What is their new manager? Use manager id'
}]


module.exports = {menuArray, addDeptArray, addRoleArray, addEmplArray, updateRoleArray, updateManagerArray}