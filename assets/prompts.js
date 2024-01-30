// list of prompts, set up as an array of options for inquirer
menuArray = [{
    type: 'list',
    name: 'userQuery',
    message: 'WhatDyaWannaDo?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
}]

addDepartmentArray = [{
    type: 'input',
    name: 'depName',
    message: 'What is the new department called?',
    
}]
module.exports = menuArray