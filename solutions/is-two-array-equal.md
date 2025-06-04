# Is array equal

## 📝 Problem

Write a function in javascript that check if two arrays are equal.


## 📌 Examples

### Example 1

**Input:** array1 = [5, 6, 9, 4, 5, 3, 3], array2 = [5, 6, 9, 4, 5, 3, 3]  
**Output:** true

### Example 2

**Input:** array1 = [1,5,9], array2 = [1,5,9,5,9]  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Iterative Comparison

```javascript
function method1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const faElem = arr1[i];
    const saElem = arr2[i];
    if (faElem !== saElem) return false;
  }
  return true;
}
```

### 💡 Solution 2: Using JSON.stringify()

```javascript
function method2(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
```

### 💡 Solution 3: Using Array.prototype.every()

```javascript
function method3(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
}
```

### 💡 Solution 4: Using Map for Counting Elements

```javascript
function method4(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const countMap1 = new Map();
  const countMap2 = new Map();

  for (const elem of arr1) countMap1.set(elem, (countMap1.get(elem) || 0) + 1);
  for (const elem of arr2) countMap2.set(elem, (countMap2.get(elem) || 0) + 1);

  for (const [key, value] of countMap1) {
    if (countMap2.get(key) !== value) return false;
  }
  return true;
}
```