import { recursiveArchivesImport } from '../../../utils/handlers-imports/handler-archives.js';

export default {
  method: 'get',
  route: '/home',
  run: async (req, res) => {
    const cssDirectoriesRender = recursiveArchivesImport(
      './src/pages/landing-page/src/layout/css',
      '.css'
    );
    const htmlDirectoriesRender = recursiveArchivesImport(
      './src/pages/landing-page/src/layout/html',
      '.ejs'
    );
    const javascriptDirectoriesRender = recursiveArchivesImport(
      './src/pages/landing-page/src/layout/js',
      '.js'
    );

    res.render('../../pages/landing-page/index-landing-page', {
      cssDirectoriesRender,
      htmlDirectoriesRender,
      javascriptDirectoriesRender,
    });
  },
};
