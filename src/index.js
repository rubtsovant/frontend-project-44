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

const getCorrectAnswer = (game, expression) => {
	if (game === 'even') {
		if (expression % 2 === 0) return 'yes';
		else return 'no';
	}
	if (game === 'calc') {
		const [a, sign, b] = expression.split(' ');
		switch (sign) {
			case '+': {
				return (+a + +b).toString();
			}
			case '-': {
				return (+a - +b).toString();
			}
			case '*': {
				return (+a * +b).toString();
			}
		}
	}
};

const checkingAnswer = (correctAnswer, userAnswer) => {
	if (correctAnswer === userAnswer) {
		console.log('Correct!');
		return true;
	} else {
		console.log(
			`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
		);
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
	getCorrectAnswer,
};
