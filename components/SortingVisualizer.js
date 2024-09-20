"use client";
import React, { useState, useEffect } from "react";
import { bubbleSort } from "@/algorithms/bubbleSort";
import { heapSort } from "@/algorithms/heapSort";
import { selectionSort } from "@/algorithms/selectionSort";
import { mergeSort } from "@/algorithms/mergeSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = Array.from({ length: 10 }, () =>
      randomIntervalGenerator(5, 750)
    );
    setArray(newArray);
  };

  const randomIntervalGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const animateSort = (animations) => {
    setIsRunning(true);
    animations.forEach((animation, index) => {
      setTimeout(() => {
        const [barOneIdx, barTwoIdx, isSwap] = animation;
        setArray((prevArray) => {
          const newArray = [...prevArray];
          if (isSwap) {
            [newArray[barOneIdx], newArray[barTwoIdx]] = [
              newArray[barTwoIdx],
              newArray[barOneIdx],
            ];
          }
          return newArray;
        });
        if (index === animations.length - 1) {
          setIsRunning(false);
        }
      }, index * 1); // Adjust the speed of animations here
    });
  };

  const visualizeSort = (sortingAlgorithm) => {
    let animations = [];
    switch (sortingAlgorithm) {
      case "bubble":
        animations = bubbleSort(array.slice()); // Create a copy of the array
        break;
      case "heap":
        animations = heapSort(array.slice()); // Create a copy of the array
        break;
      case "selection":
        animations = selectionSort(array.slice()); // Create a copy of the array
        break;
      case "merge":
        animations = mergeSort(array.slice()); // Create a copy of the array
        break;
      default:
        break;
    }
    animateSort(animations);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center pt-4 gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 hover:bg-blue-600"
          onClick={resetArray}
          disabled={isRunning}
        >
          Reset Array
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50 hover:bg-green-600"
          onClick={() => visualizeSort("bubble")}
          disabled={isRunning}
        >
          Bubble Sort
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50 hover:bg-green-600"
          onClick={() => visualizeSort("heap")}
          disabled={isRunning}
        >
          Heap Sort
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50 hover:bg-green-600"
          onClick={() => visualizeSort("selection")}
          disabled={isRunning}
        >
          Selection Sort
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50 hover:bg-green-600"
          onClick={() => visualizeSort("merge")}
          disabled={isRunning}
        >
          Merge Sort
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-end justify-center h-3/4 w-full">
          {array.map((value, idx) => (
            <div
              key={idx}
              className="w-2 mx-0.5 bg-blue-600"
              style={{ height: `${value}px` }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SortingVisualizer;
