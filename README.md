# Employee Management

## Description

This application is designed to help you keep track of your company by sorting your employees, roles and departments. While this is a command line based application, all the data you could want is displayed in beautiful tables that just bring tears to my eyes. Using MySQL databases, this program helps you keep track of the departments in your company, the roles under each department, and the employees working those roles. You can also add any departments, roles, or employees as you need them, and update the manager or role of an employe.

To watch it in action, check out this video on Google Drive:
https://drive.google.com/file/d/1WdOkAQKBSoXd49XnKktSZGnAw_iX5RW8/view?usp=sharing

## Table of Contents (Optional)


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

After cloning the repository down from GitHub, make sure to move into the /employee_manager directory and run 

```bash
npm install
```
in the terminal before running the program to ensure you have the necessary dependencies. This application depends on the inquirer and msql2 packages, and assumes that you have MySQL installed on your machine. Don't forget to open up the MySQL shell and run 

```sql
SOURCE ./db/schema.sql
```
to start the database on your machine.

## Usage

When ready to use, just type into the console: 

```bash
node index.js
```
You will be presented with a list of options, including view all departments, roles or employees; adding a department, role or employee; and updating the role or manager for a specific employee.

When you select any of the 'View' options, the program will display a table of all associated values:

    * departments will have columns of department name and id number
    * roles will have columns of title, salary, department and id
    * employees will have columns of name, position, department, salary, and manager (if applicable)

When you select one of the 'Add' options, you will be asked to put in all the information the database needs for each value type, including first and last names for employees and what department a role belongs to.

When selecting the update options, make sure you know the id number for both the employee and the manager or role that you want to assign to the employee. This prompt only takes numerical inputs, and will let you know if either value does not correspond to a value in the database.

## Credits

This project was written by Jeremy McKeegan, github username jman2476

## License

MIT License
