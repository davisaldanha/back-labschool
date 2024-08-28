//Importação do database
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
    }
}
