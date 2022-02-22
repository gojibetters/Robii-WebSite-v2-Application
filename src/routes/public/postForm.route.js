import { postForm } from '../../../utils/invite-post-form/post-form.js';

export default {
  method: 'post',
  route: '/form',
  run: async (req, res) => {
    postForm(req, res);
  },
};
