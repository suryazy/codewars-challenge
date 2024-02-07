function makeNegative(num) {
  if (Math.sign(num) === 1) {
    num -= num * 2;
    return num;
  }
  if (Math.sign(num) === -1 || Math.sign(num) === 0) {
    return num;
  }
}

function makeNegative2(num) {
  return -Math.abs(num);
}

function makeNegative3(num) {
  return num < 0 ? num : -num;
}

console.log(makeNegative(5));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));

console.log(makeNegative2(2));

console.log(makeNegative3(3));
