const express = require('express');
const router = express.Router();
const dbConnection = require('./database/db');
const lawyerController = require('./controllers/lawyerController');
const students = require('./controllers/studentsController');
const clientController = require('./controllers/clientController');
const seguimientoController = require('./controllers/seguimientoController');
const login = require('./controllers/login');
const parentsController = require('./controllers/parentsController');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

//login admin
router.post('/loginEstu', login.loginAcu);
router.post('/alumnoAcu', students.postEstudianteAcudiente);
router.get('/acudMatri/:cedula_acud', parentsController.getParentsDocument);
router.put('/acudMatri/:id', parentsController.updateClient);


module.exports = router;
