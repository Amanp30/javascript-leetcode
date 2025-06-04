# Check if a String Contains Only Digits

## 📝 Problem

Write a function that checks whether a given string consists exclusively of digit characters (i.e., `0` through `9`). The function should return `true` if the string contains only digits, and `false`


## 📌 Examples

### Example 1

**Input:** str = "689454545454"  
**Output:** true

### Example 2

**Input:** str = "he is 24 years old"  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Using Regular Expression

```javascript
function isOnlyDigitsUsingRegex(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  const re = /^\d+$/;
  return re.test(str);
}
```

### 💡 Solution 2: Using Array.prototype.every

```javascript
function isOnlyDigitsUsingEvery(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  return [...str].every(char => char >= '0' && char <= '9');
}
```

### 💡 Solution 3: Using Array.prototype.some

```javascript
function isOnlyDigitsUsingSome(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  return ![...str].some(char => char < '0' || char > '9');
}
```

### 💡 Solution 4: Using Array.prototype.filter

```javascript
function isOnlyDigitsUsingFilter(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  return str.split("").filter(char => char < '0' || char > '9').length === 0;
}
```

### 💡 Solution 5: Using for Loop

```javascript
function isOnlyDigitsUsingForLoop(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
      return false;
    }
  }
  return true;
}
```

### 💡 Solution 6: Using String.prototype.match

```javascript
function isOnlyDigitsUsingMatch(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  return str.match(/^\d+$/) !== null;
}
```

### 💡 Solution 7: Using String.prototype.replace

```javascript
function isOnlyDigitsUsingReplace(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  return str.replace(/^\d+$/, '') === '';
}
```

### 💡 Solution 8: Using Number Conversion

```javascript
function isOnlyDigitsUsingNumberConversion(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  return !isNaN(Number(str)) && Number(str).toString() === str;
}
```

### 💡 Solution 9: Using parseInt

```javascript
function isOnlyDigitsUsingParseInt(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  return str === parseInt(str, 10).toString();
}
```

### 💡 Solution 10: Using Set

```javascript
function isOnlyDigitsUsingSet(str) {
  if (typeof str !== 'string') {
    throw new Error("Your input is not a string");
  }
  const digits = new Set('0123456789');
  return [...str].every(char => digits.has(char));
}
```