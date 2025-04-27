import pool from "./conexao.js"

export const cadastrar = async (nome, email, telefone) => {
  const conexao = await pool.getConnection();

  const cadastro = await conexao.query("INSERT INTO leads (nome, email, telefone) VALUES (?, ?, ?)", [nome, email, telefone]);

  conexao.release();

  return cadastro;
} 