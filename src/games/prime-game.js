import getRandomNumber from '../utils.js';
import startBrainGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getPrimeNumber = (value) => {
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) return 'no';
  }
  return 'yes';
};

const brainPrimeGame = () => {
  const minValue = 1;
  const maxValue = 100;
  const question = getRandomNumber(minValue, maxValue);
  const answer = getPrimeNumber(question);
  return [question, answer];
};

export default () => {
  startBrainGames(description, brainPrimeGame);
};
