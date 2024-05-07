import { getName } from '../src/cli.js';
import {
	random,
	answerRequest,
	checkingAnswer,
	checkedFinish,
	getPrimeNumber,
	getTaskDescription,
} from '../src/index.js';

const brainPrimeGame = () => {
	const name = getName();
	console.log(getTaskDescription('prime'));
	let correctAnswers = 0;
	while (true) {
		const minValue = 1;
		const maxValue = 100;
		const expression = random(minValue, maxValue);
		const userAnswer = answerRequest(expression);
		const correctAnswer = getPrimeNumber(expression);
		const checked = checkingAnswer(correctAnswer, userAnswer, name);
		checked ? (correctAnswers += 1) : (correctAnswers = 0);
		if (checkedFinish(correctAnswers, name) === true) {
			break;
		}
	}
};

export { brainPrimeGame };
