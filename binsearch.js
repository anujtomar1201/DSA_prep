function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // Calculate the middle index using bitwise shift for efficiency
    const mid = low + ((high - low) >> 1);

    if (arr[mid] === target) {
      return mid; // Element found at mid index
    } else if (arr[mid] < target) {
      low = mid + 1; // Search right half
    } else {
      high = mid - 1; // Search left half
    }
  }

  // Element not found
  return -1;
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9];
const target = 7;

const index = binarySearch(sortedArray, target);

if (index !== -1) {
  console.log(`Element found at index: ${index}`);
} else {
  console.log(`Element not found in the array`);
}
