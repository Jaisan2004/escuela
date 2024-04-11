const dbConnection = require('../database/db');

function getGrupo(req, res) {
  
    const query = 'SELECT g.id_grupo, g.nombre_grupo FROM `grupo` g ORDER BY g.nombre_grupo'
    dbConnection.query(query, (err, resultados) => {
      if (err) {
        console.error('Error al ejecutar la consulta: ', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
      res.json(resultados);
    });
  }


module.exports = {
    getGrupo
  };