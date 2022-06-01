import { getLoginUser } from '../../model/getUser.js';

export default {
  method: 'get',
  route: '/loginUser/:email/:password',
  run: async (req, res) => {
    getLoginUser(req, res);
  },
};
