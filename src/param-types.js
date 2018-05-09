const pm = require("./params");

module.exports.fnPdf = val => pm.formatFn(val, 'pdf');
module.exports.fnDocx = val => pm.formatFn(val, 'docx');
module.exports.dir = (val, help) => pm.getDir(val, help);