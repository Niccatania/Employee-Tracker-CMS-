const mysql = require('mysql2')
const inquirer= require('inquirer')




const  getConnected= mysql.createConnection(
    {
      host: 'localhost', 
      user: 'root',
    // change password
      password: 'password',
      database: 'classlist_db'
    },
  );
  