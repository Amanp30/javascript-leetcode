# Array Partition

## 📝 Problem

Given an integer array `nums` with `2n` elements, your task is to group these integers into `n` pairs in such a way that the sum of the minimum values from each pair is maximized.

Each pair consists of two integers, and the goal is to find the maximum possible sum of the smallest integer in each pair.

For example, if the input is `nums = [1, 4, 3, 2]`, the optimal pairing is `(1, 2)` and `(3, 4)`, which yields a maximum sum of `1 + 3 = 4`.

Implement a function that returns this maximum sum.


## 📌 Examples

### Example 1

**Input:** array = [1, 4, 3, 2]  
**Output:** 4

### Example 2

**Input:** array = [6, 2, 6, 5, 1, 2]  
**Output:** 9

---

## ✅ Solutions

### 💡 Solution 1: Sorting and Pairing

```javascript
function maxSumOfPairs(numbers) {
    numbers.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < numbers.length; i += 2) {
        total += numbers[i];
    }
    return total;
}
```

### 💡 Solution 2: Divide and Conquer

```javascript
function optimizedPairSum(values) {
    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }

    function merge(left, right) {
        let result = [], i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) result.push(left[i++]);
            else result.push(right[j++]);
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    values = mergeSort(values);
    let total = 0;
    for (let i = 0; i < values.length; i += 2) {
        total += values[i];
    }
    return total;
}
```