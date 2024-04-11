const express = require('express');
const router = express.Router();
const students = require('./controllers/studentsController');
const login = require('./controllers/login');
const parentsController = require('./controllers/parentsController');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

//login estudiante
router.post('/loginEstu', login.loginAcu);

//login Administrador
router.post('/loginAdmin', login.loginAdmin);

//Traer datos de estudiante en localstorage
router.post('/alumnoAcu', students.postEstudianteAcudiente);

//Traer los datos del estudiante por la cedula
router.get('/alumMatri/:documento_identidad', students.getStudentsDocument);

//Modificar los datos del estudiante
router.put('/alumMatri/:id', students.updateStudent);

//Traer los datos del acudiente por la cedula
router.get('/acudMatri/:cedula_acud', parentsController.getParentsDocument);

//Modificar los datos del acudiente
router.put('/acudMatri/:id', parentsController.updateParent);



module.exports = router;
