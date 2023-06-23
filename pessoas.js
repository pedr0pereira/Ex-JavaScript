let pessoas = [];

function adicionarPessoa() {
  const nome = prompt('Digite o nome:');
  const idade = parseInt(prompt('Digite a idade:'));
  const sexo = prompt('Digite o sexo (M/F):');

  const pessoa = {
    nome: nome,
    idade: idade,
    sexo: sexo,
  };

  pessoas.push(pessoa);
}
function mostrarQuantidadePessoas() {
  const total = pessoas.length;
  let masculino = 0;
  let feminino = 0;

  for (const pessoa of pessoas) {
    if (pessoa.sexo === 'M' || pessoa.sexo === 'm') {
      masculino++;
    } else if (pessoa.sexo === 'F' || pessoa.sexo === 'f') {
      feminino++;
    }
  }

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Total de pessoas: ${total}<br> Masculino: ${masculino}<br> Feminino: ${feminino}`;
}

function listarPessoas() {
  let lista = '';

  for (const pessoa of pessoas) {
    lista += `<p>Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Sexo: ${pessoa.sexo}</p>`;
  }

  const listaPessoas = document.getElementById('listaPessoas');
  listaPessoas.innerHTML = lista;
}


