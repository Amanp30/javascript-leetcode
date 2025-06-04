# Three Consecutive Odds

## 📝 Problem

You are given an integer array `arr`. Your task is to determine if there are three consecutive odd numbers anywhere in the array. If such a sequence exists, return `true`. If not, return `false`.


## 📌 Examples

### Example 1

**Input:** array = [2,6,4,1]  
**Output:** false

### Example 2

**Input:** array = [1,2,34,3,4,5,7,23,12]  
**Output:** true

---

## ✅ Solutions

### 💡 Solution 1: Basic Loop Approach

```javascript
function threeConsecutiveOddsBasicLoop(arr) {
    for (let index = 0; index < arr.length - 2; index++) {
        if (arr[index] % 2 !== 0 && arr[index + 1] % 2 !== 0 && arr[index + 2] % 2 !== 0) {
            return true;
        }
    }
    return false;
}
```

### 💡 Solution 2: Using Array.prototype.some()

```javascript
function threeConsecutiveOddsSome(arr) {
    return arr.some((_, idx) => idx <= arr.length - 3 &&
        arr[idx] % 2 !== 0 &&
        arr[idx + 1] % 2 !== 0 &&
        arr[idx + 2] % 2 !== 0
    );
}
```

### 💡 Solution 3: Sliding Window Approach

```javascript
function threeConsecutiveOddsSlidingWindow(arr) {
    let oddCount = 0;
    for (const value of arr) {
        if (value % 2 !== 0) {
            oddCount++;
            if (oddCount === 3) return true;
        } else {
            oddCount = 0;
        }
    }
    return false;
}
```

### 💡 Solution 4: Using Array.prototype.filter()

```javascript
function threeConsecutiveOddsFilter(arr) {
    let filteredOdds = arr.filter(number => number % 2 !== 0);
    for (let position = 0; position < filteredOdds.length - 2; position++) {
        if (filteredOdds[position + 1] === filteredOdds[position] + 2 &&
            filteredOdds[position + 2] === filteredOdds[position] + 4) {
            return true;
        }
    }
    return false;
}
```

### 💡 Solution 5: Using Array.prototype.reduce()

```javascript
function threeConsecutiveOddsReduce(arr) {
    let count = 0;
    return arr.reduce((found, current) => {
        if (current % 2 !== 0) {
            count++;
            if (count === 3) {
                return true;
            }
        } else {
            count = 0;
        }
        return found;
    }, false);
}
```

### 💡 Solution 6: Using Array.prototype.every()

```javascript
function threeConsecutiveOddsEvery(arr) {
    return arr.some((_, idx) => idx <= arr.length - 3 &&
        [arr[idx], arr[idx + 1], arr[idx + 2]].every(num => num % 2 !== 0)
    );
}
```

### 💡 Solution 7: Using a Custom Helper Function

```javascript
function threeConsecutiveOddsHelper(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) {
            return true;
        }
    }
    return false;
}

function isOdd(num) {
    return num % 2 !== 0;
}
```

### 💡 Solution 8: Using Array.prototype.find()

```javascript
function threeConsecutiveOddsFind(arr) {
    return arr.find((_, idx) => idx <= arr.length - 3 &&
        arr[idx] % 2 !== 0 &&
        arr[idx + 1] % 2 !== 0 &&
        arr[idx + 2] % 2 !== 0
    ) !== undefined;
}
```

### 💡 Solution 9: Using a Pointer Approach

```javascript
function threeConsecutiveOddsPointer(arr) {
    let start = 0;
    while (start <= arr.length - 3) {
        if (arr[start] % 2 !== 0 && arr[start + 1] % 2 !== 0 && arr[start + 2] % 2 !== 0) {
            return true;
        }
        start++;
    }
    return false;
}
```

### 💡 Solution 10: Using Array.prototype.findIndex()

```javascript
function threeConsecutiveOddsFindIndex(arr) {
    const index = arr.findIndex((_, idx) => 
        idx <= arr.length - 3 &&
        arr[idx] % 2 !== 0 &&
        arr[idx + 1] % 2 !== 0 &&
        arr[idx + 2] % 2 !== 0
    );
    return index !== -1;
}
```

### 💡 Solution 11: Using a Queue Approach

```javascript
function threeConsecutiveOddsQueue(arr) {
    let queue = [];
    for (const num of arr) {
        queue.push(num);
        if (queue.length > 3) {
            queue.shift();
        }
        if (queue.length === 3 && queue.every(n => n % 2 !== 0)) {
            return true;
        }
    }
    return false;
}
```

### 💡 Solution 12: Using Array.prototype.map() and Array.prototype.some()

```javascript
function threeConsecutiveOddsMap(arr) {
    const oddMap = arr.map(num => num % 2 !== 0);
    return oddMap.some((val, idx) => idx <= oddMap.length - 3 &&
        val && oddMap[idx + 1] && oddMap[idx + 2]
    );
}
```

### 💡 Solution 13: Using Array.prototype.forEach() with External State

```javascript
function threeConsecutiveOddsForEach(arr) {
    let count = 0;
    let result = false;
    arr.forEach(num => {
        if (num % 2 !== 0) {
            count++;
            if (count === 3) {
                result = true;
            }
        } else {
            count = 0;
        }
    });
    return result;
}
```

### 💡 Solution 14: Using a Recursion Approach

```javascript
function hasThreeConsecutiveOddsRecursive(arr, index = 0) {
    if (index > arr.length - 3) {
        return false;
    }
    if (arr[index] % 2 !== 0 && arr[index + 1] % 2 !== 0 && arr[index + 2] % 2 !== 0) {
        return true;
    }
    return hasThreeConsecutiveOddsRecursive(arr, index + 1);
}
```