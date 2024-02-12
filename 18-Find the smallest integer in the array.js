class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort(function (a, b) {
      return a - b;
    })[0];
  }
}

class SmallestIntegerFinder2 {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

class SmallestIntegerFinder3 {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}

let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));
