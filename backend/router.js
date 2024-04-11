const express = require('express');
const router = express.Router();
const admin = require('./controllers/adminController');
const students = require('./controllers/studentsController');
const group = require('./controllers/groupController');
const login = require('./controllers/login');
const parentsController = require('./controllers/parentsController');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

/*ADMINISTRADOR*/
//login Administrador
router.post('/loginAdmin', login.loginAdmin);

//Traer datos de estudiante en localstorage
router.post('/admin', admin.postAdmin);

/*ESTUDIANTE*/

//login estudiante
router.post('/loginEstu', login.loginAcu);

//Registrar nuevo estudiante
router.post('/alumno', students.postEstudiante);

//Traer los datos de los estudiantes
router.get('/alumnos', students.getEstudiante);

//Traer datos de estudiante en localstorage
router.post('/alumnoAcu', students.postEstudianteAcudiente);

//Traer los datos del estudiante por la cedula
router.get('/alumMatri/:documento_identidad', students.getStudentsDocument);

//Modificar los datos del estudiante en la matricula
router.put('/alumMatri/:id', students.updateStudentMatri);

//Modificar los datos del estudiante admin
router.put('/alumno/:id', students.updateStudent);

/*ACUDIENTE*/
//Traer los datos del acudiente por la cedula
router.get('/acudMatri/:cedula_acud', parentsController.getParentsDocument);

//Traer los datos del acudiente (id, nombre)
router.get('/acudiente', parentsController.getParentsAcu);

//Modificar los datos del acudiente
router.put('/acudMatri/:id', parentsController.updateParent);

/*GRUPOS*/
//Traer datos del grupo
router.get('/grupo', group.getGrupo);


module.exports = router;
