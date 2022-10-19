import { recursiveArchivesImport } from '../../../utils/handlers-imports/handler-archives.js';

export default {
  method: 'get',
  route: '/adm',
  run: async (req, res) => {
    const cssDirectoriesRender = recursiveArchivesImport(
      './src/pages/adm/src/layout/css',
      '.css'
    );
    const htmlDirectoriesRender = recursiveArchivesImport(
      './src/pages/adm/src/layout/html',
      '.ejs'
    );
    const javascriptDirectoriesRender = recursiveArchivesImport(
      './src/pages/adm/src/layout/js',
      '.js'
    );

    res.render('../../pages/adm/adm_index', {
      cssDirectoriesRender,
      htmlDirectoriesRender,
      javascriptDirectoriesRender,
    });
  },
};
