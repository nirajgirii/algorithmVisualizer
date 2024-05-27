// algorithms/mergeSort.js

export const mergeSort = (array) => {
  const animations = [];

  const mergeSortHelper = (array, left, right) => {
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    mergeSortHelper(array, left, mid);
    mergeSortHelper(array, mid + 1, right);
    merge(array, left, mid, right, animations);
  };

  mergeSortHelper(array, 0, array.length - 1);

  return animations;
};

const merge = (array, left, mid, right, animations) => {
  const leftArray = array.slice(left, mid + 1);
  const rightArray = array.slice(mid + 1, right + 1);
  let i = 0,
    j = 0,
    k = left;

  while (i < leftArray.length && j < rightArray.length) {
    // Push indices of elements to animate
    animations.push([left + i, mid + 1 + j]);
    if (leftArray[i] <= rightArray[j]) {
      array[k++] = leftArray[i++];
    } else {
      array[k++] = rightArray[j++];
    }
  }

  // Push remaining elements to animate
  while (i < leftArray.length) {
    animations.push([left + i, left + i]);
    array[k++] = leftArray[i++];
  }
  while (j < rightArray.length) {
    animations.push([mid + 1 + j, mid + 1 + j]);
    array[k++] = rightArray[j++];
  }
};
