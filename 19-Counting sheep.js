function countSheeps(sheep) {
  let result = 0;
  for (i = 0; i < sheep.length; i++) {
    sheep[i] === true ? result++ : "Not True";
  }
  return result;
}

console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
);
