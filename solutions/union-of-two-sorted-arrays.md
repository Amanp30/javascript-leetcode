# Union of Two Sorted Arrays

## 📝 Problem

Given two integer arrays, `arr1` and `arr2`, both sorted in ascending order, your task is to find the union of these two arrays. The union of two arrays is a sorted array that contains all unique elements from both arrays.

Implement a function that returns this sorted array of unique elements. The result should be sorted in ascending order and should not contain any duplicate elements.


## 📌 Examples

### Example 1

**Input:** array1 = [1, 3, 5, 7], array2 = [2, 3, 5, 6]  
**Output:** [1, 2, 3, 5, 6, 7]

### Example 2

**Input:** array1 = [1, 2, 2, 3], array2 = [2, 4, 4, 5]  
**Output:** [1, 2, 3, 4, 5]

---

## ✅ Solutions

### 💡 Solution 1: Merge with Two Pointers

```javascript
function unionOfSortedArraysTwoPointer(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
                result.push(arr2[j]);
            }
            j++;
        } else {
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    while (i < arr1.length) {
        if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i]);
        }
        i++;
    }

    while (j < arr2.length) {
        if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
            result.push(arr2[j]);
        }
        j++;
    }

    return result;
}
```

### 💡 Solution 2: Using set

```javascript
function unionOfSortedArraysSet(arr1, arr2) {
    let set = new Set(arr1.concat(arr2));
    return Array.from(set).sort((a, b) => a - b);
}
```

### 💡 Solution 3: Using Array filter and concat

```javascript
function unionOfSortedArraysFilterConcat(arr1, arr2) {
    let combined = arr1.concat(arr2);
    return combined.filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b);
}
```

### 💡 Solution 4: Binary Search for Insertion Binary Search

```javascript
function unionOfSortedArraysBinarySearch(arr1, arr2) {
    let result = [];

    for (let num of arr1) {
        let index = findInsertionIndex(result, num);
        if (index === result.length || result[index] !== num) {
            result.splice(index, 0, num);
        }
    }

    for (let num of arr2) {
        let index = findInsertionIndex(result, num);
        if (index === result.length || result[index] !== num) {
            result.splice(index, 0, num);
        }
    }

    return result;
}

function findInsertionIndex(arr, value) {
    let left = 0;
    let right = arr.length;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < value) left = mid + 1;
        else right = mid;
    }
    return left;
}
```

### 💡 Solution 5: Merge and Deduplicate

```javascript
function unionOfSortedArraysMergeDeduplicate(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];
    let last = -Infinity;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (arr1[i] !== last) {
                result.push(arr1[i]);
                last = arr1[i];
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (arr2[j] !== last) {
                result.push(arr2[j]);
                last = arr2[j];
            }
            j++;
        } else {
            if (arr1[i] !== last) {
                result.push(arr1[i]);
                last = arr1[i];
            }
            i++;
            j++;
        }
    }

    while (i < arr1.length) {
        if (arr1[i] !== last) {
            result.push(arr1[i]);
            last = arr1[i];
        }
        i++;
    }

    while (j < arr2.length) {
        if (arr2[j] !== last) {
            result.push(arr2[j]);
            last = arr2[j];
        }
        j++;
    }

    return result;
}
```