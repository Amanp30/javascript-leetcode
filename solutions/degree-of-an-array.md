# Degree of an Array

## 📝 Problem

In this problem, you are given a non-empty array of non-negative integers, `nums`. The **degree** of an array is defined as the maximum frequency of any single element within the array. Your task is to determine the smallest possible length of a contiguous subarray that has the same degree as the original array.


## 📌 Examples

### Example 1

**Input:** nums = [1, 2, 2, 3, 1]  
**Output:** 2

### Example 2

**Input:** nums = [1, 2, 2, 3, 1, 4, 2]  
**Output:** 6

---

## ✅ Solutions

### 💡 Solution 1: Brute Force Approach

```javascript
function findSmallestLengthBruteForce(nums) {
    const degree = Math.max(...nums.map(n => nums.filter(x => x === n).length));
    
    let minLength = nums.length;

    for (let start = 0; start < nums.length; start++) {
        for (let end = start; end < nums.length; end++) {
            const subArray = nums.slice(start, end + 1);
            const subDegree = Math.max(...subArray.map(n => subArray.filter(x => x === n).length));
            if (subDegree === degree) {
                minLength = Math.min(minLength, end - start + 1);
            }
        }
    }

    return minLength;
}
```

### 💡 Solution 2: Hash Map for Frequency and Indices

```javascript
function findSmallestLengthHashMap(nums) {
    const count = {};
    const firstIndex = {};
    const lastIndex = {};

    nums.forEach((num, index) => {
        if (!count[num]) count[num] = 0;
        count[num]++;
        if (firstIndex[num] === undefined) firstIndex[num] = index;
        lastIndex[num] = index;
    });

    const degree = Math.max(...Object.values(count));
    let minLength = nums.length;

    for (let num in count) {
        if (count[num] === degree) {
            minLength = Math.min(minLength, lastIndex[num] - firstIndex[num] + 1);
        }
    }

    return minLength;
}
```

### 💡 Solution 3: Two-Pass Approach Approach

```javascript
function findSmallestLengthTwoPass(nums) {
    const count = {};
    const firstIndex = {};
    const lastIndex = {};

    nums.forEach((num, index) => {
        if (!count[num]) count[num] = 0;
        count[num]++;
        if (firstIndex[num] === undefined) firstIndex[num] = index;
        lastIndex[num] = index;
    });

    const degree = Math.max(...Object.values(count));
    let minLength = nums.length;

    Object.keys(count).forEach(num => {
        if (count[num] === degree) {
            minLength = Math.min(minLength, lastIndex[num] - firstIndex[num] + 1);
        }
    });

    return minLength;
}
```

### 💡 Solution 4: Sliding Window Approach

```javascript
function findSmallestLengthSlidingWindow(nums) {
    const count = {};
    const firstIndex = {};
    const lastIndex = {};

    nums.forEach((num, index) => {
        if (!count[num]) count[num] = 0;
        count[num]++;
        if (firstIndex[num] === undefined) firstIndex[num] = index;
        lastIndex[num] = index;
    });

    const degree = Math.max(...Object.values(count));
    let minLength = nums.length;

    for (let start = 0; start < nums.length; start++) {
        const currentCount = {};
        let end = start;

        while (end < nums.length) {
            const num = nums[end];
            if (!currentCount[num]) currentCount[num] = 0;
            currentCount[num]++;
            
            if (currentCount[num] === degree) {
                minLength = Math.min(minLength, end - start + 1);
                break;
            }
            end++;
        }
    }

    return minLength;
}
```

### 💡 Solution 5: Using Map and Array

```javascript
function findSmallestLengthMapArray(nums) {
    const countMap = new Map();
    const firstIndices = new Map();
    const lastIndices = new Map();

    nums.forEach((num, index) => {
        if (!countMap.has(num)) {
            countMap.set(num, 0);
            firstIndices.set(num, index);
        }
        countMap.set(num, countMap.get(num) + 1);
        lastIndices.set(num, index);
    });

    const degree = Math.max(...countMap.values());
    let minLength = nums.length;

    for (let [num, count] of countMap) {
        if (count === degree) {
            minLength = Math.min(minLength, lastIndices.get(num) - firstIndices.get(num) + 1);
        }
    }

    return minLength;
}
```

### 💡 Solution 6: Optimized Frequency Count

```javascript
function findSmallestLengthOptimizedFrequency(nums) {
    const frequency = {};
    const firstOccurrence = {};
    const lastOccurrence = {};

    nums.forEach((num, index) => {
        if (!frequency[num]) frequency[num] = 0;
        frequency[num]++;
        if (firstOccurrence[num] === undefined) firstOccurrence[num] = index;
        lastOccurrence[num] = index;
    });

    const degree = Math.max(...Object.values(frequency));
    let minLength = nums.length;

    for (const num of Object.keys(frequency)) {
        if (frequency[num] === degree) {
            minLength = Math.min(minLength, lastOccurrence[num] - firstOccurrence[num] + 1);
        }
    }

    return minLength;
}
```

### 💡 Solution 7: Using Object.entries()

```javascript
function findSmallestLengthObjectEntries(nums) {
    const freq = {};
    const firstIndex = {};
    const lastIndex = {};

    nums.forEach((num, index) => {
        if (!freq[num]) freq[num] = 0;
        freq[num]++;
        if (firstIndex[num] === undefined) firstIndex[num] = index;
        lastIndex[num] = index;
    });

    const degree = Math.max(...Object.values(freq));
    let minLength = nums.length;

    Object.entries(freq).forEach(([num, count]) => {
        if (count === degree) {
            minLength = Math.min(minLength, lastIndex[num] - firstIndex[num] + 1);
        }
    });

    return minLength;
}
```