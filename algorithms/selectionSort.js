// algorithms/selectionSort.js

export const selectionSort = (array) => {
  const animations = [];
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      animations.push([i, minIndex, true]); // Swap
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    } else {
      animations.push([i, minIndex, false]); // No Swap
    }
  }

  return animations;
};
