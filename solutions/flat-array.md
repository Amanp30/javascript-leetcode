# Flatten array

## 📝 Problem

Write a function to flatten a nested array, so that all nested arrays are merged into a single array with all elements at the same level.


## 📌 Examples

### Example 1

**Input:** nestedArray = [1, 4, 5, [5, 6, 8, [4, 56]]]  
**Output:** [1, 4, 5, 5, 6, 8, 4, 56]

### Example 2

**Input:** nestedArray = [1 , 2 , [{"name":"John"}, 6]]  
**Output:** [1 , 2 , {"name":"John"}, 6]

---

## ✅ Solutions

### 💡 Solution 1: Using Recursive for Loop

```javascript
function method1(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      newArr.push(...method1(element));
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}
```

### 💡 Solution 2: Using Array.prototype.flat Method

```javascript
function flattenArrayFlat(arr) {
  return arr.flat(Infinity); // Infinity ensures all levels are flattened
}
```

### 💡 Solution 3: Using Array.prototype.reduce with Recursion

```javascript
function flattenArrayReduce(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArrayReduce(val) : val);
  }, []);
}
```

### 💡 Solution 4: Using a Stack for Iterative Flattening

```javascript
function flattenArrayStack(arr) {
  const stack = [...arr];
  const result = [];
  
  while (stack.length > 0) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }
  
  return result.reverse(); // Reverse to restore original order
}
```

### 💡 Solution 5: Using a Generator Function

```javascript
function* flattenArrayGenerator(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flattenArrayGenerator(item);
    } else {
      yield item;
    }
  }
}

function getFlattenedArray(arr) {
  return [...flattenArrayGenerator(arr)];
}
```

### 💡 Solution 6: Using forEach with Recursion

```javascript
function flattenArrayForEach(arr) {
  const result = [];
  
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flattenArrayForEach(item));
    } else {
      result.push(item);
    }
  });
  
  return result;
}
```