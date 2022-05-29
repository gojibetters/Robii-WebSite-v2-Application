export default {
  method: 'post',
  route: '/registration',
  run: async (req, res) => {
    console.log(req.body);
    // TODO enviar body para o banco de dados
    res.status(200).send();
  },
};
