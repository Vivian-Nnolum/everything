function sumOfDistinctElements(arr1, arr2) {
  const combined = arr1.concat(arr2);
  let sum = 0;

  for (let i = 0; i < combined.length; i++) {
    let count = 0;
    for (let j = 0; j < combined.length; j++) {
      if (combined[i] === combined[j]) {
        count++;
      }
    }
    if (count === 1) {
      sum += combined[i];
    }
  }

  return sum;
}

const arr1 = [3, 1, 5, 9];
const arr2 = [6, 4, 1, 9, 3];

const result = sumOfDistinctElements(arr1, arr2);
console.log(result);  

// problem 2

// 1.)
// Procedure dot_product(v1, v2, n, ps)
  // v1 and v2 are input arrays
  // n is the size of the arrays
  // ps is passed by reference to store the result
  // Initialize ps to 0
  // For i from 0 to n - 1 do
    // ps ← ps + (v1[i] × v2[i])
  // End For
// End Procedure

// 2.)
// Algorithm check_orthogonality_with_procedure
  // Input: n (number of vector pairs), each pair of vectors (v1, v2) of size m
//   For i from 1 to n do
//     Read vector v1 of size m
//     Read vector v2 of size m
//     Declare ps
//     Call dot_product(v1, v2, m, ps)
//     If ps = 0 then
//       Output "Vectors are orthogonal"
//     Else
//       Output "Vectors are not orthogonal"
//     End If
//   End For
// End Algorithm

// 3.)
function dot_product(v1, v2, psWrapper) {
  psWrapper.ps = 0;

  for (let i = 0; i < v1.length; i++) {
    psWrapper.ps += v1[i] * v2[i];
  }
}
const v1 = [2, 3, 4];
const v2 = [1, 0, -1];

let psWrapper = { ps: 0 };
dot_product(v1, v2, psWrapper);

console.log("Dot Product:", psWrapper.ps);

if (psWrapper.ps === 0) {
  console.log("Vectors are orthogonal");
} else {
  console.log("Vectors are not orthogonal");
}


