// add them imports in
const db = require('./db/connections') //import database
const inquirer = require('inquirer') // import inquirer
const {getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateRole,
    updateManager}  = require('./assets/functions')




// init
async function init() {
    await getDepartments()

    // end session
    process.exit()
}

init()