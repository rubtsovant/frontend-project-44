import { getName } from '../src/cli.js';
import {
	random,
	answerRequest,
	checkingAnswer,
	checkedFinish,
	getEven,
	getTaskDescription,
} from '../src/index.js';

const brainEvenGame = () => {
	const name = getName();
	console.log(getTaskDescription('even'));
	let correctAnswers = 0;
	while (true) {
		const minValue = 1;
		const maxValue = 25;
		const expression = random(minValue, maxValue);
		const userAnswer = answerRequest(expression);
		const correctAnswer = getEven(expression);
		const checked = checkingAnswer(correctAnswer, userAnswer, name);
		checked ? (correctAnswers += 1) : (correctAnswers = 0);
		if (checkedFinish(correctAnswers, name) === true) {
			break;
		}
	}
};

export { brainEvenGame };
