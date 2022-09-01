#!/usr/bin/env node
import introduction,
{
  question,
  answer,
  randomInteger,
  wrongAnswerWarning,
  winAnnouncement,
} from '../src/index.js';

const parityCheck = () => {
  const userName = introduction('Answer "yes" if the number is even, otherwise answer "no".');

  const isEven = (number) => {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < 3; i += 1) {
    const randomNum = randomInteger();
    question(randomNum);
    const userAnswer = answer();

    const correctAnswer = ((userAnswer === 'yes') && (isEven(randomNum) === true)) || ((userAnswer === 'no') && (isEven(randomNum) === false));
    const oppositeAnswer = isEven(randomNum) ? 'yes' : 'no';

    if (correctAnswer === false) {
      wrongAnswerWarning(userAnswer, oppositeAnswer, userName);
      break;
    }
    console.log('Correct!');

    winAnnouncement(i, 2, userName);
  }
};
parityCheck();
export default parityCheck;
