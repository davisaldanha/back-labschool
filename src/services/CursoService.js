//Importação do database
const { updateCurso } = require('../controllers/CursoController')
const database = require('../database')

module.exports = {

    //Método para consultar os cursos
    readCursos: () => {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM curso', (err, result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    //Método para cadastrar um curso
    createCurso: (nome) => {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO curso VALUES (null, "${nome}", 0)`, (err, result) => {
                if(err){                    
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    //Método para pesquisar um curso pelo id
    findCursoById: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM curso WHERE id = ${id}`, (err, result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    //Método para atualizar um curso
    updateCurso: (id, nome, quantidade) => {
        return new Promise((resolve, reject) => {
            database.query(`UPDATE curso SET nome="${nome}", quantidade=${quantidade} WHERE id = ${id}`, (err, result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    },

    //Método para deletar um curso
    deleteCurso: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`DELETE FROM curso WHERE id = ${id}`, (err, result) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(result) 
            })
        })
    }
}
