const dbConnection = require('../database/db');


function postEstudiante(req, res) {
  const {nombre_estu, apellido_estu, documento_identidad, direccion_estu, genero_estu, estu_correo, estu_password, id_acudiente, id_grupo} = req.body;

  const query = 'INSERT INTO `estudiante`(`nombre_estu`, `apellido_estu`, `documento_identidad`, `direccion_estu`, `genero_estu`, `correo_institu_estu`, `contraseña`, `id_acudiente`, `id_grupo`) VALUES (?,?,?,?,?,?,?,?,?)';

  dbConnection.query(query, [nombre_estu, apellido_estu,documento_identidad, direccion_estu, genero_estu, estu_correo, estu_password, id_acudiente, id_grupo], (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

function postEstudianteAcudiente(req, res) {
  const estu_correo = req.body.estu_correo;
  const estu_password = req.body.estu_password;

  const query = 'SELECT concat(estu.nombre_estu," ", estu.apellido_estu) as nombre_estu, estu.correo_institu_estu, estu.genero_estu, estu.documento_identidad,' +
    'concat(acu.nombre_acud," ", acu.apellido_acud) as nombre_acu, acu.cedula_acud, acu.relacion_estu_acud FROM estudiante estu JOIN acudiente acu WHERE estu.id_acudiente = acu.id_acud and estu.correo_institu_estu = (?) and estu.contraseña = (?);';

  dbConnection.query(query, [estu_correo, estu_password], (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

function getEstudiante(req, res) {

  const query = 'SELECT estu.id_estu,estu.nombre_estu, estu.apellido_estu, estu.documento_identidad, estu.direccion_estu, estu.genero_estu,'+
  'estu.correo_institu_estu, estu.contrasena,acu.id_acud ,concat(acu.nombre_acud," ", acu.apellido_acud) as nombre_acu, gr.id_grupo, gr.nombre_grupo FROM estudiante estu'+
  ' JOIN acudiente acu ON estu.id_acudiente = acu.id_acud join grupo gr on estu.id_grupo = gr.id_grupo;';

  dbConnection.query(query, (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

function getStudentsDocument(req, res) {
  const documento_identidad = req.params.documento_identidad;

  const query = 'SELECT * FROM estudiante WHERE documento_identidad = (?)'
  dbConnection.query(query, [documento_identidad], (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.json(resultados);
  });
}

function updateStudentMatri(req, res) {
  const id  = req.params.id;
  const {nombre_estu, apellido_estu, documento_identidad,direccion_estu, genero_estu, correo_institu_estu} = req.body;
  const sqlQuery = `
    UPDATE estudiante 
    SET nombre_estu=(?), apellido_estu=(?), documento_identidad=(?),direccion_estu=(?), genero_estu=(?), correo_institu_estu=(?)
    WHERE id_estu =(?);
  `;
  const values = [nombre_estu, apellido_estu, documento_identidad,direccion_estu, genero_estu, correo_institu_estu, id];
  dbConnection.query(sqlQuery, values, (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.status(200).send('Estudiante actualizado correctamente');
  });
}

function updateStudent(req, res) {
  const id  = req.params.id;
  const {nombre_estu, apellido_estu, documento_identidad,direccion_estu, genero_estu, correo_institu_estu, contrasena, id_acudiente, id_grupo} = req.body;
  const sqlQuery = `
    UPDATE estudiante 
    SET nombre_estu=?, apellido_estu=?, documento_identidad=?,direccion_estu=?, genero_estu=?, correo_institu_estu=?, contrasena=?,id_acudiente=?,id_grupo=?
    WHERE id_estu =?;
  `;
  const values = [nombre_estu, apellido_estu, documento_identidad,direccion_estu, genero_estu, correo_institu_estu,contrasena, id_acudiente, id_grupo,id];
  dbConnection.query(sqlQuery, values, (err, resultados) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    res.status(200).send('Estudiante actualizado correctamente');
  });
}


module.exports = {
  postEstudiante,
  postEstudianteAcudiente,
  getStudentsDocument,
  updateStudentMatri,
  updateStudent,
  getEstudiante
};