import { registrationUser } from '../../model/registrationUser.js';

export default {
  method: 'post',
  route: '/registration',
  run: async (req, res) => {
    registrationUser(req, res);
  },
};
