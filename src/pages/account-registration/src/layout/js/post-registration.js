const contactForm = document.querySelector('.inputs');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const telefone = document.getElementById('telephone');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (password.value !== passwordConfirm.value) {
    window.alert('As senhas devem ser a mesma!');

    password.value = '';
    passwordConfirm.value = '';
    return;
  }

  const formData = {
    name: name.value,
    lastname: lastname.value,
    email: email.value,
    password: password.value,
    telefone: telefone.value,
  };

  fetch('/registration', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then((response) => {
    if (response.ok) {
      name.value = '';
      email.value = '';
      lastname.value = '';
      password.value = '';
      passwordConfirm.value = '';
      telefone.value = '';
      window.location.replace('../login');
    } else {
      alert(
        `Oops! Não Consegui te registrar. Tente novamente!\nStatus: ${response.status}; ${response.statusText}`
      );
    }
  });
});
