import getRandomNumber from '../utils.js';
import startBrainGames from '../index.js';

const description = 'What number is missing in the progression?';
const getProgression = (min, max, step) => {
  const result = [];
  const start = getRandomNumber(0, 100);
  const length = getRandomNumber(min, max);
  const end = start + step * length;
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};

const brainProgressionGame = () => {
  const minValueStep = 2;
  const maxValueStep = 6;
  const minLength = 5;
  const maxLength = 10;
  const step = getRandomNumber(minValueStep, maxValueStep);
  const progression = getProgression(minLength, maxLength, step);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  startBrainGames(description, brainProgressionGame);
};
