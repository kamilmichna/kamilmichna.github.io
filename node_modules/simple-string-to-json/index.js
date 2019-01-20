const objectify = str => {
	let newStr = str;
	if (newStr.split('{').length > 1) {
		// This could be an object
		newStr = newStr.substring(newStr.indexOf('{') + 1).slice(0, -1);
		return `{"${newStr.substring(0, newStr.indexOf(':')).trim()}":${objectify(
			newStr.substring(newStr.indexOf(':') + 1)
		)}}`;
	}

	return newStr;
};

module.exports = str => {
	const newStr = str
		.substring(str.indexOf('{') + 1)
		.replace(/\'|`/g, '"')
		.slice(0, -1)
		.split(',')
		.map(a => [a.substring(0, a.indexOf(':')), a.substring(a.indexOf(':') + 1)])
		.map(a => [`"${a[0].trim()}"`, objectify(a[1].trim())])
		.map(a => a.join(':'))
		.join(',');

	return `{${newStr}}`;
};
