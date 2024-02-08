function positiveSum(arr) {
  let nums = [];
  arr.forEach((num) => {
    if (num > 0) {
      nums.push(num);
    }
  });
  const sum = nums.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
}

console.log(positiveSum([1, -2, 3, 4, 5]));
