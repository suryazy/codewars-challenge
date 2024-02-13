function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else if (operation == "/") {
    return value1 / value2;
  } else {
    return "operator matematik tidak terdaftar";
  }
}

function basicOp2(o, a, b) {
  return eval(a + o + b);
}

console.log(basicOp("+", 4, 7));
