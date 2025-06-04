# Max Consecutive Ones

## 📝 Problem

You are given a binary array, `nums`, consisting of only `0`s and `1`s. Your task is to determine the maximum number of consecutive `1`s present in this array.

**Details:**

*   **Input:** A binary array `nums` where `1 <= nums.length <= 100,000`. Each element in the array is either `0` or `1`.
    
*   **Output:** An integer representing the longest sequence of consecutive `1`s in the given array.


## 📌 Examples

### Example 1

**Input:** nums = [1,1,0,1,1,1]  
**Output:** 3

### Example 2

**Input:** nums = [1,0,1,1,0,1]  
**Output:** 2

---

## ✅ Solutions

### 💡 Solution 1: Simple Iteration Approach

```javascript
function maxConsecutiveOnesSimple(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (const num of nums) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}
```

### 💡 Solution 2: Sliding Window Approach

```javascript
function maxConsecutiveOnesSlidingWindow(nums) {
    let left = 0;
    let right = 0;
    let maxCount = 0;

    while (right < nums.length) {
        if (nums[right] === 1) {
            right++;
        } else {
            maxCount = Math.max(maxCount, right - left);
            right++;
            left = right;
        }
    }

    maxCount = Math.max(maxCount, right - left);
    return maxCount;
}
```

### 💡 Solution 3: Two Pointers Approach

```javascript
function maxConsecutiveOnesTwoPointers(nums) {
    let maxCount = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            left = right + 1;
        }
        maxCount = Math.max(maxCount, right - left + 1);
    }

    return maxCount;
}
```

### 💡 Solution 4: Using Reduce

```javascript
function maxConsecutiveOnesReduce(nums) {
    let maxCount = 0;
    let currentCount = 0;

    nums.reduce((_, num) => {
        if (num === 1) {
            currentCount++;
        } else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
        maxCount = Math.max(maxCount, currentCount);
    }, 0);

    return maxCount;
}
```

### 💡 Solution 5: Using Regular Expressions

```javascript
function maxConsecutiveOnesRegex(nums) {
    const binaryString = nums.join('');
    const match = binaryString.match(/1+/g) || [];
    const maxCount = Math.max(...match.map(seq => seq.length));
    return maxCount;
}
```

### 💡 Solution 6: Using Binary Search

```javascript
function maxConsecutiveOnesBinarySearch(nums) {
    const countOnes = (arr) => {
        let maxCount = 0;
        let currentCount = 0;
        for (const num of arr) {
            if (num === 1) {
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }
        return maxCount;
    };

    let maxCount = countOnes(nums);
    return maxCount;
}
```

### 💡 Solution 7: Using Dynamic Programming

```javascript
function maxConsecutiveOnesDP(nums) {
    if (nums.length === 0) return 0;

    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let maxCount = dp[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === 1) {
            dp[i] = dp[i - 1] + 1;
        } else {
            dp[i] = 0;
        }
        maxCount = Math.max(maxCount, dp[i]);
    }

    return maxCount;
}
```

### 💡 Solution 8: Using a Stack

```javascript
function maxConsecutiveOnesStack(nums) {
    let stack = [];
    let maxCount = 0;

    for (const num of nums) {
        if (num === 1) {
            stack.push(1);
        } else {
            if (stack.length > 0) {
                maxCount = Math.max(maxCount, stack.length);
                stack = [];
            }
        }
    }

    maxCount = Math.max(maxCount, stack.length);
    return maxCount;
}
```

### 💡 Solution 9: Using a Map to Count Ones

```javascript
function maxConsecutiveOnesMap(nums) {
    const counts = new Map();
    let currentCount = 0;
    let maxCount = 0;

    for (const num of nums) {
        if (num === 1) {
            currentCount++;
        } else {
            counts.set(currentCount, (counts.get(currentCount) || 0) + 1);
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }

    counts.set(currentCount, (counts.get(currentCount) || 0) + 1);
    maxCount = Math.max(maxCount, currentCount);
    
    return maxCount;
}
```

### 💡 Solution 10: Using a Set

```javascript
function maxConsecutiveOnesSet(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (const num of nums) {
        if (num === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}
```