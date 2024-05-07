import { getName } from '../src/cli.js';
import {
	random,
	answerRequest,
	checkingAnswer,
	checkedFinish,
	getCalc,
	getTaskDescription,
} from '../src/index.js';

const brainCalcGame = () => {
	const name = getName();
	console.log(getTaskDescription('calc'));
	let correctAnswers = 0;
	while (true) {
		const signArray = ['+', '-', '*'];
		const minValue = 1;
		const maxValue = 25;
		const a = random(minValue, maxValue);
		const b = random(minValue, maxValue);
		const sign = signArray[random(0, signArray.length - 1)];
		const expression = `${a} ${sign} ${b}`;
		const userAnswer = answerRequest(expression);
		const correctAnswer = getCalc(a, b, sign);
		const checked = checkingAnswer(correctAnswer, userAnswer, name);
		checked ? (correctAnswers += 1) : (correctAnswers = 0);
		if (checkedFinish(correctAnswers, name) === true) {
			break;
		}
	}
};

export { brainCalcGame };
