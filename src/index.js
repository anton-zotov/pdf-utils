const getParam = require('./params').getParam;
let actions = {};
actions.rotate = require('./actions/rotate');
actions.docx = require('./actions/convert-docx');

let help_message = `Usage: node start action param1 param2...
action rotate:
node start rotate source dest direction
Directions: east, west, south, north.

action convert-docx:
node start docx source dest`;

let mode = getParam('mode', 2, {exit_on_error:false});
if (actions[mode]) {
	actions[mode]();
} else {
	if (mode) {
		console.log('no such mode ' + mode);
	}
	console.log(help_message);
}