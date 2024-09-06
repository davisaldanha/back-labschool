const express = require('express')
const route = express.Router()
const cors = require('cors')
const cursoController = require('./controllers/CursoController')
const alunoController = require('./controllers/AlunoController')
const upload = require('./config/multerConfig')

route.options("*", cors())

//Endpoints - CURSO
route.get('/curso', cursoController.findAllTurmas) //READY
route.post('/curso', cursoController.saveCurso) //CREATE
route.put('/curso/:id', cursoController.updateCurso) //UPDATE
route.delete('/curso/:id', cursoController.deleteCurso) //DELETE

//Endpoints - Aluno
route.get('/aluno', alunoController.findAllAlunos) //READY
route.get('/aluno/:id', alunoController.findAlunoById) //READY
route.post('/aluno', upload.single('image'), alunoController.saveAluno) //CREATE
route.put('/aluno/:id', upload.single('image'), alunoController.updateAluno) //UPDATE
//route.delete('/aluno/:id', alunoController.deleteAluno) //DELETE

module.exports = route
