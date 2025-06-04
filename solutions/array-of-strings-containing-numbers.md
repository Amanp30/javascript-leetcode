# Array of strings containing numbers

## 📝 Problem

Create a JavaScript function that returns a new array containing only the strings from the original array that include numeric characters.

const input = \["hey", "age = 12", "pi = 3.14"\];


## 📌 Examples

### Example 1

**Input:** array =  ["hey", "age = 12", "pi = 3.14"]  
**Output:** ["age = 12", "pi = 3.14"]

---

## ✅ Solutions

### 💡 Solution 1: Using filter Method

```javascript
function method1(arr) {
  return arr.filter((v) => /[0-9]/g.test(v));
}
```

### 💡 Solution 2: Using forEach Method

```javascript
function method2(arr) {
  const result = [];
  arr.forEach((str) => {
    if (/[0-9]/g.test(str)) {
      result.push(str);
    }
  });
  return result;
}
```

### 💡 Solution 3: Using forEach with map for Transformation

```javascript
function extractNumericStrings(arr) {
  const result = [];
  arr.map(str => {
    if (/\d/.test(str)) {
      result.push(str);
    }
  });
  return result;
}
```