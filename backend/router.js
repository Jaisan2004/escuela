const express = require('express');
const router = express.Router();
const dbConnection = require('./database/db');
const lawyerController = require('./controllers/lawyerController');
const requestsController = require('./controllers/requestsController');
const clientController = require('./controllers/clientController');
const seguimientoController = require('./controllers/seguimientoController');
const login = require('./controllers/login');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

//login admin
router.post('/loginEstu', login.loginAcu);
router.post('/alumnoAcu', requestsController.postEstudianteAcudiente);


module.exports = router;
