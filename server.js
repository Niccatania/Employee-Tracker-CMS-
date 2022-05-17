const mysql = require('mysql2')
const inquirer= require('inquirer');
const cTable = require('console.table');
const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());


const connection= mysql.createConnection(
    {
      host: 'localhost', 
      user: 'root',
      password: 'Peach',
      database: 'employee_DB'
      
    },
    console.log("Succesfully connected to the Employee Database")
  );
  
  connection.connect(function(err) {
    if(err) throw err
    letsBegin();
  });

  function letsBegin(){

                                                                                                                                             
                                                                                                                                                                                                         
  inquirer
  .prompt(
    [{
      type:"list",
      name:"mainList",
     choices:["View all departments","View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update employee role"],
    }
    ]
  )
  .then((choices)=>{
    if(choices.mainList==="View all departments"){
      viewDept();
    
    } else if (choices.mainList==="View all roles"){
          viewRoles();
      
    } else if (choices.mainList==="View all employees"){
          viewEmployees();
  
    } else if  (choices.mainList==="Add a department"){
      addDept();

    } else if  (choices.mainList==="Add a role"){
      addRole();
    
    } else if  (choices.mainList==="Add an employee"){
      addEmployee();
  
    } else  { 
      updateEmployee();
}
})

  function viewDept(){
   connection.query("SELECT * FROM department ",
    function(err,res){
      if (err)throw err
      console.table(res)
      letsBegin();
    })
  }
  function viewRoles(){
    connection.query("SELECT * FROM roles",
    function(err,res){
      if (err)throw err
      console.table(res)
      letsBegin();
    })
  }
  function viewEmployees(){
    connection.query("SELECT * FROM employee",
    function(err,res){
      if (err)throw err
     console.table(res)
      letsBegin();
    })
  }
  
function addDept(){
  inquirer
  .prompt(
    [  {
      type:"input",
      name:"id",
     message: "Add an Id"
    },
      {
      type:"input",
      name:"dept_title",
     message: "Add a new department"
    }
    ])
    .then(function(answers){
    connection.query(
      "INSERT INTO department SET ?",
      { id: answers.id,
        dept_title: answers.dept_title,
      },
      function(err) {
        if (err) throw err;
        letsBegin();
    });

                          })
                        }
                      }
 function addRole(){
  inquirer
  .prompt([
    {
   
    type: "input",
      name: "title",
      message: "Role name:",
    },
    {
      type: "input",
      name: "salary",
      message: "Role salary:",},
      
  ])
  .then(function(answers){ 
    connection.query(
      "INSERT INTO roles SET ?",
      { title: answers.title,
        salary: answers.salary,
      },
        function(err) {
        if (err) throw err;
        letsBegin();
    });

                          })}

  function addEmployee(){
    inquirer
    .prompt([
      {
     
      type: "input",
        name: "firstName",
        message: "Employee's first name",
      },
      {
        type: "input",
        name: "lastName",
        message: "Employee's last name",},
        {
       
        type: "input",
        name: "salary",
        message: "What is the employee's salary",
        },
        {
       
          type: "input",
          name: "manager",
          message: "Who is the employee's manager?",
          },
        
    ])
    .then(function(answers){ 
      connection.query("INSERT INTO employee SET ?",
        { first_name: answers.firstName,
          last_name: answers.lastName,
          salary:answers.salary
        },
          function(err) {
          if (err) throw err;
          letsBegin();
      });
  
})}

function updateEmployee(){
  inquirer
  .prompt([
    {
   
    type: "input",
      name: "firstName",
      message: "Employee's first name",
    },
    {
      type: "input",
      name: "lastName",
      message: "Employee's last name",},
      {
     
      type: "input",
      name: "salary",
      message: "What is the employee's new salary",
      },
      {
     
        type: "input",
        name: "manager",
        message: "Who is the employee's manager?",
        },
      
  ])
  .then(function(answers){ 
    connection.query("UPDATE INTO employee SET ?",
      { first_name: answers.firstName,
        last_name: answers.lastName,
        salary:answers.salary
      },
        function(err) {
        if (err) throw err;
        letsBegin();
    });

                          })}


    



  
  
    
