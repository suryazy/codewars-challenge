var summation = function (num) {
  let sum = [];
  let sums;
  for (i = 0; i <= num; i++) {
    sums = i;
    sum.push(sums);
  }
  return (sum = sum.reduce((partialSum, a) => partialSum + a, 0));
};

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

function summation2(num) {
  return (num * (num + 1)) / 2;
}

console.log(summation(8));
console.log(summation2(2));
