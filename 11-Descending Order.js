function descendingOrder(n) {
  const arr = Array.from(String(n), Number);
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr.reduce((accum, digit) => accum * 10 + digit, 0);
}

function descendingOrder2(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

console.log(descendingOrder(12345));
console.log(descendingOrder(572481));
