var babel = require('babel-core');

var babelOptions;

exports.onStart = function onStart(event) {
	if (typeof event.data.option !== 'object') {
		throw new Error(`Please supply an "option" object in the configuration of esdoc-babel-plugin.`);
	}
	babelOptions = event.data.option;
};

exports.onHandleCode = function onHandleCode(event) {
	try {
		var result      = babel.transform(event.data.code, babelOptions);
		event.data.code = result.code;
	} catch (error) {
		console.error(error);
	}
};
