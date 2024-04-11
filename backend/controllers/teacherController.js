const dbConnection = require('../database/db');

function postProfesor(req, res) {
  const {nombre_prof, apellido_prof, correo_institu_prof, celular_prof, cargo, contrasena} = req.body;

  const query = 'INSERT INTO `profesor`( `nombre_prof`, `apellido_prof`, `correo_institu_prof`, `celular_prof`, `cargo`, `contrasena`) VALUES (?,?,?,?,?,?)';

  dbConnection.query(query, [nombre_prof, apellido_prof,correo_institu_prof, celular_prof, cargo, contrasena], (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}


function getProfesores(req, res) {
  const query = 'SELECT * FROM `profesor`'
  dbConnection.query(query, (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

function updateProfesor(req, res) {
  const id  = req.params.id;
  const {nombre_prof, apellido_prof, correo_institu_prof,celular_prof, cargo, contrasena} = req.body;
  const sqlQuery = `
    UPDATE profesor 
    SET nombre_prof=?,apellido_prof= ?, correo_institu_prof= ?,celular_prof= ?,cargo= ?, contrasena= ?
    WHERE id_prof =?;
  `;
  const values = [nombre_prof, apellido_prof, correo_institu_prof,celular_prof, cargo, contrasena,id];
  dbConnection.query(sqlQuery, values, (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.status(200).send('Profesor actualizado correctamente');
  });
}

module.exports = {
  getProfesores,
  postProfesor,
  updateProfesor
  };