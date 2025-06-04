# Leaders in an Array

## 📝 Problem

Write a javascript function that find leaders from an input array.

In an array, an element is considered a "leader" if it is greater than all the elements to its right. To find all the leader elements in an array, you can use various approaches. I'll outline a few methods and provide a code example for each.


## 📌 Examples

### Example 1

**Input:** array = [16, 17, 4, 3, 5, 2]  
**Output:** [17, 5, 2]

### Example 2

**Input:** array = [7, 10, 4, 3, 6, 5]  
**Output:** [10, 6, 5]

### Example 3

**Input:** array = [2]  
**Output:** [2]

### Example 4

**Input:** array = []  
**Output:** ❌ Throw error => Input must be a non-empty array

---

## ✅ Solutions

### 💡 Solution 1: Find Leaders Using a Single Pass

```javascript
function findLeaders(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    const leaders = [];
    let maxFromRight = arr[arr.length - 1];
    leaders.push(maxFromRight);

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            maxFromRight = arr[i];
            leaders.push(maxFromRight);
        }
    }

    return leaders.reverse();
}
```

### 💡 Solution 2: Find Leaders Using Brute Force Approach

```javascript
function findLeadersBruteForce(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    const leaders = [];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let isLeader = true;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] <= arr[j]) {
                isLeader = false;
                break;
            }
        }
        if (isLeader) {
            leaders.push(arr[i]);
        }
    }

    return leaders;
}
```

### 💡 Solution 3: Find Leaders Using a Stack

```javascript
function findLeadersUsingStack(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    const leaders = [];
    const stack = [];
    const n = arr.length;

    // Traverse the array from right to left
    for (let i = n - 1; i >= 0; i--) {
        // If the stack is empty or the current element is greater than the top of the stack
        if (stack.length === 0 || arr[i] > stack[stack.length - 1]) {
            stack.push(arr[i]);
        }
    }

    // The stack will have the leaders in reverse order, so reverse it
    return stack.reverse();
}
```

### 💡 Solution 4: Leaders in an array solution Using Divide and Conquer

```javascript
function findLeadersDivideAndConquer(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    function findLeadersInRange(start, end) {
        if (start === end) return [arr[start]];

        const mid = Math.floor((start + end) / 2);
        const leftLeaders = findLeadersInRange(start, mid);
        const rightLeaders = findLeadersInRange(mid + 1, end);
        
        let rightMax = Math.max(...rightLeaders);
        return leftLeaders.filter(x => x > rightMax).concat(rightLeaders);
    }

    return findLeadersInRange(0, arr.length - 1);
}
```

### 💡 Solution 5: Find Leaders Using Functional Programming (Map and Filter)

```javascript
function findLeadersUsingFunctional(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    const maxFromRight = [];
    let currentMax = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > currentMax) {
            currentMax = arr[i];
            maxFromRight[i] = arr[i];
        } else {
            maxFromRight[i] = currentMax;
        }
    }

    return arr.filter((value, index) => value === maxFromRight[index]);
}
```

### 💡 Solution 6: Using a Helper Array

```javascript
function findLeadersUsingHelperArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    const n = arr.length;
    const maxFromRight = new Array(n);
    maxFromRight[n - 1] = arr[n - 1];

    // Fill the maxFromRight array
    for (let i = n - 2; i >= 0; i--) {
        maxFromRight[i] = Math.max(arr[i], maxFromRight[i + 1]);
    }

    // Find leaders
    const leaders = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] > maxFromRight[i + 1] || i === n - 1) {
            leaders.push(arr[i]);
        }
    }

    return leaders;
}
```

### 💡 Solution 7: Using an Object to Track Maximums

```javascript
function findLeadersUsingObject(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    const leaders = [];
    let maxFromRight = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            leaders.push(arr[i]);
            maxFromRight = arr[i];
        }
    }

    return leaders.reverse();
}
```

### 💡 Solution 8: Using Functional Programming (Reduce and Filter)

```javascript
function findLeadersUsingFunctionalReduce(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    // Compute maximum values from the right
    const maxFromRight = arr.reduceRight((acc, current, index) => {
        if (current > acc.max) {
            acc.max = current;
            acc.leaders.push(current);
        }
        return acc;
    }, { max: -Infinity, leaders: [] });

    return maxFromRight.leaders.reverse();
}
```

### 💡 Solution 9: Using JavaScript Set

```javascript
function findLeadersUsingSet(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    const leaders = new Set();
    let maxFromRight = arr[arr.length - 1];
    leaders.add(maxFromRight);

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            maxFromRight = arr[i];
            leaders.add(maxFromRight);
        }
    }

    return Array.from(leaders).reverse();
}
```