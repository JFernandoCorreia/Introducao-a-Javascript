function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [1, 3, 3, 30, 30, 40, 5, 223, 2049, 3034, 5, 90, 90];

console.log(uniqueElements(arr));