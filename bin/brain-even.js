#!/usr/bin/env node
import readlineSync from 'readline-sync';

const parityCheck = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomInteger = () => {
    const randomMunber = Math.random();
    const integer = randomMunber.toFixed(2) * 100;
    return integer;
  };

  const isEven = (number) => {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < 3; i += 1) {
    const randomNum = randomInteger();
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = ((userAnswer === 'yes') && (isEven(randomNum) === true)) || ((userAnswer === 'no') && (isEven(randomNum) === false));

    if (correctAnswer === false) {
      const oppositeAnswer = userAnswer === 'yes' ? 'no' : 'yes';

      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${oppositeAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}`);
    }
  }
};
parityCheck();
export default parityCheck;
