const config = require('../database/db');
const sql = require('mssql');
const bcrypt = require('bcryptjs');

//INICIO SESION ABOGADO
exports.loginAcu = async (req, res) => {
    const acu_correo = req.body.acu_correo;
    const acu_password = req.body.acu_password;

    try {
        const query = `SELECT * FROM acudiente WHERE correo_acud = ? and contraseña = ?`;
		const values = [acu_correo, acu_password];
        config.query(query, values, (err, resultados) => {
			//usuarioEncontrado = resultados[0];
			if (acu_correo && acu_password) {
				if (resultados.length === 0 || acu_password != resultados[0].contraseña) {
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

exports.validarSesion =  (req, res)=> {
    //TODO: validar si el usuario está logueado
    //Debemos de crear una cookie desde el frontend que será igual al token de inicio de sesión de express
	if (req.session.loggedin) {
        res.send('loggeado');
		// res.send('index',{
		// 	login: true,
		// 	name: req.session.name			
		// });		
	} else {
        res.send('no loggeado');
		// res.send('index',{
		// 	login:false,
		// 	name:'Debe iniciar sesión',			
		// });				
	}
	res.end();
};