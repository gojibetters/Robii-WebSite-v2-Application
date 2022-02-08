import express from 'express';

import { recursiveArchivesImport } from '../utils/handlers-imports/handler-archives.js';
import { postForm } from '../utils/invite-post-form/post-form.js';

const router = express.Router();

router.get('/home', (req, res) => {
  const cssDirectoriesRender = recursiveArchivesImport(
    './pages/landing-page/src/layout/css',
    '.css'
  );
  const htmlDirectoriesRender = recursiveArchivesImport(
    './pages/landing-page/src/layout/html',
    '.ejs'
  );
  const javascriptDirectoriesRender = recursiveArchivesImport(
    './pages/landing-page/src/layout/js',
    '.js'
  );

  res.render('../pages/landing-page/index-landing-page', {
    cssDirectoriesRender,
    htmlDirectoriesRender,
    javascriptDirectoriesRender,
  });
});

router.get('/contact', (req, res) => {
  const cssDirectoriesRender = recursiveArchivesImport(
    './pages/form/src/layout/css',
    '.css'
  );
  const htmlDirectoriesRender = recursiveArchivesImport(
    './pages/form/src/layout/html',
    '.ejs'
  );
  const javascriptDirectoriesRender = recursiveArchivesImport(
    './pages/form/src/layout/js',
    '.js'
  );

  res.render('../pages/form/contact-form', {
    cssDirectoriesRender,
    htmlDirectoriesRender,
    javascriptDirectoriesRender,
  });
});
router.post('/contact', (req, res) => {
  postForm(req, res);
});
export { router };
