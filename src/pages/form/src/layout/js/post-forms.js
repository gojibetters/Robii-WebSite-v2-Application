const contactForm = document.querySelector('.contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const datebirth = document.getElementById('datebirth');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
    datebirth: datebirth.value,
  };

  fetch('/form', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then((response) => {
    if (response.ok) {
      name.value = '';
      email.value = '';
      message.value = '';
      datebirth.value = '';
      window.location.replace('../thanks');
    } else {
      alert(
        `Oops! Email não enviado.\nStatus: ${xhr.status}; ${xhr.statusText}`
      );
    }
  });
});
