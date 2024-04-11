const config = require('../database/db');
const sql = require('mssql');
const bcrypt = require('bcryptjs');

//INICIO SESION ABOGADO
exports.loginAcu = async (req, res) => {
    const estu_correo = req.body.estu_correo;
    const estu_password = req.body.estu_password;

    try {
        const query = `SELECT * FROM estudiante WHERE correo_institu_estu = ? and contraseña = ?`;
		const values = [estu_correo, estu_password];
        config.query(query, values, (err, resultados) => {
			//usuarioEncontrado = resultados[0];
			if (estu_correo && estu_password) {
				if (resultados.length === 0 || estu_password != resultados[0].contraseña) {
					res.status(400).send({
						alert: true,
						alertTitle: "Error",
						alertMessage: "credenciales incorrectas",
						ruta: 'login'
					  });
				} else {
					req.session.loggedin = true;
					req.session.name = resultados[0].name;
					res.status(200).send({
						alert: true,
						alertTitle: "Conexión exitosa",
						alertMessage: "Success",
						alertIcon: 'success',
						ruta: ''
					});
				}
				res.end();
			} else {
				res.send('Please enter user and Password!');
				res.end();
			}
		});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error de servidor');
    }
};

exports.loginAdmin = async (req, res) => {
    const correo_admin = req.body.correo_admin;
    const contraseña_admin = req.body.contraseña_admin;

    try {
        const query = `SELECT * FROM administrador WHERE correo_admin = ? and contraseña_admin = ?`;
		const values = [correo_admin, contraseña_admin];
        config.query(query, values, (err, resultados) => {
			//usuarioEncontrado = resultados[0];
			if (correo_admin && contraseña_admin) {
				if (resultados.length === 0 || contraseña_admin != resultados[0].contraseña_admin) {
					res.status(400).send({
						alert: true,
						alertTitle: "Error",
						alertMessage: "credenciales incorrectas",
						ruta: 'login'
					  });
				} else {
					req.session.loggedin = true;
					req.session.name = resultados[0].name;
					res.status(200).send({
						alert: true,
						alertTitle: "Conexión exitosa",
						alertMessage: "Success",
						alertIcon: 'success',
						ruta: ''
					});
				}
				res.end();
			} else {
				res.send('Please enter user and Password!');
				res.end();
			}
		});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error de servidor');
    }
};

