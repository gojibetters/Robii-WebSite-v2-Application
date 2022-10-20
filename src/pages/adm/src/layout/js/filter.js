function filterDuvida() {
  let input;
  let filter;
  let table;
  let tr;
  let td;
  let i;
  input = document.getElementById('inputDuvida');
  filter = input.value.toUpperCase();
  table = document.getElementById('tabela');
  tr = table.getElementsByTagName('tbody')[0].rows;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
function filterEmail() {
  let input;
  let filter;
  let table;
  let tr;
  let td;
  let i;
  input = document.getElementById('inputEmail');
  filter = input.value.toUpperCase();
  table = document.getElementById('tabela');
  tr = table.getElementsByTagName('tbody')[0].rows;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

function filterNome() {
  let input;
  let filter;
  let table;
  let tr;
  let td;
  let i;
  input = document.getElementById('inputNome');
  filter = input.value.toUpperCase();
  table = document.getElementById('tabela');
  tr = table.getElementsByTagName('tbody')[0].rows;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
function filterData() {
  let input;
  let filter;
  let table;
  let tr;
  let td;
  let i;
  input = document.getElementById('inputData');
  console.log(new Date(input.value).toUTCString());
  filter = new Date(input.value).toUTCString();
  table = document.getElementById('tabela');
  tr = table.getElementsByTagName('tbody')[0].rows;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[1];
    if (td) {
      if (td.innerHTML.indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}
