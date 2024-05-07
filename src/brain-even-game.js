import readlineSync from 'readline-sync';
import { getName } from './cli.js';
import random from './random.js';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}`);

const brainEven = () => {
	console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
	let correctAnswer = 0;

	while (true) {
		const valueQuestion = random(1, 100);
		console.log(`Question: ${valueQuestion}`);
		const answer = readlineSync.question('Your answer: ');
		switch (answer) {
			case 'yes': {
				if (valueQuestion % 2 === 0) {
					correctAnswer += 1;
					console.log('Correct!');
				} else {
					correctAnswer = 0;
					console.log('Wrong!');
				}
				break;
			}
			case 'no': {
				if (valueQuestion % 2 !== 0) {
					correctAnswer += 1;
					console.log('Correct!');
				} else {
					correctAnswer = 0;
					console.log('Wrong!');
				}
				break;
			}
			default: {
				correctAnswer = 0;
				console.log('Wrong!');
				break;
			}
		}
		if (correctAnswer === 3) {
			console.log(`Congratulations, ${name}!`);
			break;
		}
	}
};

export { brainEven };
