# Find the largest number in array

## 📝 Problem

Given an array of numbers, you need to find the largest number in the array. The function should handle various scenarios, including arrays with negative numbers, floating-point numbers, and edge cases like empty arrays or invalid inputs.


## 📌 Examples

### Example 1

**Input:** array = [1, 5, 3, 7, 2]  
**Output:** 7

### Example 2

**Input:** array = []  
**Output:** ❌ Throw error => Input is not a valid array or array is empty

### Example 3

**Input:** string = "aman"  
**Output:** ❌ Throw error => Input is not a valid array or array is empty

### Example 4

**Input:** array = [-5, 8, 9, 20]  
**Output:** 20

---

## ✅ Solutions

### 💡 Solution 1: Using Math.max with Spread Operator

```javascript
function findLargestNumber(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    return Math.max(...nums);
}
```

### 💡 Solution 2: Using reduce Method

```javascript
function findLargestNumberReduce(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    return nums.reduce((max, current) => {
        if (current > max) {
            return current;
        }
        return max;
    }, nums[0]);
}
```

### 💡 Solution 3: Using a Loop

```javascript
function findLargestNumberLoop(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
}
```

### 💡 Solution 4: Using forEach Method

```javascript
function findLargestNumberForEach(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    let largest = nums[0];
    nums.forEach(num => {
        if (num > largest) {
            largest = num;
        }
    });
    return largest;
}
```

### 💡 Solution 5: Using Array.prototype.sort

```javascript
function findLargestNumberSort(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    return nums.slice().sort((a, b) => b - a)[0];
}
```

### 💡 Solution 6: Using Math.max with apply

```javascript
function findLargestNumberApply(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    return Math.max.apply(null, nums);
}
```

### 💡 Solution 7: Using for...of Loop

```javascript
function findLargestNumberForOf(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    let largest = nums[0];
    for (const num of nums) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}
```

### 💡 Solution 8: Using while Loop

```javascript
function findLargestNumberWhile(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    let largest = nums[0];
    let index = 1;
    while (index < nums.length) {
        if (nums[index] > largest) {
            largest = nums[index];
        }
        index++;
    }
    return largest;
}
```

### 💡 Solution 9: Using find Method

```javascript
function findLargestNumberFind(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    let largest = nums[0];
    nums.find(num => {
        if (num > largest) {
            largest = num;
        }
        return false;
    });
    return largest;
}
```

### 💡 Solution 10: Using map and reduce Together

```javascript
function findLargestNumberMapReduce(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error('Input is not a valid array or array is empty');
    }
    return nums.map(num => num).reduce((max, current) => current > max ? current : max, nums[0]);
}
```