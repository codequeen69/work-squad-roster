const fs = require('fs');
const inquirer = require('inquirer');
const memberArray = [];
<<<<<<< HEAD
const Manager = require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern = require('./lib/Intern');
=======
const generatePage = require('./page-template');
const generateSite = require('./generate-site')
>>>>>>> feature/page-template

const promptManager =() => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's name.",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log('Please enter a name to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter and manager employee ID.',
            validate: managId => {
                if (managId) {
                    return true;
                } else {
                    console.log("Please enter an ID to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter a manager employee email.',
            validate: managEmail => {
                if (managEmail) {
                    return true;
                } else {
                    console.log('Please enter an email to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter a manager office number.',
            validate: officeNum => {
                if (officeNum) {
                    return true;
                } else {
                    console.log('Please enter an office number to continue!');
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        //calling the constructor method
        const manager = new Manager(name, id, email, officeNumber );
        memberArray.push(manager);
        addEmployee();
    })
};

const promptEngineer = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name.",
            validate: engName => {
                if (engName) {
                    return true;
                } else {
                    console.log('Please enter a name to conitune!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID of the engineer.',
            validate: engId => {
                if (engId) {
                    return true;
                } else {
                    console.log('Please enter and ID to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email of the engineer.',
            validate: engEmail => {
                if (engEmail) {
                    return true;
                } else {
                    console.log('Please enter an email to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter a GitHub username for the engineer.',
            validate: gitUser => {
                if (gitUser) {
                    return true;
                } else {
                    console.log('Please enter a username to continue!');
                    return false;
                }
            }
        }
    ])
    .then(engineerData => {
        const {name, id, email, github} = engineerData;
        const engineer = new Engineer(name, id, email, github);
        memberArray.push(engineer);
        addEmployee();
    })
};

const promptIntern = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name",
            validate: intName => {
                if (intName) {
                    return true;
                } else {
                    console.log('Please enter a name to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter an ID for the intern.',
            validate: intId => {
                if (intId) {
                    return true;
                } else {
                    console.log('Please enter an ID to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email for the intern.',
            validate: intEmail => {
                if (intEmail) {
                    return true;
                } else {
                    console.log('Please enter a email to continue!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: 'Please enter a school name for the intern.',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school name to continue!');
                    return false;
                }
            }
        },
    ])
    .then(internData =>{
        const { name, id, email, school} = internData;
        const intern = new Intern (name, id, email, school);
        console.log(intern)
        memberArray.push(intern);
        addEmployee();
    })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'member',
            message: 'Would you like to add another employee? If so, which type',
            choices: ['Manager', 'Engineer', 'Intern', 'none']
        }
    ])
        .then((answer) => {

            if (answer.member === 'Engineer') {
                promptEngineer();
            } else if (answer.member === 'Intern') {
                promptIntern();
            } else if (answer.member === 'none') {

                return writeToFile("./index.html",)
                console.log("Page was generated!")
            }
        })
};

promptManager()
