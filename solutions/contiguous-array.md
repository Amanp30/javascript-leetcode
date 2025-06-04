# Contiguous Array

## 📝 Problem

Given a binary array `nums`, your task is to find the length of the longest contiguous subarray where the number of `0`s and `1`s are equal.

A contiguous subarray is a sequence of elements that appear consecutively in the original array. For instance, in the array `[0,1,0]`, the subarrays `[0,1]` and `[1,0]` both have an equal number of `0`s and `1`s and are therefore considered valid.


## 📌 Examples

### Example 1

**Input:** nums =  [0,1]  
**Output:** 2

### Example 2

**Input:** nums = [0,1,0]  
**Output:** 2

---

## ✅ Solutions

### 💡 Solution 1: Prefix Sum and Hash Map

```javascript
function findMaxLengthPrefixSum(nums) {
    let maxLen = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, -1); // Initialize with sum 0 at index -1

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    return maxLen;
}
```

### 💡 Solution 2: Brute Force Solution

```javascript
function findMaxLengthBruteForce(nums) {
    let maxLen = 0;
    for (let start = 0; start < nums.length; start++) {
        let count0 = 0, count1 = 0;
        for (let end = start; end < nums.length; end++) {
            if (nums[end] === 0) count0++;
            else count1++;
            if (count0 === count1) {
                maxLen = Math.max(maxLen, end - start + 1);
            }
        }
    }
    return maxLen;
}
```

### 💡 Solution 3: Sliding Window

```javascript
function findMaxLengthSlidingWindow(nums) {
    let maxLen = 0;
    let map = new Map();
    map.set(0, -1);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    return maxLen;
}
```

### 💡 Solution 4: Using Array with Cumulative Sum

```javascript
function findMaxLengthCumulativeSum(nums) {
    let maxLen = 0;
    const cumulativeSum = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        cumulativeSum.push(sum);
    }

    const map = new Map();
    map.set(0, -1);

    for (let i = 0; i < cumulativeSum.length; i++) {
        if (map.has(cumulativeSum[i])) {
            maxLen = Math.max(maxLen, i - map.get(cumulativeSum[i]));
        } else {
            map.set(cumulativeSum[i], i);
        }
    }
    return maxLen;
}
```