
console.log("Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("Even numbers:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Odd numbers:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log("Sum of numbers from 1 to 20 is:", sum);

console.log("Numbers from 20 down to 1:");
for (let i = 20; i >= 1; i--) {
  console.log(i);
}