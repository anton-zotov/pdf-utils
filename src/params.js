function exit(message) {
	if (message) {
		console.log(message);
	}
	process.exit();
}
module.exports.exit = exit;

function addParam(params, name, n, help = null) {
	params[name] = getParam(name, n, { help });
}
module.exports.addParam = addParam;

function getParam(name, n, { exit_on_error = true, help } = { exit_on_error: true }) {
	if (!process.argv[n]) {
		console.log(`no ${name}`);
		if (help) {
			console.log(help);
		}
		if (exit_on_error) {
			exit();
		}
	}
	return process.argv[n];
}
module.exports.getParam = getParam;

function getDir(d, help = null) {
	const dirs = ['east', 'west', 'south', 'north'];
	if (!dirs.includes(d)) {
		if (help) {
			console.log(help);
		}
		return exit('no such direction: ' + d);
	}
	return d;
}
module.exports.getDir = getDir;

const formatFn = (fn, ext = 'pdf') => fn.endsWith(ext) ? fn : `${fn}.${ext}`;
module.exports.formatFn = formatFn;

module.exports.getParams = function (paramsMap) {
	let params = {};
	Object.entries(paramsMap).forEach(([name, val]) => {
			addParam(params, name, val.pos, val.help);
			params[name] = val.type(params[name], val.help);
	});
	return params;
}