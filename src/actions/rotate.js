const fs = require('fs');
const Rotate = require('commonpdf').Rotate;
const pm = require("../params");
const types = require("../param-types");

let paramsMap = {
	source: {
		pos: 3,
		type: types.fnPdf
	},
	dest: {
		pos: 4,
		type: types.fnPdf
	},
	direction: {
		pos: 5,
		type: types.dir,	
		help: 'Directions: east, west, south, north'
	}
};

module.exports = function rotate() {
	let params = pm.getParams(paramsMap);
	if (!fs.existsSync(params.source)) {
		pm.exit('No such file ' + params.source);
	}
	new Rotate(params.source, 1, { direction: params.direction }, `./${params.dest}`)
		.write()
		.then(outfilePath => {
			console.log('done: ' + outfilePath);
		})
		.catch(err => console.error(err))
}