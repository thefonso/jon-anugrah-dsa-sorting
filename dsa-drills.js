const _Node = require('./node');
const LL = require('./linked-list');


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
      

//the SECOND PARTITION will result in:              
//[3, 9, 10, 12]     [13, 14, 17, 16, 19, 15]


// part 2: using the FIRST ITEM as the PIVOT:
//original input: 
//first partition: [12, 13, 10, 3, 9, 14, 15, 16, 19, 17]


//second partition: [12, 10, 3, 9, 13, 14] [15, 16, 19, 17]



//3.
let dataset = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';



let dataArray = dataset.split(' ');
let result = dataArray.map(x => parseInt(x, 10));
//console.log(result);

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

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

//console.log(qSort(result));


//4. 
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
};

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
};

//console.log(mergeSort(result));

//5.

function makeList(list) {
  let array = list.getArray();
  let sortedArray = mergeSort(array);

  let newList = new LL();
  sortedArray.map(x => {
    newList.insertLast(x)
  })
  return newList;
}

let questionData = new LL()
questionData.insertLast(4);
questionData.insertLast(7);
questionData.insertLast(1);
questionData.insertLast(9);

//console.log(makeList(questionData));

//6.
function bucketSort(array, high, low) {
  const sortedArray = [];
  sortedArray.push(low)
  
}



//7. Random Sort

function random(array) {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * array.length);
    swap(array, i, j)
  }
  return array;
}
let newerArray = [1,10,8,9,2]
//console.log(random(newerArray));


//8. Alphabetical

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
          swap(array, i, i + 1);
          swaps++;
      }
  }

  if (swaps > 0) {
      return bubbleSort(array);
  }
  return array;
};

const books = ['All of the books', 'Mo money mo problemz', 'Character studies', 'Echo ', 'Zoos', 'Lots of words'];
console.log(bubbleSort(books));









