#!/usr/bin/env node
import introduction,
{
  question,
  answer,
  randomInteger,
  wrongAnswerWarning,
  winAnnouncement,
} from '../src/index.js';

const brainCalc = () => {
  const userName = introduction('What is the result of the expression?');

  const randomSign = () => {
    let sign = '';
    const indicator = randomInteger(1, 1);

    if (indicator < 3) {
      sign = '+';
    } else if (indicator > 6) {
      sign = '-';
    } else {
      sign = '*';
    }
    return sign;
  };

  for (let i = 0; i < 3; i += 1) {
    const sign = randomSign();
    const firstNumber = randomInteger();
    let secondNumber = randomInteger();
    if (sign === '*') {
      secondNumber = randomInteger(1, 1);
    }
    const interrogation = `${firstNumber} ${sign} ${secondNumber}`;
    question(interrogation);
    const userAnswer = answer();

    const checkup = (stringSign, numberOne, numberTwo) => {
      let correctrResult = null;
      switch (stringSign) {
        case '+':
          correctrResult = numberOne + numberTwo;
          break;
        case '-':
          correctrResult = numberOne - numberTwo;
          break;
        default:
          correctrResult = numberOne * numberTwo;
      }
      return correctrResult;
    };

    const correctAnswer = checkup(sign, firstNumber, secondNumber);

    if (+userAnswer !== correctAnswer) {
      wrongAnswerWarning(userAnswer, correctAnswer, userName);
      break;
    }

    console.log('Correct!');

    winAnnouncement(i, 2, userName);
  }
};
brainCalc();
