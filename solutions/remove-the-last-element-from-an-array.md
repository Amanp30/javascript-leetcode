# Remove the Last Element from an Array

## 📝 Problem

Write a function that takes an array as input and returns a new array with the last element removed. The original array should not be modified. Your solution should return a new array that contains all the elements of the input array except for the last one.


## 📌 Examples

### Example 1

**Input:** array = [1, 2, 3, 4, 5]  
**Output:** [1, 2, 3, 4]

---

## ✅ Solutions

### 💡 Solution 1: Using slice() Method

```javascript
function removeLastElementWithSlice(arr) {
  return arr.slice(0, -1);
}
```

### 💡 Solution 2: Using filter() Method

```javascript
function removeLastElementWithFilter(arr) {
  return arr.filter((_, index) => index < arr.length - 1);
}
```

### 💡 Solution 3: Using Array.from() Method

```javascript
function removeLastElementWithArrayFrom(arr) {
  return Array.from(arr).slice(0, -1);
}
```

### 💡 Solution 4: Using map() and slice()

```javascript
function removeLastElementWithMap(arr) {
  return arr.map((item, index) => (index < arr.length - 1 ? item : null)).filter(item => item !== null);
}
```

### 💡 Solution 5: Using reduce() Method

```javascript
function removeLastElementWithReduce(arr) {
  return arr.reduce((acc, item, index) => {
    if (index < arr.length - 1) acc.push(item);
    return acc;
  }, []);
}
```

### 💡 Solution 6: Using for Loop

```javascript
function removeLastElementWithForLoop(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}
```

### 💡 Solution 7: Using for...of Loop

```javascript
function removeLastElementWithForOf(arr) {
  let newArray = [];
  let index = 0;
  for (const item of arr) {
    if (index < arr.length - 1) {
      newArray.push(item);
    }
    index++;
  }
  return newArray;
}
```

### 💡 Solution 8: Using splice() Method

```javascript
function removeLastElementWithSplice(arr) {
  return arr.slice(0, -1);
}
```

### 💡 Solution 9: Using concat() and slice()

```javascript
function removeLastElementWithConcat(arr) {
  return [].concat(arr.slice(0, -1));
}
```

### 💡 Solution 10: Using Destructuring Assignment

```javascript
function removeLastElementWithDestructuring(arr) {
  const [ ...newArray ] = arr;
  newArray.pop(); // Removes the last element
  return newArray;
}
```