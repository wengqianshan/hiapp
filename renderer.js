// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const app = document.querySelector('#app');
const host = "http://localhost:7000";
const api = `${host}/api/v1/content/5746fb067f1c3739028db86e`;

let index = 0;
function render(gallery) {
  const len = gallery.length;
  if (index >= len) {
    index = 0;
  }
  const imgurl = host + gallery[index].url;
  app.style.backgroundImage = `url(${imgurl})`;
  setTimeout(() => {
    render(gallery);
    index++;
  }, 5000);
};
fetch(api)
  .then(res => res.json())
  .then(res => {
    const {gallery} = res.data;
    render(gallery);
  })
  .catch(e => {
    console.log(e);
  })
