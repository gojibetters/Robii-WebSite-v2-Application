const contactForm = document.querySelector('.inputs');
const email = document.getElementById('email');
const password = document.getElementById('password');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    email: email.value,
    password: password.value,
  };

  const url = `/loginUser/${formData.email}/${formData.password}`;

  fetch(url).then(async (data) => {
    if (data.ok) {
      const user = await data.json();
      alert(JSON.stringify(user));
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
