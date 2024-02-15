function getMiddle(s) {
  const b = Math.ceil(s.length / 2);
  const a = Math.floor(s.length / 2);
  if (s.length % 2 == 1) {
    return s.slice(a, b);
  } else {
    return s.substring(a - 1, a + 1);
  }
}

function getMiddle2(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle3(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle("test"));
console.log(getMiddle("testin"));
console.log(getMiddle("testing"));
