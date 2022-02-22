import nodemailer from 'nodemailer';

export function postForm(req, res) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // corpo do email
  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_USER,
    subject: `De ${req.body.email} : ${req.body.subject}`,
    text: `Nome: ${req.body.name}\nAssunto: ${req.body.subject}\n\n${req.body.message}`,
  };

  // mandar o email
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      res.send('success');
    }
  });
}
