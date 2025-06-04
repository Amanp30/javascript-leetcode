# Remove All Falsy Values from an Array

## 📝 Problem

Write a function to remove all falsy values from an array. In JavaScript, falsy values are values that are considered false when encountered in a Boolean context. These values include `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`.


## 📌 Examples

### Example 1

**Input:** array =  [0, "Hello", false, 42, "", NaN, true, null, "World"]  
**Output:** ["Hello", 42, true, "World"]

---

## ✅ Solutions

### 💡 Solution 1: Using filter Method

```javascript
function removeFalsyValuesFilter(arr) {
  return arr.filter(Boolean);
}
```

### 💡 Solution 2: Using for Loop

```javascript
function removeFalsyValuesForLoop(arr) {
  const result = [];
  for (const value of arr) {
    if (value) {
      result.push(value);
    }
  }
  return result;
}
```

### 💡 Solution 3: Using forEach Method

```javascript
function removeFalsyValuesForEach(arr) {
  const result = [];
  arr.forEach(value => {
    if (value) {
      result.push(value);
    }
  });
  return result;
}
```

### 💡 Solution 4: Using reduce Method

```javascript
function removeFalsyValuesReduce(arr) {
  return arr.reduce((acc, value) => {
    if (value) {
      acc.push(value);
    }
    return acc;
  }, []);
}
```

### 💡 Solution 5: Using while Loop

```javascript
function removeFalsyValuesWhileLoop(arr) {
  const result = [];
  let index = 0;
  while (index < arr.length) {
    if (arr[index]) {
      result.push(arr[index]);
    }
    index++;
  }
  return result;
}
```

### 💡 Solution 6: Using map and filter

```javascript
function removeFalsyValuesMapFilter(arr) {
  return arr.map(value => value).filter(Boolean);
}
```

### 💡 Solution 7: Using some Method

```javascript
function removeFalsyValuesSome(arr) {
  const result = [];
  arr.some(value => {
    if (value) {
      result.push(value);
    }
    return false; // Continue checking all values
  });
  return result;
}
```

### 💡 Solution 8: Using Array.from with a Filter

```javascript
function removeFalsyValuesArrayFrom(arr) {
  return Array.from(arr).filter(Boolean);
}
```