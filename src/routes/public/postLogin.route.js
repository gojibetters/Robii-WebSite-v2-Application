import { getLoginUser } from '../../model/getUser.js';

export default {
  method: 'post',
  route: '/login',
  run: async (req, res) => {
    getLoginUser(req, res);
  },
};
