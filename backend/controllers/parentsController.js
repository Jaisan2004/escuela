const dbConnection = require('../database/db');

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

  function updateParent(req, res) {
    const id  = req.params.id;
    const { nombre_acud, apellido_acud, cedula_acud, relacion_estu_acud, celular_acud, correo_acud, empresa_trab_acud, direccion_trab_acud, ocupacion_acud,telefono_trab_acud } = req.body;
    const sqlQuery = `
      UPDATE acudiente 
      SET nombre_acud = ?, apellido_acud = ?, cedula_acud = ?, relacion_estu_acud = ?, celular_acud = ?, correo_acud=?, empresa_trab_acud=?, direccion_trab_acud=?, ocupacion_acud=?, telefono_trab_acud=?
      WHERE id_acud = ?
    `;
    const values = [nombre_acud, apellido_acud, cedula_acud, relacion_estu_acud, celular_acud, correo_acud, empresa_trab_acud, direccion_trab_acud, ocupacion_acud,telefono_trab_acud , id];
    dbConnection.query(sqlQuery, values, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      res.status(200).send('Cliente actualizado correctamente');
    });
  }


module.exports = {
  getParentsDocument,
  updateParent
  };