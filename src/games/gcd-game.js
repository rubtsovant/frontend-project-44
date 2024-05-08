import getRandomNumber from '../get-random.js';
import startBrainGames from '../index.js';

const description = `Find the greatest common divisor of given numbers.`;
const getNod = (a, b) => {
  if (b !== 0) {
    const k = a % b;
    return getNod(b, k);
  }
  return a.toString();
};

const brainGcdGame = () => {
  const minValue = 1;
  const maxValue = 100;
  const a = getRandomNumber(minValue, maxValue);
  const b = getRandomNumber(minValue, maxValue);
  const question = `${a} ${b}`;
  const answer = getNod(a, b);
  return [question, answer];
};

export default () => {
  startBrainGames(description, brainGcdGame);
};