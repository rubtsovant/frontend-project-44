import { getName } from '../src/cli.js';
import {
	random,
	questionRequest,
	answerRequest,
	checkingAnswer,
	checkedFinish,
	getCorrectAnswer,
} from '../src/index.js';

const brainCalcGame = () => {
	const name = getName();
	console.log(`What is the result of the expression?`);
	let correctAnswers = 0;
	while (true) {
		const signArray = ['+', '-', '*'];
		const a = random(1, 25);
		const b = random(1, 25);
		const sign = signArray[random(0, 2)];
		const expression = `${a} ${sign} ${b}`;
		console.log(questionRequest(expression));
		const userAnswer = answerRequest();
		const correctAnswer = getCorrectAnswer('calc', expression);
		const checked = checkingAnswer(correctAnswer, userAnswer);
		checked ? (correctAnswers += 1) : (correctAnswers = 0);
		if (checkedFinish(correctAnswers, name) === true) {
			break;
		}
	}
};

export { brainCalcGame };
