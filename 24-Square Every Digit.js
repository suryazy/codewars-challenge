function squareDigits(num) {
  let arr = Array.from(String(num), Number);
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return parseInt(result.join(""));
}

console.log(squareDigits(3212));
