import { postForm } from '../../../utils/invite-post-form/post-form.js';

export default {
  method: 'post',
  route: '/contact',
  run: async (req, res) => {
    postForm(req, res);
  },
};
