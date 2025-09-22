const express = require("express");
const fs = require("fs");

const router = express.Router();

const getCadastros = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const saveCadastros = (alunos) => {
  fs.writeFileSync(dataPath, JSON.stringify(alunos, null, 2));
};

router.post("/", (req, res) => {
  const { nome, email, senha} = req.body;

  if (!nome || !email || !senha ) {
    return res.status(400).json({ msg: "Preencha todos os campos!" });
  }

  const cadastros = getCadastros();

  const novoCadastro = {
    id: Date.now(),
    nome,
    email,
    senha,
  };

  cadastros.push(novoCadastro);
  saveCadastros(cadastros);

  res.status(201).json(novoCadastro);
});

router.get("/", (req, res) => {
  res.json(getCadastros());
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const cadastros = getCadastros();
  const index = cadastros.findIndex((a) => a.id == id);

  if (index === -1) {
    return res.status(404).json({ msg: "Aluno não encontrado!" });
  }

  cadastros[index] = { ...cadastros[index], ...req.body };
  saveCadastros(cadastros);

  res.json(cadastros[index]);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let cadastros = getCadastros();
  const novoArray = cadastros.filter((a) => a.id != id);

  if (cadastros.length === novoArray.length) {
    return res.status(404).json({ msg: "Cadastro não encontrado!" });
  }

  saveCadastros(novoArray);
  res.json({ msg: "Cadastro removido com sucesso!" });
});

module.exports = router;