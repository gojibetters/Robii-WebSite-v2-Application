import { recursiveArchivesImport } from '../../../utils/handlers-imports/handler-archives.js';

export default {
  method: 'get',
  route: '/form',
  run: async (req, res) => {
    const cssDirectoriesRender = recursiveArchivesImport(
      './src/pages/form/src/layout/css',
      '.css'
    );
    const htmlDirectoriesRender = recursiveArchivesImport(
      './src/pages/form/src/layout/html',
      '.ejs'
    );
    const javascriptDirectoriesRender = recursiveArchivesImport(
      './src/pages/form/src/layout/js',
      '.js'
    );

    res.render('../../pages/form/contact-form', {
      cssDirectoriesRender,
      htmlDirectoriesRender,
      javascriptDirectoriesRender,
    });
  },
};
