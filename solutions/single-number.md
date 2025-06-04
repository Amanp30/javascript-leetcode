# Single Number

## 📝 Problem

You are given a non-empty array of integers, `nums`. In this array, every element appears exactly twice except for one unique element which appears only once. Your task is to identify and return this unique element.


## 📌 Examples

### Example 1

**Input:** array = [2,2,1]  
**Output:** 1

### Example 2

**Input:** array = [4,1,2,1,2]  
**Output:** 4

---

## ✅ Solutions

### 💡 Solution 1: Using XOR Operator

```javascript
function singleNumberXOR(nums) {
    let unique = 0;
    for (const num of nums) {
        unique ^= num;
    }
    return unique;
}
```

### 💡 Solution 2: Using a Set

```javascript
function singleNumberSet(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            seen.delete(num);
        } else {
            seen.add(num);
        }
    }
    return [...seen][0];
}
```

### 💡 Solution 3: Using a Hash Map

```javascript
function singleNumberHashMap(nums) {
    const counts = new Map();
    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    for (const [num, count] of counts) {
        if (count === 1) {
            return num;
        }
    }
}
```

### 💡 Solution 4: Using Sorting

```javascript
function singleNumberSort(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
    return nums[nums.length - 1]; // The last element is the unique one if not found in the loop
}
```

### 💡 Solution 5: Using Array.prototype.reduce()

```javascript
function singleNumberReduce(nums) {
    return nums.reduce((unique, num) => unique ^ num, 0);
}
```

### 💡 Solution 6: Using Map with Count

```javascript
function singleNumberMapCount(nums) {
    const countMap = new Map();
    nums.forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });
    for (const [num, count] of countMap.entries()) {
        if (count === 1) {
            return num;
        }
    }
}
```

### 💡 Solution 7: Using Array.prototype.filter()

```javascript
function singleNumberFilter(nums) {
    return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num))[0];
}
```

### 💡 Solution 8: Using Array.prototype.reduce() with Object

```javascript
function singleNumberReduceObject(nums) {
    const countObj = nums.reduce((obj, num) => {
        obj[num] = (obj[num] || 0) + 1;
        return obj;
    }, {});
    return +Object.keys(countObj).find(key => countObj[key] === 1);
}
```

### 💡 Solution 9: Using a Custom Class with a Set

```javascript
function singleNumberCustomClass(nums) {
    const finder = new SingleNumberFinder();
    nums.forEach(num => finder.add(num));
    return finder.getUnique();
}


class SingleNumberFinder {
    constructor() {
        this.set = new Set();
    }

    add(num) {
        if (this.set.has(num)) {
            this.set.delete(num);
        } else {
            this.set.add(num);
        }
    }

    getUnique() {
        return [...this.set][0];
    }
}
```

### 💡 Solution 10: Using Array.prototype.forEach() with Object

```javascript
function singleNumberForEach(nums) {
    const countMap = {};
    nums.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });
    return +Object.keys(countMap).find(key => countMap[key] === 1);
}
```

### 💡 Solution 11: Using Array.prototype.find() with a Hash Set

```javascript
function singleNumberFindSet(nums) {
    const seen = new Set();
    const duplicates = new Set();
    
    nums.forEach(num => {
        if (seen.has(num)) {
            duplicates.add(num);
        }
        seen.add(num);
    });
    
    return [...seen].find(num => !duplicates.has(num));
}
```

### 💡 Solution 12: Using Array.prototype.reduce() with a Map

```javascript
function singleNumberReduceMap(nums) {
    const countMap = nums.reduce((map, num) => {
        map.set(num, (map.get(num) || 0) + 1);
        return map;
    }, new Map());
    
    for (const [num, count] of countMap) {
        if (count === 1) {
            return num;
        }
    }
}
```

### 💡 Solution 13: Using a Frequency Array

```javascript
function singleNumberFrequencyArray(nums) {
    // Create a map to store the frequency of each number
    const frequencyMap = new Map();
    
    // Count occurrences of each number
    nums.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
    
    // Find the number that appears exactly once
    for (const [num, count] of frequencyMap) {
        if (count === 1) {
            return num;
        }
    }
}
```

### 💡 Solution 14: Using Array.prototype.indexOf()

```javascript
function singleNumberIndexOf(nums) {
    return nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num));
}
```