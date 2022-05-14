const mysql = require('mysql2')
const inquirer= require('inquirer');
const cTable = require('console.table');



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
    [{
      type:"input",
      name:"addDept",
     message: "Add a new department"
    }
    ])}
  }

   
function addRole(){
  inquirer
  .prompt([
    {
   
    type: "input",
      name: "name",
      message: "Role name:",
    },
    {
      type: "input",
      name: "salary",
      message: "Role salary:",},
      {
     
      type: "input",
      name: "dept",
      message: "Which department is the role in?",
      },
      // .then(function(answers){
      //   let role=new Role(answers.Name, answers.salary, answers.dept, )});
      
  ])}

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
        name: "role",
        message: "What is the employee's role?",
        },
        {
       
          type: "input",
          name: "manager",
          message: "Who is the employee's manager?",
          },
        
    ])}

    // function updateEmployee();
  
    
