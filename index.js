import express from 'express';
import cors from 'cors';
import { cadastrar } from './servicos/cadastro_leads.js';
import { validaUsuario } from './validacao/valida.js';

const app = new express();

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const telefone = req.body.telefone;

  const usuarioValido = validaUsuario(nome, email, telefone);

  if(usuarioValido.status) {
  const cadastro = await cadastrar(nome, email, telefone);
  res.status(204).end();
  } else {
  res.status(400).send({ mensagem: usuarioValido.mensagem })
  }
});

app.listen(8080, () => {
  const data = new Date()

  console.log(`Servidor no ar em ${data}`);
})