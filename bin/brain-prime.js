#!/usr/bin/env node
import introduction,
{
  question,
  answer,
  randomInteger,
  wrongAnswerWarning,
  winAnnouncement,
} from '../src/index.js';

const brainPrime = () => {
  const userName = introduction('Answer "yes" if given number is prime. Otherwise answer "no".');

  const isPrime = (num) => {
    let deliver = num - 1;

    while (deliver > 1) {
      if (num % deliver === 0) {
        return false;
      }
      deliver -= 1;
    }
    return true;
  };

  for (let i = 0; i < 3; i += 1) {
    const currentNumber = randomInteger();
    const correctAnswer = isPrime(currentNumber) ? 'yes' : 'no';

    question(currentNumber);
    const userAnswer = answer();

    if (userAnswer !== correctAnswer) {
      wrongAnswerWarning(userAnswer, correctAnswer, userName);
      break;
    }

    console.log('Correct!');

    winAnnouncement(i, 2, userName);
  }
};
brainPrime();
