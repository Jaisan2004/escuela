const dbConnection = require('../database/db');


function postEstudianteAcudiente(req, res) {
  const estu_correo = req.body.estu_correo;
  const estu_password = req.body.estu_password;
  
  const query = 'SELECT concat(estu.nombre_estu," ", estu.apellido_estu) as nombre_estu, estu.correo_institu_estu, estu.genero_estu,'+ 
  'concat(acu.nombre_acud," ", acu.apellido_acud) as nombre_acu FROM estudiante estu JOIN acudiente acu WHERE estu.id_acudiente = acu.id_acud and estu.correo_institu_estu = (?) and estu.contraseña = (?);';

  dbConnection.query(query, [estu_correo, estu_password],(err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

function getParentsDocument(req, res) {
  const cedula_acud = req.params.cedula_acud;

  const query = 'SELECT * FROM acudiente WHERE cedula_acud = (?)'
  dbConnection.query(query, [cedula_acud],(err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}


module.exports = {
  postEstudianteAcudiente
};