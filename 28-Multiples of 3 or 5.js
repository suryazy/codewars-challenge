function solution(number) {
  let a = 3;
  let b = 5;
  let arr = [];
  if (number > 3) {
    arr.push(a);
    while (a + 3 < number) {
      a += 3;
      arr.push(a);
    }
  }
  if (number > 5) {
    arr.push(b);
    while (b + 5 < number) {
      b += 5;
      arr.push(b);
    }
  }
  const unique = arr.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });
  return unique.reduce((partialSum, a) => partialSum + a, 0);
}

function solution2(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(5));
