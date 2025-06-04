# Majority Element

## 📝 Problem

You have an array `nums` with `n` elements, and you need to find the majority element. The majority element is the one that appears more than `⌊n / 2⌋` times in the array. For this problem, you can trust that there will always be a majority element in the array.


## 📌 Examples

### Example 1

**Input:** nums = [3, 2, 3]  
**Output:** 3

### Example 2

**Input:** nums = [2, 2, 1, 1, 1, 2, 2]  
**Output:** 2

---

## ✅ Solutions

### 💡 Solution 1: Boyer-Moore Voting Algorithm

```javascript
function majorityElementBoyer(nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate ? 1 : -1);
    }

    return candidate;
}
```

### 💡 Solution 2: Hash Map Approach

```javascript
function majorityElementHashMap(nums) {
    const counts = new Map();

    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
        if (counts.get(num) > nums.length / 2) {
            return num;
        }
    }
}
```

### 💡 Solution 3: Sorting Approach

```javascript
function majorityElementSorting(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}
```

### 💡 Solution 4: Divide and Conquer Approach

```javascript
function majorityElementDivideConquer(nums) {
    function majorityElementRec(start, end) {
        if (start === end) {
            return nums[start];
        }
        
        const mid = Math.floor((start + end) / 2);
        const left = majorityElementRec(start, mid);
        const right = majorityElementRec(mid + 1, end);

        if (left === right) {
            return left;
        }

        const leftCount = nums.slice(start, end + 1).filter(x => x === left).length;
        const rightCount = nums.slice(start, end + 1).filter(x => x === right).length;

        return leftCount > rightCount ? left : right;
    }

    return majorityElementRec(0, nums.length - 1);
}
```

### 💡 Solution 5: Naive Approach

```javascript
function majorityElement(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                count++;
            }
        }
        if (count > nums.length / 2) {
            return nums[i];
        }
    }
}
```

### 💡 Solution 6: Using a Counter Object

```javascript
function majorityElementCounterObj(nums) {
    const count = {};
    const majorityCount = nums.length / 2;

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > majorityCount) {
            return num;
        }
    }
}
```

### 💡 Solution 7: Bit Manipulation Approach

```javascript
function majorityElementBitManipulation(nums) {
    const majorityCount = nums.length / 2;
    const bitLength = 32; // Assume 32-bit integers

    let majority = 0;

    for (let bit = 0; bit < bitLength; bit++) {
        let count = 0;
        for (const num of nums) {
            if ((num & (1 << bit)) !== 0) {
                count++;
            }
        }
        if (count > majorityCount) {
            majority |= (1 << bit);
        }
    }

    return majority;
}
```

### 💡 Solution 8: Using Priority Queue

```javascript
function majorityElementPriorityQueue(nums) {
    const count = new Map();
    const majorityCount = nums.length / 2;
    
    // Count occurrences of each number
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    // Use a priority queue to find the majority element
    const minHeap = [];
    
    count.forEach((value, key) => {
        minHeap.push({key, value});
    });
    
    minHeap.sort((a, b) => b.value - a.value); // Sort by frequency in descending order
    
    return minHeap[0].key; // Return the majority element
}
```

### 💡 Solution 9: Randomized Approach

```javascript
function majorityElementRandomized(nums) {
    function findMajority(candidate, nums) {
        let count = 0;
        for (const num of nums) {
            if (num === candidate) {
                count++;
            }
        }
        return count > nums.length / 2;
    }
    
    let candidate;
    while (true) {
        candidate = nums[Math.floor(Math.random() * nums.length)];
        if (findMajority(candidate, nums)) {
            return candidate;
        }
    }
}
```