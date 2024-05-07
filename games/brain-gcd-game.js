import { getName } from '../src/cli.js';
import {
	random,
	answerRequest,
	checkingAnswer,
	checkedFinish,
	getNod,
	getTaskDescription,
} from '../src/index.js';

const brainGcdGame = () => {
	const name = getName();
	console.log(getTaskDescription('gcd'));
	let correctAnswers = 0;
	while (true) {
		const minValue = 1;
		const maxValue = 100;
		const a = random(minValue, maxValue);
		const b = random(minValue, maxValue);
		const expression = `${a} ${b}`;
		const userAnswer = answerRequest(expression);
		const correctAnswer = getNod(a, b);
		const checked = checkingAnswer(correctAnswer, userAnswer, name);
		checked ? (correctAnswers += 1) : (correctAnswers = 0);
		if (checkedFinish(correctAnswers, name) === true) {
			break;
		}
	}
};

export { brainGcdGame };
