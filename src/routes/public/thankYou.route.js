import { recursiveArchivesImport } from '../../../utils/handlers-imports/handler-archives.js';

export default {
  method: 'get',
  route: '/thanks',
  run: async (req, res) => {
    const cssDirectoriesRender = recursiveArchivesImport(
      './src/pages/thank-you/src/layout/css',
      '.css'
    );

    const htmlDirectoriesRender = recursiveArchivesImport(
      './src/pages/thank-you/src/layout/html',
      '.ejs'
    );
    const javascriptDirectoriesRender = recursiveArchivesImport(
      './src/pages/thank-you/src/layout/js',
      '.js'
    );

    res.render('../../pages/thank-you/thank-you.ejs', {
      cssDirectoriesRender,
      htmlDirectoriesRender,
      javascriptDirectoriesRender,
    });
  },
};
