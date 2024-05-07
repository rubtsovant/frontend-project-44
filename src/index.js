import readlineSync from 'readline-sync';

const random = (min, max) => {
	const rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
};

const answerRequest = expression => {
	console.log(`Question: ${expression}`);
	return readlineSync.question('Your answer: ');
};

const getTaskDescription = game => {
	if (game === 'even')
		return `Answer "yes" if the number is even, otherwise answer "no".`;
	else if (game === 'calc') return `What is the result of the expression?`;
	else if (game === 'gcd')
		return `Find the greatest common divisor of given numbers.`;
	else if (game === 'progression')
		return `What number is missing in the progression?`;
	else if (game === 'prime')
		return `Answer "yes" if given number is prime. Otherwise answer "no".`;
};

const getEven = expression => {
	if (expression % 2 === 0) return 'yes';
	else return 'no';
};

const getCalc = (a, b, sign) => {
	switch (sign) {
		case '+': {
			return (a + b).toString();
		}
		case '-': {
			return (a - b).toString();
		}
		case '*': {
			return (a * b).toString();
		}
	}
};

const getNod = (a, b) => {
	if (b !== 0) {
		const k = a % b;
		return getNod(b, k);
	}
	return a.toString();
};

const getProgression = (min, max, step) => {
	let result = [];
	const start = random(0, 100);
	const length = random(min, max);
	const end = start + step * length;
	for (let i = start; i <= end; i += step) {
		result.push(i);
	}
	return result;
};

const getPrimeNumber = value => {
	for (let i = 2; i < value; i++) {
		if (value % i === 0) return 'no';
	}
	return 'yes';
};

const checkingAnswer = (correctAnswer, userAnswer, name) => {
	if (correctAnswer === userAnswer) {
		console.log('Correct!');
		return true;
	} else {
		console.log(
			`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
		);
		console.log(`Let's try again, ${name}!`);
		return false;
	}
};

const checkedFinish = (correctAnswers, name) => {
	if (correctAnswers === 3) {
		console.log(`Congratulations, ${name}!`);
		return true;
	} else return false;
};

export {
	random,
	getTaskDescription,
	answerRequest,
	getEven,
	getCalc,
	getNod,
	getProgression,
	getPrimeNumber,
	checkingAnswer,
	checkedFinish,
};
