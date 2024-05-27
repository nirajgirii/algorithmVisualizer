// algorithms/heapSort.js

export const heapSort = (array) => {
  const animations = [];
  let n = array.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  // Heap sort
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    animations.push([0, i, true]);
    [array[0], array[i]] = [array[i], array[0]];

    // Heapify root element
    heapify(array, i, 0, animations);
  }

  return animations;
};

const heapify = (array, n, i, animations) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    animations.push([i, largest, true]);
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, n, largest, animations);
  } else {
    animations.push([i, i, false]);
  }
};
