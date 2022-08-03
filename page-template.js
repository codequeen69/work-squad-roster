const generateManager = (manager) => {
    return`
    <div class = "card manager m-3">
    <div class ="card-body text-white">
    <h3 class="card-title">${manager.getName()}</h3>
    <h4 class="card-subtitle mb-2">${manager.getRole()}</h4><span class="oi oi-star"></span>
    <p>Manager Id: ${manager.getId()}</p>
   <p>Email: <a  href= "mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
    <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
    </div>
    `
};

const generateEngineer =(engineer) => {
 return `
 <div class="card engineer text-white m-3">
 <div class= "card-body">
 <h3 class="card-title">${engineer.getName()}</h3>
 <h4 class="card-subtitle mb-2">${engineer.getRole()}</h4><span class="oi oi-heart"></span>
 <p>Employee Id: ${engineer.getId()}</p>
 <p>Email: <a href ="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
 <p>GitHub Username: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
 </div>
 </div>
    `
};

const generateIntern = (intern) => {
    return `
    <div class = "card intern text-white m-3">
   <div class="card-body">
   <h3 class="card-title">${intern.getName()}</h3>
   <h4 class="card-subtitle mb-2">${intern.getRole()}</h4><span class="oi oi-moon"></span>
   <p>Employee Id: ${intern.getId()}</p>
   <p>Email: <a href ="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
  <p>School: ${intern.getSchool()}</p>
   </div>
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
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css"/>
      <link rel="stylesheet" href="./src/style.css">
     </head>
     
     <body>
     <header class = "text-center text-white">
         <h1><span class="oi oi-star"></span><span class="oi oi-heart"></span><span class="oi oi-moon"></span>Our Team<span class="oi oi-moon"></span><span class="oi oi-heart"></span><span class="oi oi-star"></span></h1>
     </header>
     <main class="container">
     <div class = "row justify-content-center">
    ${employeeSections(data)}
     </div>
     </main>
     <footer>
     <div class ="text-center text-white">Copyright © 2002, Rainbow Industries</div>
     </footer>
     </body>
     </html>
     `;
     };