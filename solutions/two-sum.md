# Two Sum

## 📝 Problem

You are given an array of integers, `nums`, and an integer, `target`. Your task is to find the indices of the two numbers in the array that add up to the given `target`. You can assume that each input will have exactly one solution, and you may not use the same element more than once. The order of the indices in the output does not matter.


## 📌 Examples

### Example 1

**Input:** array = [2,7,11,15], target = 9  
**Output:** [0,1]

### Example 2

**Input:** array = [3,2,4], target = 6  
**Output:** [1,2]

### Example 3

**Input:** array = [3,3], target = 6  
**Output:** [0,1]

---

## ✅ Solutions

### 💡 Solution 1: Using a Hash Map

```javascript
function twoSumHashMap(nums, target) {
    const numToIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }
    return [];
}
```

### 💡 Solution 2: Using a Nested Loop

```javascript
function twoSumNestedLoop(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
```

### 💡 Solution 3: Using a Single Pass with Map

```javascript
function twoSumSinglePass(nums, target) {
    const indexMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (indexMap[complement] !== undefined) {
            return [indexMap[complement], i];
        }
        indexMap[nums[i]] = i;
    }
    return [];
}
```

### 💡 Solution 4: Using Array.prototype.findIndex()

```javascript
function twoSumFindIndex(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const complementIndex = nums.slice(i + 1).findIndex(num => num === complement);
        if (complementIndex !== -1) {
            return [i, i + 1 + complementIndex];
        }
    }
    return [];
}
```

### 💡 Solution 5: Using Two-Pointer Technique (Sorted Array)

```javascript
function twoSumTwoPointer(nums, target) {
    const sortedNums = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num);
    let left = 0;
    let right = sortedNums.length - 1;
    
    while (left < right) {
        const sum = sortedNums[left].num + sortedNums[right].num;
        if (sum === target) {
            return [sortedNums[left].index, sortedNums[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}
```

### 💡 Solution 6: Using Array.prototype.reduce()

```javascript
function twoSumReduce(nums, target) {
    const seen = {};
    return nums.reduce((result, num, index) => {
        const complement = target - num;
        if (complement in seen) {
            result = [seen[complement], index];
        }
        seen[num] = index;
        return result;
    }, []);
}
```

### 💡 Solution 7: Using a Map with a Custom Object

```javascript
function twoSumMapObject(nums, target) {
    const indexMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (indexMap.has(complement)) {
            return [indexMap.get(complement), i];
        }
        indexMap.set(nums[i], i);
    }
    return [];
}
```

### 💡 Solution 8: Using a Set for Seen Values

```javascript
function twoSumSet(nums, target) {
    const seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [nums.indexOf(complement), i];
        }
        seen.add(nums[i]);
    }
    return [];
}
```

### 💡 Solution 9: Using Array.prototype.indexOf() for Lookup

```javascript
function twoSumIndexOf(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const complementIndex = nums.indexOf(complement, i + 1);
        if (complementIndex !== -1) {
            return [i, complementIndex];
        }
    }
    return [];
}
```

### 💡 Solution 10: Using a Binary Search Approach (Requires Sorted Array)

```javascript
function twoSumBinarySearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const complementIndex = binarySearch(nums, complement, i + 1);
        if (complementIndex !== -1) {
            return [i, complementIndex];
        }
    }
    return [];
}


function binarySearch(arr, target, start) {
    let left = start;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```

### 💡 Solution 11: Using Array.prototype.forEach()

```javascript
function twoSumForEach(nums, target) {
    const indexMap = {};
    let result = [];
    
    nums.forEach((num, i) => {
        const complement = target - num;
        if (indexMap[complement] !== undefined) {
            result = [indexMap[complement], i];
        }
        indexMap[num] = i;
    });
    
    return result;
}
```

### 💡 Solution 12: Using Array.prototype.some()

```javascript
function twoSumSome(nums, target) {
    let result = [];
    nums.some((num, i) => {
        const complement = target - num;
        const index = nums.slice(i + 1).indexOf(complement);
        if (index !== -1) {
            result = [i, i + 1 + index];
            return true;  // Exit early when found
        }
        return false;
    });
    return result;
}
```

### 💡 Solution 13: Using Array.prototype.map() and Array.prototype.find()

```javascript
function twoSumMapFind(nums, target) {
    const numMap = nums.map((num, i) => ({ num, index: i }));
    for (let i = 0; i < numMap.length; i++) {
        const complement = target - numMap[i].num;
        const complementObj = numMap.find(obj => obj.num === complement && obj.index !== numMap[i].index);
        if (complementObj) {
            return [numMap[i].index, complementObj.index];
        }
    }
    return [];
}
```

### 💡 Solution 14: Using a Generator Function

```javascript
function twoSumGenerator(nums, target) {
    for (const [i, j] of generatePairs(nums)) {
        if (nums[i] + nums[j] === target) {
            return [i, j];
        }
    }
    return [];
}

function* generatePairs(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            yield [i, j];
        }
    }
}
```

### 💡 Solution 15: Using Array.prototype.filter()

```javascript
function twoSumFilter(nums, target) {
    const indices = nums.map((num, i) => i);
    for (let i = 0; i < indices.length; i++) {
        const firstIndex = indices[i];
        const complement = target - nums[firstIndex];
        const secondIndex = indices.slice(i + 1).find(idx => nums[idx] === complement);
        if (secondIndex !== undefined) {
            return [firstIndex, indices.indexOf(secondIndex, i + 1)];
        }
    }
    return [];
}
```

### 💡 Solution 16: Using Array.prototype.map() and Index Lookup

```javascript
function twoSumMapLookup(nums, target) {
    const numToIndex = nums.reduce((acc, num, i) => {
        acc[num] = i;
        return acc;
    }, {});
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.hasOwnProperty(complement) && numToIndex[complement] !== i) {
            return [i, numToIndex[complement]];
        }
    }
    return [];
}
```