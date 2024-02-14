function highAndLow(numbers) {
  const arr = numbers.split(" ").map(Number);
  const max = String(Math.max.apply(null, arr));
  const min = String(Math.min.apply(null, arr));
  const array = [max, min];
  const str = array.toString();
  return str.replace(",", " ");
}

function highAndLow2(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

function highAndLow3(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + " " + Math.min.apply(null, arr);
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
