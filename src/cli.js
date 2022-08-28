import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default greeting;
