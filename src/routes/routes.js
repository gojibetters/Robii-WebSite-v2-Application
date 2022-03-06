import path, { dirname } from 'path';
import { Router } from 'express';
import { readdirSync } from 'fs';

import { fileURLToPath } from 'url';
import rateLimit from '../middlewares/rateLimit.js';

const router = new Router();
const mDirname = dirname(fileURLToPath(import.meta.url));
const routeFolders = ['public'];

async function recursiveArchivesImport(folder, format) {
  async function searchDirectories(search) {
    const folderPath = path.resolve(`${mDirname}/${search}`);

    const allFiles = readdirSync(folderPath, { withFileTypes: true });
    allFiles.forEach(async (file) => {
      if (file.isDirectory()) {
        searchDirectories(`${folderPath}/${file.name}`);
        return;
      }
      const { default: archive } = await import(`./${search}/${file.name}`);
      if (!file.name.endsWith(format)) return;

      try {
        if (archive.method && archive.route) {
          return await router[archive.method](
            archive.route,
            rateLimit,
            archive.run
          );
        }
      } catch (e) {
        console.error(e);
      }
    });
  }
  await searchDirectories(folder);
}
routeFolders.forEach((folder) => recursiveArchivesImport(folder, '.route.js'));

export default router;
