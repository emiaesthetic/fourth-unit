const isPrime = (number) => {
	const n = number;

	for (let i = 2; i <= n ** 0.5; i++) {
		if (n % i === 0) return false;
	}

	return n > 1;
};

console.log(isPrime(1987));
