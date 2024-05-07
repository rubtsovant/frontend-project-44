import { getName } from '../src/cli.js';
import {
	random,
	answerRequest,
	checkingAnswer,
	checkedFinish,
	getProgression,
	getTaskDescription,
} from '../src/index.js';

const brainProgressionGame = () => {
	const name = getName();
	console.log(getTaskDescription('progression'));
	let correctAnswers = 0;
	while (true) {
		const minLength = 5;
		const maxLength = 10;
		const step = random(2, 6);
		const progression = getProgression(minLength, maxLength, step);
		const randomIndex = random(0, progression.length - 1);
		const correctAnswer = progression[randomIndex].toString();
		progression[randomIndex] = '..';
		const expression = progression.join(' ');
		const userAnswer = answerRequest(expression);
		const checked = checkingAnswer(correctAnswer, userAnswer, name);
		checked ? (correctAnswers += 1) : (correctAnswers = 0);
		if (checkedFinish(correctAnswers, name) === true) {
			break;
		}
	}
};

export { brainProgressionGame };
