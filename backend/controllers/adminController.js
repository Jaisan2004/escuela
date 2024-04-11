const dbConnection = require('../database/db');

function postAdmin(req, res) {
    const correo_admin = req.body.correo_admin;
    const contraseña_admin = req.body.contraseña_admin;
  
    const query = 'SELECT a.nombre_admin, a.apellido_admin, a.cedula_admin, a.correo_admin FROM `administrador` a WHERE a.correo_admin = (?) and a.contraseña_admin = (?);';
  
    dbConnection.query(query, [correo_admin, contraseña_admin], (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      res.json(resultados);
    });
}

module.exports = {
    postAdmin
  };