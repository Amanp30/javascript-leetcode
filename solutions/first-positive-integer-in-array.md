#  Get first positive integer in array

## 📝 Problem

Write a function to find the first positive integer in an array. If no positive integer is found, return `null`.

**Input:** \[-8, -6, 4, 6, 9, 3\];

**Output :** 4


## 📌 Examples

### Example 1

**Input:** array = [-8, -6, 4, 6, 9, 3]  
**Output:** 4

---

## ✅ Solutions

### 💡 Solution 1: Using filter Method

```javascript
function findFirstPositiveFilter(arr) {
  const positives = arr.filter(val => val > 0);
  return positives.length > 0 ? positives[0] : null;
}
```

### 💡 Solution 2: Using find Method

```javascript
function findFirstPositiveFind(arr) {
  return arr.find(val => val > 0) ?? null;
}
```

### 💡 Solution 3: Using map and filter

```javascript
function findFirstPositiveMapFilter(arr) {
  return arr.map(val => (val > 0 ? val : null)).filter(val => val !== null)[0] ?? null;
}
```

### 💡 Solution 4: Using Iterative for Loop

```javascript
function findFirstPositiveForLoop(arr) {
  for (const num of arr) {
    if (num > 0) return num;
  }
  return null;
}
```

### 💡 Solution 5: Using forEach Method

```javascript
function findFirstPositiveForEach(arr) {
  let result = null;
  arr.forEach(val => {
    if (val > 0 && result === null) {
      result = val;
    }
  });
  return result;
}
```

### 💡 Solution 6: Using reduce Method

```javascript
function findFirstPositiveReduce(arr) {
  return arr.reduce((firstPositive, val) => {
    return firstPositive !== null ? firstPositive : (val > 0 ? val : null);
  }, null);
}
```

### 💡 Solution 7: Using some Method

```javascript
function findFirstPositiveSome(arr) {
  let result = null;
  arr.some(val => {
    if (val > 0) {
      result = val;
      return true;
    }
    return false;
  });
  return result;
}
```

### 💡 Solution 8: Using while Loop

```javascript
function findFirstPositiveWhileLoop(arr) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] > 0) return arr[index];
    index++;
  }
  return null;
}
```