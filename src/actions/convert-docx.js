var docxConverter = require('docx-pdf');
var fs = require("fs")
const pm = require("../params");
const types = require("../param-types");

let paramsMap = {
	doc: {
		pos: 3,
		type: types.fnDocx
	},
	dest: {
		pos: 4,
		type: types.fnPdf
	},
};

module.exports = function convertDoc() {
	let params = pm.getParams(paramsMap);
	try {
		var wordBuffer = fs.readFileSync(params.doc);		
	} catch (error) {
		return console.error(error.message);
	}
	docxConverter(params.doc, params.dest, function (err, res) {
		if (err) {
			console.log(err);
		}
		console.log('done: ' + res);
	});
}