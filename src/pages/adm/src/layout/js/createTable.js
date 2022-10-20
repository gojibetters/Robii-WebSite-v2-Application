function deleteFormsFromDatabase(email, duvida) {
  fetch('/deleteForms', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      duvida,
    }),
  }).then((response) => {
    if (response.status === 200) {
      location.reload();
    }
  });
}

function criarTabela(conteudo) {
  const tabela = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const thd = function (i) {
    return i == 0 ? 'th' : 'td';
  };
  for (let i = 0; i < conteudo.length; i++) {
    const tr = document.createElement('tr');
    for (let o = 0; o < conteudo[i].length; o++) {
      const t = document.createElement(thd(i));
      const texto = document.createTextNode(conteudo[i][o]);

      t.appendChild(texto);
      tr.appendChild(t);
      if (o + 1 === conteudo[i].length && i !== 0) {
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.toggle('buttonDelete');
        buttonDelete.onclick = () =>
          deleteFormsFromDatabase(conteudo[i][2], conteudo[i][3]);

        tr.appendChild(buttonDelete);
      }
    }
    i == 0 ? thead.appendChild(tr) : tbody.appendChild(tr);
  }

  tabela.appendChild(thead);
  tabela.appendChild(tbody);
  return tabela;
}

fetch('/getForms', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}).then(async (data) => {
  const json = await data.json();

  const list = [
    ['NOME_USUARIO', 'DATA_NASCIMENTO', 'EMAIL', 'ASSUNTO', 'DELETE'],
  ];

  for (let i = 0; i < json.length; i++) {
    const element = json[i];

    list.push([
      element.NOME_USUARIO,
      new Date(element.DATA_NASCIMENTO).toUTCString(),
      element.EMAIL,
      element.DUVIDA,
    ]);
  }

  document.getElementById('tabela').appendChild(criarTabela(list));
});
