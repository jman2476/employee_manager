// add them imports in
const db = require('./db/connections') //import database
const inquirer = require('inquirer') // import inquirer

// bring in the functions
const { getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateRole,
    updateManager } = require('./assets/functions')
// bring in the inquirer questions
const {menuArray} = require('./assets/prompts')

// init
async function init() {
    console.log('\n')
    try {
        const answer = await inquirer.prompt(menuArray)

        switch(answer.menuChoice) {
            case 'View all departments':
                await getDepartments()
                break
            case 'View all roles':
                await getRoles()
                break
            case 'View all employees':
                await getEmployees()
                break
            case 'Add a department':
                await addDepartment()
                break
            case 'Add a role':
                await addRole()
                break
            case 'Add an employee':
                await addEmployee()
                break
            case 'Update an employee role':
                await updateRole()
                break
            case 'Update an employee\'s manager':
                await updateManager()
                break
            case 'Exit program':
                // end session
                process.exit()
        }
        init()

    } catch (err) {
        console.log(err)
    }

}

console.log('Welcome to the employee manager program!!!')
init()