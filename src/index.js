import readlineSync from 'readline-sync';

const startBrainGames = (description, generateRound) => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!\n${description}`);
	const roundCount = 3;

	for (let i = 0; i < roundCount; i++) {
		const [question, correctAnswer] = generateRound();
		console.log(`Question: ${question}`);
		const userAnswer = readlineSync.question('Your answer: ');
		if (userAnswer !== correctAnswer) {
			console.log(
				`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
			);
			console.log(`Let's try again, ${name}!`);
			return;
		}
		console.log('Correct!');
	}
	console.log(`Congratulations, ${name}!`);
};

export default startBrainGames;
