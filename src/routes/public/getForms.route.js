import { getForms } from '../../model/getForms.js';

export default {
  method: 'get',
  route: '/getforms',
  run: async (req, res) => {
    getForms(req, res);
  },
};
