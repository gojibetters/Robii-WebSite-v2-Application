const contactForm = document.querySelector('.contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  fetch('/form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then((response) => {
    if (response.ok) {
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
      window.location.replace('../thanks');
    } else {
      alert(
        `Oops! Email não enviado.\nStatus: ${xhr.status}; ${xhr.statusText}`
      );
    }
  });
});
