const database = require("../database");

module.exports = {
  //Método para listar os alunos cadastrados
  getAlunos: () => {
    return new Promise((resolve, reject) => {
      database.query(
        `SELECT id, nome, telefone, email FROM aluno`,
        (err, result) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        }
      );
    });
  },

  //Método para listar um aluno pelo id
  getAlunoById: (id) => {
    return new Promise((resolve, reject) => {
      database.query(`SELECT * FROM aluno WHERE id = ${id}`, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  },

  //Método para cadastrar um aluno
  createAluno: (foto, nome, email, telefone, data_nascimento, curso) => {
    return new Promise((resolve, reject) => {
      database.query(
        `INSERT INTO aluno VALUES (null, ?, ?, ?, ?, ?, ?)`,
        [foto, nome, telefone, data_nascimento, curso, email],
        (err, result) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        }
      );
    });
  },

  //Método para deletar um aluno
  deleteAluno: (id) => {
    return new Promise((resolve, reject) => {
      database.query(`DELETE FROM aluno WHERE id = ${id}`, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  },

  updateAluno: (id, foto, nome, email, telefone, data_nascimento) => {
    return new Promise((resolve, reject) => {
      database.query(
        "UPDATE aluno SET foto = ?, nome = ?, email = ?, telefone = ?, data_nascimento = ? WHERE id = ?",
        [foto, nome, email, telefone, data_nascimento, id],
        (err, result) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        }
      );
    });
  },
};
