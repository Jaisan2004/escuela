const mysql = require('mysql');
require('dotenv').config({path: './.env'});

const connection = mysql.createConnection({
    user: 'root',
    password : '',
    host: 'localhost',
    port: '3306', 
    database : 'colegio', 
  });
  
// Conexión a la base de datos
connection.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos: ', err);
      return;
    } 
    console.log('Conexión a la base de datos MySQL establecida');
  });
  
module.exports = connection;
