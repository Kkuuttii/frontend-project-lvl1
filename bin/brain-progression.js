#!/usr/bin/env node
import introduction,
{
  question,
  answer,
  randomInteger,
  wrongAnswerWarning,
  winAnnouncement,
} from '../src/index.js';

const brainProgression = () => {
  const userName = introduction('What number is missing in the progression?');

  const progressionFormation = (length = 10) => {
    const startNumber = randomInteger();
    const step = randomInteger(1);
    const arithmeticProgression = [];
    let numberOfProgression = startNumber;
    for (let i = 0; i < length; i += 1) {
      arithmeticProgression.push(numberOfProgression);
      numberOfProgression += step;
    }
    return arithmeticProgression;
  };

  const pastInsert = (symbol, arr, plaseForPast) => {
    const copiedArr = arr.slice(0);
    copiedArr[plaseForPast] = symbol;
    return copiedArr;
  };

  for (let i = 0; i < 3; i += 1) {
    const currentProgression = progressionFormation();
    const randomIndex = Math.abs(randomInteger(1) - 1);
    const correctAnswer = currentProgression[randomIndex];

    const progressingWithPass = pastInsert('..', currentProgression, randomIndex).join(' ');
    question(progressingWithPass);

    const userAnswer = answer();

    if (+userAnswer !== correctAnswer) {
      wrongAnswerWarning(userAnswer, correctAnswer, userName);
      break;
    }

    console.log('Correct!');

    winAnnouncement(i, 2, userName);
  }
};

brainProgression();
