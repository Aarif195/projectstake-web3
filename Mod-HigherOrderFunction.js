//  Dataset from the chapter.
const SCRIPTS = [
  {
    name: "Latin",
    ranges: [[65, 91], [97, 123]],
    direction: "ltr",
    year: 700,
    living: true,
    link: ""
  },
  {
    name: "Cyrillic",
    ranges: [[1024, 1152]],
    direction: "ltr",
    year: 900,
    living: true,
    link: ""
  },
  {
    name: "Arabic",
    ranges: [[1536, 1792]],
    direction: "rtl",
    year: 600,
    living: true,
    link: ""
  },
  {
    name: "Han",
    ranges: [[19968, 40960]],
    direction: "ltr",
    year: -1200,
    living: true,
    link: ""
  }
];

// Helper function from the chapter to find the script for a character code.
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null;
}

// Helper function from the chapter to count items by a group name.
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}

// Flattening Exercise 
// Using the reduce method to flatten an array of arrays.
let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenedArray = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);
console.log(flattenedArray);

//  Loop Exercise
// Write a higher-order function that mimics a for loop.
function loop(value, test, update, body) {
  while (test(value)) {
    body(value); 
    value = update(value);
  }
}

// Example usage of the loop function.
loop(3, n => n > 0, n => n - 1, console.log);

// --- Everything Exercise ---
// Implement `every` as a function.

// Version 1: Using a simple loop.
function everyWithLoop(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false; 
    }
  }
  return true; 
}

console.log(everyWithLoop([1, 3, 5], n => n < 10));
console.log(everyWithLoop([2, 4, 16], n => n < 10));

// Version 2: Using the `some` method.
function everyWithSome(array, test) {
  // An array passes the 'every' test if there is NOT 'some' element
  // that FAILS the test.
  return !array.some(element => !test(element));
}

console.log(everyWithSome([1, 3, 5], n => n < 10));
console.log(everyWithSome([2, 4, 16], n => n < 10));

// --- Dominant Writing Direction Exercise ---
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none"); // Exclude characters with no script.

  // If there are no script characters, return a default message.
  if (scripts.length === 0) {
    return "No scripts found";
  }

  // Find the script with the highest count using reduce.
  let dominant = scripts.reduce((a, b) => {
    return a.count > b.count ? a : b;
  });

  return dominant.name;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));