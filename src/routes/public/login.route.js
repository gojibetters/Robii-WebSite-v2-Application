import { recursiveArchivesImport } from '../../../utils/handlers-imports/handler-archives.js';

export default {
  method: 'get',
  route: '/login',
  run: async (req, res) => {
    const cssDirectoriesRender = recursiveArchivesImport(
      './src/pages/login/src/layout/css',
      '.css'
    );
    console.log(cssDirectoriesRender);
    const htmlDirectoriesRender = recursiveArchivesImport(
      './src/pages/login/src/layout/html',
      '.ejs'
    );
    const javascriptDirectoriesRender = recursiveArchivesImport(
      './src/pages/login/src/layout/js',
      '.js'
    );

    res.render('../../pages/login/login.ejs', {
      cssDirectoriesRender,
      htmlDirectoriesRender,
      javascriptDirectoriesRender,
    });
  },
};
