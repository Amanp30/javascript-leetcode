# Check if a String is a Palindrome

## 📝 Problem

Write a function to determine whether a given string is a palindrome. A palindrome is a string that reads the same forwards and backwards, ignoring case and spaces.


## 📌 Examples

### Example 1

**Input:** str = "xox"  
**Output:** true

### Example 2

**Input:** str = "aman"  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Using split, reverse, and join

```javascript
function isPalindromeUsingSplitReverseJoin(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
```

### 💡 Solution 2: Using a for Loop

```javascript
function isPalindromeUsingForLoop(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;
  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) return false;
    left++;
    right--;
  }
  return true;
}
```

### 💡 Solution 3: Using a while Loop

```javascript
function isPalindromeUsingWhileLoop(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  let start = 0;
  let end = cleanedStr.length - 1;
  while (start < end) {
    if (cleanedStr[start] !== cleanedStr[end]) return false;
    start++;
    end--;
  }
  return true;
}
```

### 💡 Solution 4: Using Array.prototype.every

```javascript
function isPalindromeUsingEvery(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  return [...cleanedStr].every((char, index) => char === cleanedStr[cleanedStr.length - 1 - index]);
}
```

### 💡 Solution 5: Using Array.prototype.reduce

```javascript
function isPalindromeUsingReduce(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  return cleanedStr.split("").reduce((isPalin, char, index) => isPalin && char === cleanedStr[cleanedStr.length - 1 - index], true);
}
```

### 💡 Solution 6: Using String.prototype.match

```javascript
function isPalindromeUsingMatch(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return reversedStr === cleanedStr;
}
```

### 💡 Solution 7: Using Recursion

```javascript
function isPalindromeUsingRecursion(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  
  function checkPalindrome(left, right) {
    if (left >= right) return true;
    if (cleanedStr[left] !== cleanedStr[right]) return false;
    return checkPalindrome(left + 1, right - 1);
  }
  
  return checkPalindrome(0, cleanedStr.length - 1);
}
```

### 💡 Solution 8: Using Two-Pointer Technique

```javascript
function isPalindromeUsingTwoPointer(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;
  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) return false;
    left++;
    right--;
  }
  return true;
}
```

### 💡 Solution 9: Using String.prototype.replace

```javascript
function isPalindromeUsingReplace(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}
```

### 💡 Solution 10: Using Set and Array.from

```javascript
function isPalindromeUsingSet(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  const length = cleanedStr.length;
  return Array.from({ length }).every((_, i) => cleanedStr[i] === cleanedStr[length - 1 - i]);
}
```