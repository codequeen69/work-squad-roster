const generateManager = (manager) => {
    return`
    <div>
    <h3>${manager.getName()}</h3>
    <h4>${manager.getRole()}</h4>
    <p>Manager Id:${manager.getId()}</p>
    <p>Email:${manager.getEmail()}</p>
    <p>Office Number:${manager.getOfficeNumber()}</p>
    </div>
    `
};

const generateEngineer =(engineer) => {
 return `
 <div>
 <h3>${engineer.getName()}</h3>
 <h4>${engineer.getRole()}</h4>
 <p>Employee Id:${engineer.getId()}</p>
 <p>Email:<a> href ="${engineer.getEmail()}"</a></p?
 <p>GitHub Account:${engineer.getGithub}</p>
 </div>
    `
};

const generateIntern = (intern) => {
    return `
   <div>
   <h3>${intern.getName()}</h3>
   <h4>$${intern.getRole()}</h4>
   <p>Employee Id:${intern.getId()}</p>
   <p>Email:${intern.getEmail()}</p>
    <p>School:${intern.getSchool()}</p>
   </div>
    `
};

const employeeSections = employeeArray => {
let employeeCards = [];

    employeeCards.push(employeeArray
        .filter(employee => employee.getRole()==='Manager')
        .map(manager => generateManager(manager))
        .join(''));

    employeeCards.push(employeeArray
        .filter(employee => employee.getRole() ==='Engineer')
        .map(engineer => generateEngineer(engineer))
        .join(''))

        employeeCards.push(employeeArray
            .filter(employee => employee.getRole()==='Intern')
            .map(intern => generateIntern(intern))
            .join(''))
   return employeeCards.join('');
};

module.exports = data => {
 
     return `
     <!DOCTYPE html> 
     <html lang="en"> 
 
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Work Team Roster</title>
      <link rel="stylesheet" href="./src/style.css">
     </head>
     
     <body>
     <header>
       <div class="container flex-row justify-space-between align-center py-3">
         <h1 class="page-title text-secondary bg-dark py-2 px-3">Our Team</h1>
       </div>
     </header>
     <main class="container my-5">
     <div>
    ${employeeSections(data)}
     </div>
 
     </main>
     <footer class="container text-center py-3">
     </footer>
     </body>
     </html>
     `;
     };