const pow = (n, m) => {
	if (m === 1) {
		return n;
	}
	return n * pow(n, m - 1);
};

console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(3, 3));
console.log(pow(10, 4));
console.log(pow(67, 5));
