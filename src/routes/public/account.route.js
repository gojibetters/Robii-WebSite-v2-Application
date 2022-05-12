import { recursiveArchivesImport } from '../../../utils/handlers-imports/handler-archives.js';

export default {
  method: 'get',
  route: '/account',
  run: async (req, res) => {
    const cssDirectoriesRender = recursiveArchivesImport(
      './src/pages/account/src/layout/css',
      '.css'
    );

    const htmlDirectoriesRender = recursiveArchivesImport(
      './src/pages/account/src/layout/html',
      '.ejs'
    );
    const javascriptDirectoriesRender = recursiveArchivesImport(
      './src/pages/account/src/layout/js',
      '.js'
    );

    res.render('../../pages/account/account.ejs', {
      cssDirectoriesRender,
      htmlDirectoriesRender,
      javascriptDirectoriesRender,
    });
  },
};
