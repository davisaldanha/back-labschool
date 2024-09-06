const alunoService = require("../services/AlunoService");

module.exports = {
  //Método para consultar os alunos
  findAllAlunos: async (request, response) => {
    let json = { error: "", result: [] };

    let alunos = await alunoService.getAlunos();

    if (alunos.length == 0) {
      json.result = "0 alunos cadastrados.";
      response.status(200).json(json);
    } else {
      for (let aluno of alunos) {
        json.result.push(aluno);
      }
      response.status(200).json(json);
    }
  },

  //Método para consultar um aluno pelo id

  findAlunoById: async (request, response) => {
    let json = { error: "", result: {} };

    let id = request.params.id;

    let alunos = await alunoService.getAlunoById(id);

    if (alunos.length == 0) {
      json.result = "Aluno de ID { ${id} } não encontrado!";
      response.status(400).json(json);
    } else {
      json.result = alunos[0];
      response.status(200).json(json);
    }
  },

  //Método para cadastrar um aluno
  saveAluno: async (request, response) => {
    json = { error: "", result: "" };

    let foto = request.file.buffer;
    let nome = request.body.nome;
    let email = request.body.email;
    let telefone = request.body.telefone;
    let data_nascimento = request.body.data_nascimento;
    let curso = request.body.curso;

    if (
      nome != "" &&
      email != "" &&
      telefone != "" &&
      data_nascimento != "" &&
      curso != ""
    ) {
      let aluno = await alunoService.createAluno(
        foto,
        nome,
        email,
        telefone,
        data_nascimento,
        curso
      );

      json.result = `Aluno: ${nome} cadastrado com sucesso! ID:{ ${aluno.insertId} }`;

      response.status(201).json(json);
    } else {
      json.error = "Falha ao criar o aluno: Campos Inválidos!";
      response.status(400).json(json);
    }
  },

  //Método para atualizar um aluno
  updateAluno: async (request, response) => {
    json = { error: "", result: "" }

    let id = request.params.id;

    let foto = request.file.buffer;
    let nome = request.body.nome;
    let email = request.body.email;
    let telefone = request.body.telefone;
    let data_nascimento = request.body.data_nascimento;

    if (nome != "" && email != "" && telefone != "" && data_nascimento != "") {
      await alunoService.updateAluno(
        id,
        foto,
        nome,
        email,
        telefone,
        data_nascimento
      );

      json.result = `Aluno: ${nome} atualizado com sucesso! ID:{ ${id} }`;

      response.status(200).json(json);
    } else {
      json.error = "Falha ao criar o aluno: Campos Inválidos!";
      response.status(400).json(json);
    }
  },
};
