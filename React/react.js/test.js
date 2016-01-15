var extend = function (obj, extension) {
	if (typeof obj === "object" && typeof extension === "object") {
		for (var i in extension) {
			if (extension.hasOwnProperty(i) && !obj.hasOwnProperty(i)) {
				obj[i] = extension[i];
			}
		}
	return obj;
	}
}
