function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    let guess = list[mid];
    if (guess == item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}

const randomList = [23, 31, 45, 49, 50, 64, 75, 88, 95, 100];

console.log(binarySearch(randomList, 95)); // return  8 -> as it is index of '95'
console.log(binarySearch(randomList, 44)); // return  null as '44' is not part of list
