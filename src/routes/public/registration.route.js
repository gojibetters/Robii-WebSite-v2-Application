import { recursiveArchivesImport } from '../../../utils/handlers-imports/handler-archives.js';

export default {
  method: 'get',
  route: '/registration',
  run: async (req, res) => {
    const cssDirectoriesRender = recursiveArchivesImport(
      './src/pages/account-registration/src/layout/css',
      '.css'
    );
    console.log(cssDirectoriesRender);
    const htmlDirectoriesRender = recursiveArchivesImport(
      './src/pages/account-registration/src/layout/html',
      '.ejs'
    );
    const javascriptDirectoriesRender = recursiveArchivesImport(
      './src/pages/account-registration/src/layout/js',
      '.js'
    );

    res.render('../../pages/account-registration/account-registration.ejs', {
      cssDirectoriesRender,
      htmlDirectoriesRender,
      javascriptDirectoriesRender,
    });
  },
};
