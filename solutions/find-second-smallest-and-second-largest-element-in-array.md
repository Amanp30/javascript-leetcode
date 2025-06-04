# Find second smallest and second largest element in array

## 📝 Problem

Given an array of integers, return a new array where:

*   The 0th position contains the second smallest element in the original array.
    
*   The 1st position contains the second largest element in the original array.
    

If there are fewer than two unique elements in the array, return `null` for the respective missing element.


## 📌 Examples

### Example 1

**Input:** array = [1, 2, 3, 4, 5]  
**Output:** [2, 4]

### Example 2

**Input:** array = [5, 5, 5, 5]  
**Output:** [null, null]

### Example 3

**Input:** array = [1, 1, 2, 2, 3]  
**Output:** [2, 2]

### Example 4

**Input:** number = 4  
**Output:** ❌ Throw error => Input must be an array

---

## ✅ Solutions

### 💡 Solution 1: Using Sorting

```javascript
function findSecondSmallestAndLargest(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => a - b);

    const secondSmallest = uniqueSorted.length > 1 ? uniqueSorted[1] : null;
    const secondLargest = uniqueSorted.length > 1 ? uniqueSorted[uniqueSorted.length - 2] : null;

    return [secondSmallest, secondLargest];
}
```

### 💡 Solution 2: Using Two Passes

```javascript
function findSecondSmallestAndLargestTwoPass(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    const uniqueSet = new Set(arr);
    if (uniqueSet.size < 2) {
        return [null, null];
    }

    let min = Infinity;
    let secondMin = Infinity;
    let max = -Infinity;
    let secondMax = -Infinity;

    for (const num of uniqueSet) {
        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }

        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    return [secondMin === Infinity ? null : secondMin, secondMax === -Infinity ? null : secondMax];
}
```

### 💡 Solution 3: Using Single Pass

```javascript
function findSecondSmallestAndLargestSinglePass(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    let min = Infinity;
    let secondMin = Infinity;
    let max = -Infinity;
    let secondMax = -Infinity;

    for (const num of arr) {
        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }

        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    return [secondMin === Infinity ? null : secondMin, secondMax === -Infinity ? null : secondMax];
}
```