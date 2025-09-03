// --- Looping a Triangle ---
// This program prints a triangle of # characters.
for (let line = "#"; line.length <= 7; line += "#") {
  console.log(line);
}

// --- FizzBuzz ---
// This program prints numbers from 1 to 100 with exceptions for Fizz, Buzz, and FizzBuzz.
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 === 0) {
    output += "Fizz";
  }
  if (n % 5 === 0) {
    output += "Buzz";
  }
  console.log(output || n);
}

// --- Chessboard ---
// This program creates a string representing a chessboard grid of a given size.
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    // The pattern depends on the sum of the coordinates.
    // If the sum is even, add a space. If the sum is odd, add a hash.
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  // After each row, add a newline character.
  board += "\n";
}