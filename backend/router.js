const express = require('express');
const router = express.Router();
const students = require('./controllers/studentsController');
const login = require('./controllers/login');
const parentsController = require('./controllers/parentsController');
const app = express();

// Middleware para analizar JSON
app.use(express.json());

//login admin
router.post('/loginEstu', login.loginAcu);
router.post('/alumnoAcu', students.postEstudianteAcudiente);
router.get('/alumMatri/:documento_identidad', students.getStudentsDocument);
router.put('/alumMatri/:id', students.updateStudent);
router.get('/acudMatri/:cedula_acud', parentsController.getParentsDocument);
router.put('/acudMatri/:id', parentsController.updateParent);



module.exports = router;
