function squareSum(numbers) {
  let sum = [];
  let sums;
  for (i = 0; i < numbers.length; i++) {
    sums = numbers[i] * numbers[i];
    sum.push(sums);
  }
  return (sum = sum.reduce((partialSum, a) => partialSum + a, 0));
}

function squareSum2(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

function squareSum3(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

console.log(squareSum([1, 2]));
