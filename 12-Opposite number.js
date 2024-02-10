function opposite(number) {
  if (number < 0) {
    number *= -1;
  } else if (number > 0) {
    number = -number;
  }
  return number;
}

function opposite2(number) {
  return -number;
}

console.log(opposite(-5));
console.log(opposite2(-5));
