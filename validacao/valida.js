const validaNome = (nome) => {
  const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
  const isValid = nome.length >= 2 && regexNome.test(nome);
  return isValid;
}

const validaEmail = (email) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = regexEmail.test(email);
  return isValid;
}

const validaTelefone = (telefone) => {
  const regexTelefone = /^\(\d{2}\)\s9\d{4}-\d{4}$/;
  const isValid = regexTelefone.test(telefone);
}

export const validaUsuario = (nome, email, telefone) => {
  const nomeValido = validaNome(nome);
  const nomeEmail = validaEmail(email);
  const nomeTelefone = validaTelefone(telefone);

  if (!nomeValido) {
    return { status: false, mensagem: 'Nome inválido'};
  } 

  if (!nomeEmail) {
    return { status: false, mensagem: 'Email inválido'};
  } 

  if (!nomeTelefone) {
    return { status: false, mensagem: 'Telefone inválido'};
  }

  return { status: true, mensagem: ''};
}