function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * -1;
  }
  return array;
}

console.log(invert([1, -2, 3, 4, -5]));
