const contactForm = document.querySelector('.inputs');
const username = document.getElementById('username');
const password = document.getElementById('password');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    username: username.value,
    password: password.value,
  };

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then(async (data) => {
    if (data.ok) {
      const user = await data.json();
      window.location.replace('../adm');
    } else if (data.status === 401) {
      alert(
        `Oops! Senha incorreta Tente novamente!\nStatus: ${data.status}; ${data.statusText}`
      );
    } else {
      alert(
        `Oops! Não encontrei seu email. Se cadastre!\nStatus: ${data.status}; ${data.statusText}`
      );
    }
  });
});
