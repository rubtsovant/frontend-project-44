import getRandomNumber from '../utils.js';
import startBrainGames from '../index.js';

const description = 'What is the result of the expression?';
const getCalc = (a, b, sign) => {
  let result = 0;
  if (sign === '+') result = a + b;
  if (sign === '-') result = a - b;
  if (sign === '*') result = a * b;
  return result.toString();
};

const brainCalcGame = () => {
  const signArray = ['+', '-', '*'];
  const minValue = 1;
  const maxValue = 25;
  const a = getRandomNumber(minValue, maxValue);
  const b = getRandomNumber(minValue, maxValue);
  const sign = signArray[getRandomNumber(0, signArray.length - 1)];
  const question = `${a} ${sign} ${b}`;
  const answer = getCalc(a, b, sign);
  return [question, answer];
};

export default () => {
  startBrainGames(description, brainCalcGame);
};
