
let sentence = prompt("Enter a sentence ending with a period (.)");

let lengthCounter = 0;
let wordCounter = 1;
let vowelCounter = 0;

for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];
    lengthCounter++;

    if ("aeiouAEIOU".includes(ch)) {
        vowelCounter++;
    }

    if (ch === ' ') {
        wordCounter++;
    }

    if (ch === '.') {
        break; 
    }
}


console.log("Length of sentence:", lengthCounter);
console.log("Number of words:", wordCounter);
console.log("Number of vowels:", vowelCounter);
