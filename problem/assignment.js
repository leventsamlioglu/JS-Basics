const array = [3, 8, 99, 77, 16, -1];
console.log("array", array);

const filteredArray = array.filter((value) => value > 5);
console.log("filteredArray > 5", filteredArray);

const mappedArray = filteredArray.map((value) => ({
  num: value,
}));
console.log("mappedArray", mappedArray);

let sum = filteredArray.reduce((total, value) => total + value, 0);
console.log("sum of filteredArray values", sum);

function minMax(array3) {
  const max = Math.max.apply(null, array3);
  const min = Math.min.apply(null, array3);
  return [max, min];
}

const [max, min] = minMax(filteredArray);
console.log("Min and max of filteredArray", min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
