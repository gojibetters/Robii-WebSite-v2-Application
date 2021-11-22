import { readdirSync } from 'fs';

export function recursiveArchivesImport(folder, format) {
  const listDirectories = [];

  function searchDirectories(search) {
    const folderPath = `${search}`;

    const allFiles = readdirSync(folderPath, { withFileTypes: true });
    allFiles.forEach(async (file) => {
      if (file.isDirectory()) {
        searchDirectories(`${folderPath}/${file.name}`);

        return;
      }
      if (!file.name.endsWith(format)) return;

      try {
        const regex = /\.\/([\w\d]+)\//;
        listDirectories.push(`${folderPath.replace(regex, '')}/${file.name}`);
      } catch (e) {
        console.error(e);
      }
    });
  }
  searchDirectories(folder);

  return listDirectories;
}
