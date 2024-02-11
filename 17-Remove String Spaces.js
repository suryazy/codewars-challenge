function noSpace(x) {
  let a = x.trim();
  return a.replace(/\s/g, "");
}

function noSpace2(x) {
  return x.replace(/\s/g, "");
}

console.log(noSpace("  hj  kj  lk"));
