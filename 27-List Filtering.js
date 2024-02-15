function filter_list(l) {
  let arr = [];
  for (i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      arr.push(l[i]);
    }
  }
  return arr;
}

function filter_list2(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}

console.log(filter_list([1, 2, "a", "b"]));
