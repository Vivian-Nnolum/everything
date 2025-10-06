// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 2. Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // 3. Capitalize Words
  function capitalizeWords(sentence) {
    return sentence.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }


// find maximum value
function findMax(arr){
    return Math.max(...arr);
  }

  console.log(findMax([5,8,4,19,9]));//   this results to 19


// find minimum value
function findMin(arr){
    return Math.min(...arr);
  }

  console.log(findMin([5,8,4,19,9]));//   this results to 4


// sum of elements 
  function sumArray(arr) {
    return arr.reduce((sum, currentValue) => 
      sum + currentValue, 0);
  }
  console.log(sumArray([2,4,6,1]))//this results to 13

  
// filterArray
function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  console.log(filterEven([1,2,3,4,5,6,10]))

//   factorial
  function factorial(n) {
    if(n === 0 || n === 1)return 1;
    return n*factorial(n-1);
  }
  console.log(factorial(4))


//   prime number check
 function isPrime(n) {
    if (n<2) return false;
    for (let i = 2; i < n; i++){
        if (n % i === 0) return false;
    }
    return true;
 }
 console.log (isPrime(5)); // returns true


//  generate fibonacci
 function fibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    
    const seq = [0, 1];
    while (seq.length < terms) {
      const next = seq[seq.length - 1] + seq[seq.length - 2];
      seq.push(next);
    }
    return terms === 1 ? [0] : seq;
  }