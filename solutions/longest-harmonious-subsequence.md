# Longest Harmonious Subsequence

## 📝 Problem

Imagine you have a list of integers called `nums`. A subsequence of this list is defined as a sequence that can be derived by removing some or none of the elements from the list without changing the order of the remaining elements.

A subsequence is considered **harmonious** if the difference between its maximum and minimum values is exactly 1. Your goal is to determine the length of the longest possible harmonious subsequence within the given list.

To illustrate, if you have a list of integers, your task is to find the longest subsequence where the difference between the highest and lowest number is precisely 1.


## 📌 Examples

### Example 1

**Input:** nums = [1,3,2,2,5,2,3,7]  
**Output:** 5

### Example 2

**Input:** nums = [1,2,3,4]  
**Output:** 2

### Example 3

**Input:** nums = [1,1,1,1]  
**Output:** 0

---

## ✅ Solutions

### 💡 Solution 1: Using a Hash Map

```javascript
function longestHarmoniousSubsequenceHashMap(nums) {
    const frequency = {};
    let maxLength = 0;
    
    for (const num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    for (const key of Object.keys(frequency)) {
        const currentNum = parseInt(key);
        if (frequency[currentNum + 1]) {
            maxLength = Math.max(maxLength, frequency[currentNum] + frequency[currentNum + 1]);
        }
    }
    
    return maxLength;
}
```

### 💡 Solution 2: Sorting and Two-Pointer Approach

```javascript
function longestHarmoniousSubsequenceTwoPointer(nums) {
    nums.sort((a, b) => a - b);
    let maxLength = 0;
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
        while (nums[right] - nums[left] > 1) {
            left++;
        }
        if (nums[right] - nums[left] === 1) {
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }
    
    return maxLength;
}
```

### 💡 Solution 3: Frequency Map with Iteration

```javascript
function longestHarmoniousSubsequenceFrequencyMap(nums) {
    const frequency = new Map();
    let maxLength = 0;
    
    nums.forEach(num => {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    });
    
    frequency.forEach((count, num) => {
        if (frequency.has(num + 1)) {
            maxLength = Math.max(maxLength, count + frequency.get(num + 1));
        }
    });
    
    return maxLength;
}
```

### 💡 Solution 4: Sorting and Set Approach

```javascript
function longestHarmoniousSubsequenceSet(nums) {
    const uniqueNums = new Set(nums);
    let maxLength = 0;
    
    uniqueNums.forEach(num => {
        if (uniqueNums.has(num + 1)) {
            const count = nums.filter(x => x === num).length + nums.filter(x => x === num + 1).length;
            maxLength = Math.max(maxLength, count);
        }
    });
    
    return maxLength;
}
```

### 💡 Solution 5: Using Array Frequency Count

```javascript
function longestHarmoniousSubsequenceArrayCount(nums) {
    const frequency = Array.from({length: 20001}, () => 0);
    let maxLength = 0;
    
    for (const num of nums) {
        frequency[num + 10000]++;
    }
    
    for (let i = 0; i < frequency.length - 1; i++) {
        if (frequency[i] > 0 && frequency[i + 1] > 0) {
            maxLength = Math.max(maxLength, frequency[i] + frequency[i + 1]);
        }
    }
    
    return maxLength;
}
```

### 💡 Solution 6: Sorting with Binary Search

```javascript
function longestHarmoniousSubsequenceBinarySearch(nums) {
    nums.sort((a, b) => a - b);
    let maxLength = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const target = nums[i] + 1;
        const index = binarySearch(nums, target);
        if (index !== -1) {
            maxLength = Math.max(maxLength, index - i + 1);
        }
    }
    
    return maxLength;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}
```

### 💡 Solution 7: Using Map with Max Calculation

```javascript
function longestHarmoniousSubsequenceMapMax(nums) {
    const frequencyMap = new Map();
    let maxLength = 0;
    
    nums.forEach(num => frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1));
    
    frequencyMap.forEach((count, num) => {
        if (frequencyMap.has(num + 1)) {
            maxLength = Math.max(maxLength, count + frequencyMap.get(num + 1));
        }
    });
    
    return maxLength;
}
```

### 💡 Solution 8: Using Set and Array Count

```javascript
function longestHarmoniousSubsequenceSetArrayCount(nums) {
    const numSet = new Set(nums);
    let maxLength = 0;
    
    numSet.forEach(num => {
        if (numSet.has(num + 1)) {
            const count = nums.filter(n => n === num).length + nums.filter(n => n === num + 1).length;
            maxLength = Math.max(maxLength, count);
        }
    });
    
    return maxLength;
}
```

### 💡 Solution 9: Hash Table with Frequency Count

```javascript
function longestHarmoniousSubsequenceHashTable(nums) {
    const frequency = {};
    let maxLength = 0;
    
    for (const num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    for (const num in frequency) {
        const currentNum = Number(num);
        if (frequency[currentNum + 1] !== undefined) {
            maxLength = Math.max(maxLength, frequency[currentNum] + frequency[currentNum + 1]);
        }
    }
    
    return maxLength;
}
```

### 💡 Solution 10: Sorting with Two-Pointer and Hash Map

```javascript
function longestHarmoniousSubsequenceSortingAndHashMap(nums) {
    nums.sort((a, b) => a - b);
    const frequency = {};
    let maxLength = 0;
    
    nums.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
    
    nums.forEach(num => {
        if (frequency[num + 1]) {
            maxLength = Math.max(maxLength, frequency[num] + frequency[num + 1]);
        }
    });
    
    return maxLength;
}
```