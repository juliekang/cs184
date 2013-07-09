#!/usr/bin/env node
var fs = require('fs');
var outfile = "first_hundred_primes.txt";
var integerCounter = 2;
var primeCounter = 0;
var tmpc;
var primeArray = [];

primeArray[0] = 2;
primeCounter++;
integerCounter++;

while (primeCounter < 101) {
  for(tmpc=2; tmpc<=integerCounter-1; tmpc++) {
    if(integerCounter % tmpc == 0) {
      break;
    }
  }
  if(integerCounter == tmpc) {
    primeArray[primeCounter] = integerCounter;
    primeCounter++;
  }
  integerCounter++;
}
fs.writeFileSync(outfile, primeArray);  
console.log("Script: " + __filename + "\nWrote: " + primeArray + "To: " + outfile);
