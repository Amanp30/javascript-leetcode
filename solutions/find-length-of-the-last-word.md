# Find Length of the Last Word

## 📝 Problem

Given a string `s` consisting of words separated by spaces, you need to determine the length of the last word in the string. The string may contain leading and trailing spaces, and words are separated by one or more spaces.


## 📌 Examples

### Example 1

**Input:** str = "hello aman"  
**Output:** 4

---

## ✅ Solutions

### 💡 Solution 1: Using String Methods

```javascript
function getLengthOfLastWord(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    s = s.trim();
    const words = s.split(' ');
    return words[words.length - 1].length;
}
```

### 💡 Solution 2: Using Regular Expressions

```javascript
function findLengthOfLastWordUsingRegex(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    const match = s.trim().match(/\S+$/);
    return match ? match[0].length : 0;
}
```

### 💡 Solution 3: Manual Traversal

```javascript
function calculateLengthOfLastWord(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    let length = 0;
    let i = s.length - 1;

    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}
```

### 💡 Solution 4: Using Array.prototype.reduce

```javascript
function lengthOfLastWordWithReduce(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    return s.trim().split(/\s+/).reduce((_, word) => word.length, 0);
}
```

### 💡 Solution 5: Using Array.prototype.forEach

```javascript
function lengthOfLastWordUsingForEach(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    let lastWordLength = 0;
    s.trim().split(/\s+/).forEach(word => lastWordLength = word.length);
    return lastWordLength;
}
```

### 💡 Solution 6: Using Array.prototype.pop

```javascript
function getLastWordLength(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    const words = s.trim().split(/\s+/);
    return words.pop().length;
}
```

### 💡 Solution 7: Using String.prototype.lastIndexOf

```javascript
function lengthOfLastWordWithLastIndexOf(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    s = s.trim();
    const lastSpace = s.lastIndexOf(' ');
    return s.length - lastSpace - 1;
}
```

### 💡 Solution 8: Using String.prototype.split with Map

```javascript
function lengthOfLastWordUsingMap(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    const words = s.trim().split(/\s+/);
    return words.map(word => word.length).pop();
}
```

### 💡 Solution 9: Using Stack Approach

```javascript
function lengthOfLastWordUsingStack(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    const stack = [];
    for (const char of s.trim()) {
        if (char === ' ') {
            stack.length = 0;
        } else {
            stack.push(char);
        }
    }
    return stack.length;
}
```

### 💡 Solution 10: Using String.prototype.substring

```javascript
function getLengthOfLastWordUsingSubstring(s) {
    if (typeof s !== 'string') throw new TypeError('Input must be a string');
    
    s = s.trim();
    const lastSpaceIndex = s.lastIndexOf(' ');
    return s.substring(lastSpaceIndex + 1).length;
}
```