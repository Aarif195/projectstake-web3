// This function takes two arguments and returns their minimum.
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10

// Exercise 2: Recursion
// This function isEven recursively checks if a positive whole number is even or odd.
function isEven(n) {
  // First, handle the special case of negative numbers, as the recursive logic
  // for N-2 would lead to an infinite loop.
  // The problem statement says to accept a "positive, whole number,"
  // so we will return false for negative numbers.
  if (n < 0) {
    return false;
  }

  // Base Case 1: Zero is even.
  if (n === 0) {
    return true;
  } 
  // Base Case 2: One is odd.
  else if (n === 1) {
    return false;
  } 
  // Recursive Step: For any other number, its evenness is the same as N - 2.
  else {
    return isEven(n - 2);
  }
}

console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-1)); // → false (handled by the new check)

// Exercise 3: Bean Counting
// This function is a generalized counter. It takes a string and a character,
// and returns the count of that character in the string.
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// This function specifically counts uppercase 'B's by reusing countChar.
function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("BOB")); // → 2
console.log(countChar("kakkerlak", "k")); // → 4