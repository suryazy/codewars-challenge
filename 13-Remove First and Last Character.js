function removeChar(str) {
  return str.substr(1, str.length - 2);
}

function removeChar2(str) {
  return str.slice(1, -1);
}

function removeChar3(str) {
  return str.substring(1, str.length - 1);
}

console.log(removeChar("eloquent"));
