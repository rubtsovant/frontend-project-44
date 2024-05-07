import getRandomNumber from '../get-random.js';
import startBrainGames from '../index.js';

const description = `Answer "yes" if the number is even, otherwise answer "no".`;
const isEven = value => value % 2 === 0;

const brainEvenGame = () => {
	const minValue = 1;
	const maxValue = 30;
	const question = getRandomNumber(minValue, maxValue);
	const answer = isEven(question) ? 'yes' : 'no';
	return [question, answer];
};

export default () => {
	startBrainGames(description, brainEvenGame);
};
