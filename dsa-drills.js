function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}


function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

let sampleArray = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
];

//console.log(mergeSort(sampleArray));


//1. Understanding Merge Sort
// [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

  // [21, 1, 26, 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]

  // [21, 1, 26, 45] [29, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40]

  // [21, 1] [26, 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40]

  // [21] [1] [26] [45] [29] [28] [2] [9] [16] [49] [39] [27] [43] [34] [46] [40];

//after the third recursive call, the reulting list would be: [21, 1, 26, 45]
// after 16 recursive calls, the the reulting list would be: [1] 
// the first two lists to be merged would be: [21], [1]
//the seventh lists to be merged would be: [43], [34]
//


//2.
//  part 1: Which of the following statements is correct about the partition step? 

// The pivot could have been either 14 or 17, since both of these items are true in the case where items to their left are less than the item and items to the right are greater than the item.

// part 2: using the LAST ITEM as the PIVOT:
//original input: [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
//End Resulting list: [3, 9, 10, 12, 13, 14, 15, 16, 17, 19]

//[10, 3, 9, 12, 19, 14, 17, 16, 13, 15]
              j                      i

//the SECOND PARTITION will result in:              
//[3, 9, 10, 12]     [13, 14, 17, 16, 19, 15]
         j   i            i                j

// part 2: using the FIRST ITEM as the PIVOT:
//original input: 
//first partition: [12, 13, 10, 3, 9, 14, 15, 16, 19, 17]


//second partition: [12, 10, 3, 9, 13, 14] [15, 16, 19, 17]




   
              
              

let initialArray = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};
           
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}
console.log(quickSort(initialArray));



//When using the last item on the list as a pivot:

//When using the first item on the list as a pivot:

//3.


