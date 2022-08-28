#!/usr/bin/env node
import greeting from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = greeting();
console.log(`Hello, ${userName}!`);
