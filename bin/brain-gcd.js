#!/usr/bin/env node
import introduction,
{
  question,
  answer,
  randomInteger,
  wrongAnswerWarning,
  winAnnouncement,
} from '../src/index.js';

const gcd = () => {
  const userName = introduction('Find the greatest common divisor of given numbers.');

  const checkup = (number1, number2) => {
    const biggerNumber = number1 > number2 ? number1 : number2;
    const smallerNumber = number1 < number2 ? number1 : number2;
    // let result = null;

    let commonDeliver = smallerNumber;

    do {
      const biggerNumberDeliver = (biggerNumber % commonDeliver === 0);
      const smallerNumberDeliver = (smallerNumber % commonDeliver === 0);
      const commonDeliverCondition = (biggerNumberDeliver && smallerNumberDeliver);

      if (commonDeliverCondition || (commonDeliver === 1)) {
        // result = deliver;
        // мб можно убрать второе условие????
        break;
      }
      commonDeliver -= 1;
    } while (commonDeliver >= 1);

    return commonDeliver;
  };

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomInteger();
    const secondNumber = randomInteger();

    question(`${firstNumber} ${secondNumber}`);

    const userAnswer = answer();
    const correctAnswer = checkup(firstNumber, secondNumber);

    if (+userAnswer !== +correctAnswer) {
      wrongAnswerWarning(userAnswer, correctAnswer, userName);
      break;
    }

    console.log('Correct!');
    winAnnouncement(i, 2, userName);
  }
};
gcd();
