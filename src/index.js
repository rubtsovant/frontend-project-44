import readlineSync from 'readline-sync';

const random = (min, max) => {
	const rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
};

const questionRequest = expression => {
	return `Question: ${expression}`;
};

const answerRequest = () => {
	return readlineSync.question('Your answer: ');
};

const getTaskDescription = game => {
	if (game === 'even')
		return `Answer "yes" if the number is even, otherwise answer "no".`;
	else if (game === 'calc') return `What is the result of the expression?`;
	else if (game === 'gcd')
		return `Find the greatest common divisor of given numbers.`;
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

const checkingAnswer = (correctAnswer, userAnswer, name) => {
	if (correctAnswer === userAnswer) {
		console.log('Correct!');
		return true;
	} else {
		console.log(
			`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
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
	questionRequest,
	answerRequest,
	checkingAnswer,
	checkedFinish,
	getEven,
	getCalc,
	getNod,
	getTaskDescription,
};
