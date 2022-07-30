const fs = require('fs');
const inquirer = require('inquirer');
const teamArray =[];

const promptQuestions = (managerData) => {
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
        },
    ])
};
const addEmployee = employeeData =>{
return inquirer.prompt([
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Would you like to add another employee? If so, which type',
        choices: ['Manager', 'Engineer', 'Intern', 'none']
    }
])
.then((response)=>{
    console.log(response)

   if(response === 'Engineer'){
    const promptEngineer = (engineerData) => {
    
        return inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
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
                name: 'engineerId',
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
                name: 'engineerEmail',
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
    };
       
     }else if(response === 'Manager'){
       
}
     else if(response ==='Intern'){
        const promptIntern = (internData) => {
            if(!internData.info){
                internData.info = [];
            }
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
                    type:'input',
                    name: 'internId',
                    message: 'Please enter an ID for the intern.',
                    validate: intId =>{
                        if(intId){
                            return true;
                        }else{
                            console.log('Please enter an ID to continue!');
                            return false;
                        }
                    } 
                },
                {
                    type:'input',
                    name: 'internEmail',
                    message: 'Please enter an email for the intern.',
                    validate: intEmail =>{
                        if(intEmail){
                            return true;
                        }else{
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
        };
      
    }else if(response === 'none'){

     }
    })
};



promptQuestions()
.then(addEmployee)