export function renderCss(directoriesRender) {
  const file = directoriesRender[0];

  const link = document.createElement('link');
  link.href = `${file}`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.media = 'screen,print';

  document.getElementsByTagName('head')[0].appendChild(link);
  console.log('sucess');
}
