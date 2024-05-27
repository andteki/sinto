
const defaultHtmlContent = require('../htmlcss/genHtml');

const {
    createFile
  } = require('../tools/tools');

const createIndexHtmlCssFile = () => {
    const dir = process.cwd();
    const path = `${dir}/index.html`;
    createFile(path, defaultHtmlContent);

    const cssPath = `${dir}/style.css`;
    createFile(cssPath, '');
}

module.exports.createIndexHtmlCssFile = createIndexHtmlCssFile
