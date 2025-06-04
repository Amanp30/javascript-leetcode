# Check if a String Contains Only Uppercase Letters

## 📝 Problem

Write a function that determines if a given string contains only uppercase letters. The function should return `true` if the string is entirely uppercase and `false` otherwise.


## 📌 Examples

### Example 1

**Input:** str = "AMANPAREEK"  
**Output:** true

### Example 2

**Input:** str = "Aman"  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Using Regular Expression

```javascript
function isAllUppercaseUsingRegex(str) {
  return /^[A-Z]+$/.test(str);
}
```

### 💡 Solution 2: Using toUpperCase Method

```javascript
function isAllUppercaseUsingToUpperCase(str) {
  return str === str.toUpperCase();
}
```

### 💡 Solution 3: Using Array.prototype.every

```javascript
function isAllUppercaseUsingEvery(str) {
  return [...str].every(char => char >= 'A' && char <= 'Z');
}
```

### 💡 Solution 4: Using a for Loop

```javascript
function isAllUppercaseUsingForLoop(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] < 'A' || str[i] > 'Z') {
      return false;
    }
  }
  return true;
}
```

### 💡 Solution 5: Using String.prototype.match

```javascript
function isAllUppercaseUsingMatch(str) {
  return str.match(/^[A-Z]+$/) !== null;
}
```

### 💡 Solution 6: Using String.prototype.split and every

```javascript
function isAllUppercaseUsingSplitEvery(str) {
  return str.split('').every(char => char >= 'A' && char <= 'Z');
}
```

### 💡 Solution 7: Using Array.prototype.reduce

```javascript
function isAllUppercaseUsingReduce(str) {
  return [...str].reduce((allUppercase, char) => allUppercase && (char >= 'A' && char <= 'Z'), true);
}
```

### 💡 Solution 8: Using String.prototype.includes

```javascript
function isAllUppercaseUsingIncludes(str) {
  return !/[a-z]/.test(str);
}
```

### 💡 Solution 9: Using String.prototype.replace

```javascript
function isAllUppercaseUsingReplace(str) {
  return str.replace(/[A-Z]/g, '') === '';
}
```

### 💡 Solution 10: Using for...of Loop

```javascript
function isAllUppercaseUsingForOf(str) {
  for (const char of str) {
    if (char < 'A' || char > 'Z') {
      return false;
    }
  }
  return true;
}
```

### 💡 Solution 11: Using ASCII Values

```javascript
function isAllUppercaseUsingASCII(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode < 65 || charCode > 90) {
      return false;
    }
  }
  return true;
}
```