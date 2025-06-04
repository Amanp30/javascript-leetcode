# Contains Duplicate II

## 📝 Problem

You have an array of integers, `nums`, and an integer, `k`. Your task is to determine if there are two different indices `i` and `j` in the array such that:

1.  The values at these indices are the same (`nums[i] === nums[j]`).
    
2.  The absolute difference between these indices is at most `k` (`|i - j| <= k`).
    

If such indices exist, return `true`; otherwise, return `false`.


## 📌 Examples

### Example 1

**Input:** nums = [1, 2, 3, 1], k = 3  
**Output:** true

### Example 2

**Input:** nums = [1, 0, 1, 1], k = 1  
**Output:** true

### Example 3

**Input:** nums = [1, 2, 3, 1, 2, 3], k = 2  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Hash Map Approach

```javascript
function containsNearbyDuplicateWithHashMap(nums, k) {
    const indexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (indexMap.has(nums[i])) {
            const prevIndex = indexMap.get(nums[i]);
            if (i - prevIndex <= k) {
                return true;
            }
        }
        indexMap.set(nums[i], i);
    }

    return false;
}
```

### 💡 Solution 2: Sliding Window Approach

```javascript
function containsNearbyDuplicateWithSlidingWindow(nums, k) {
    const window = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (window.has(nums[i])) {
            return true;
        }
        window.add(nums[i]);
        if (window.size > k) {
            window.delete(nums[i - k]);
        }
    }

    return false;
}
```

### 💡 Solution 3: Optimized Hash Map Approach

```javascript
function containsNearbyDuplicateOptimizedHashMap(nums, k) {
    const indexMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (indexMap.hasOwnProperty(nums[i])) {
            if (i - indexMap[nums[i]] <= k) {
                return true;
            }
        }
        indexMap[nums[i]] = i;
    }

    return false;
}
```

### 💡 Solution 4: Using JavaScript Set for Window Size

```javascript
function containsNearbyDuplicateWithSet(nums, k) {
    const seen = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
        if (seen.size > k) {
            seen.delete(nums[i - k]);
        }
    }

    return false;
}
```

### 💡 Solution 5: Brute Force Approach

```javascript
function containsNearbyDuplicateBruteForce(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length && j <= i + k; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}
```

### 💡 Solution 6: Using Fixed-Size Window with Array

```javascript
function containsNearbyDuplicateWithFixedSizeArray(nums, k) {
    const window = Array(k + 1).fill(null);

    for (let i = 0; i < nums.length; i++) {
        const index = nums[i] % (k + 1);
        if (window[index] !== null) {
            return true;
        }
        window[index] = nums[i];
        if (i >= k) {
            window[nums[i - k] % (k + 1)] = null;
        }
    }

    return false;
}
```

### 💡 Solution 7: Using Priority Queue

```javascript
function containsNearbyDuplicateWithPriorityQueue(nums, k) {
    const pq = new PriorityQueue();

    for (let i = 0; i < nums.length; i++) {
        if (pq.contains(nums[i])) {
            return true;
        }
        pq.add(nums[i]);
        if (i >= k) {
            pq.remove(nums[i - k]);
        }
    }

    return false;
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    add(value) {
        this.queue.push(value);
        this.queue.sort((a, b) => a - b);
    }

    remove(value) {
        this.queue = this.queue.filter(item => item !== value);
    }

    contains(value) {
        return this.queue.includes(value);
    }
}
```

### 💡 Solution 8: Using Deque

```javascript
function containsNearbyDuplicateWithDeque(nums, k) {
    const deque = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < deque.length; j++) {
            if (nums[deque[j]] === nums[i] && i - deque[j] <= k) {
                return true;
            }
        }
        deque.push(i);
        if (deque.length > k) {
            deque.shift();
        }
    }

    return false;
}
```

### 💡 Solution 9: Recursion

```javascript
function containsNearbyDuplicateRecursion(nums, k) {
    function checkDuplicates(nums, k, index, map) {
        if (index === nums.length) {
            return false;
        }

        const num = nums[index];
        if (map.has(num) && Math.abs(index - map.get(num)) <= k) {
            return true;
        }

        map.set(num, index);
        return checkDuplicates(nums, k, index + 1, map);
    }

    return checkDuplicates(nums, k, 0, new Map());
}
```

### 💡 Solution 10: Efficient Lookup for Nearby Duplicates using Map

```javascript
function containsNearbyDuplicate(nums, k) {
    const indexMap = new Map(); // num: [index1, index2, ...]

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const indices = indexMap.get(num);

        if (indices) {
            const lastIndex = indices[indices.length - 1];
            // Checking if the distance between indices is within the given limit
            if (Math.abs(lastIndex - i) <= k) {
                return true;
            }
        }

        if (!indexMap.has(num)) {
            indexMap.set(num, []);
        }
        indexMap.get(num).push(i);
    }

    return false;
}
```