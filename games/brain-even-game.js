import { getName } from '../src/cli.js';
import {
	random,
	questionRequest,
	answerRequest,
	checkingAnswer,
	checkedFinish,
	getCorrectAnswer,
} from '../src/index.js';

const brainEvenGame = () => {
	const name = getName();
	console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
	let correctAnswers = 0;
	while (true) {
		const expression = random(1, 100);
		console.log(questionRequest(expression));
		const userAnswer = answerRequest();
		const correctAnswer = getCorrectAnswer('even', expression);
		const checked = checkingAnswer(correctAnswer, userAnswer);
		checked ? (correctAnswers += 1) : (correctAnswers = 0);
		if (checkedFinish(correctAnswers, name) === true) {
			break;
		}
	}
};

export { brainEvenGame };
