var searchMatrix = function (matrix, target) {
  let start = 0;
  let m = matrix[0].length;
  let end = matrix.length * m - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    console.log(mid);
    if (matrix[Math.floor(mid / m)][mid % m] == target) {
      return true;
    } else if (matrix[Math.floor(mid / m)][mid % m] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};
console.log(
  searchMatrix(
    [
      [21, 23, 26],
      [31, 32, 43],
      [51, 52, 59],
    ],
    -26
  )
);
