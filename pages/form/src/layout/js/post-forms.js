/* eslint-disable no-alert */

const contactForm = document.querySelector('.contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

// quando o submit é acionado
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  // Mandar um arquivo JSON através de um arquivo XML
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/contact');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = () => {
    console.log(xhr.responseText);
    if (xhr.responseText === 'success') {
      alert('Email enviado com sucesso.');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert(`Oops! Email não enviado.\nStatus: ${xhr.status}; ${xhr.statusText}`);
    }
  };

  // mesmo que a condição acima não retorne 'success', o email é enviado
  xhr.send(JSON.stringify(formData));
});
