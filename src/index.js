import readlineSync from 'readline-sync';
import greeting from './cli.js';

const introduction = (gameСonditions) => {
  console.log('Welcome to the Brain Games!!!!');
  const userName = greeting();
  console.log(`Hello, ${userName}!`);

  if (gameСonditions !== undefined) {
    console.log(gameСonditions);
  }
  return userName;
};

export const question = (interrogation) => {
  console.log(`Question: ${interrogation}`);
};

export const answer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const randomInteger = (numberSize = 2, decimalPointNumber = 2) => {
  const size = 10 ** numberSize;
  const randomNunber = Math.random();
  const integer = randomNunber.toFixed(decimalPointNumber) * size;
  return +integer.toFixed(0);
};

export const wrongAnswerWarning = (userAnswer, rightAnswer, userName) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  console.log(`Let's try again, ${userName}`);
};

export const winAnnouncement = (counter, numberOfRounds, userName) => {
  if (counter === numberOfRounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};

// export const responseСheck = (wrongAnswerCase, userAnswer, correctAnswer, userName) => {
//   if (wrongAnswerCase) {
//     wrongAnswerWarning(userAnswer, correctAnswer, userName);
//     return false;
//   }
//   return true;
// };

// if responseСheck() === false {

//   break
// }

// console.log('Correct!');
// winAnnouncement(counter, 2, userName);

export default introduction;
