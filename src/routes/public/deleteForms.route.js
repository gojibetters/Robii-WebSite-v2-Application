import { deleteForms } from '../../model/deleteForms.js';

export default {
  method: 'post',
  route: '/deleteForms',
  run: async (req, res) => {
    deleteForms(req, res);
  },
};
