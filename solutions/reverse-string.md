# Reverse String

## 📝 Problem

You are given an array of characters `s` that represents a string. Your task is to reverse the characters in the array in-place. This means you need to modify the original array directly, without using extra memory for another array. The goal is to reverse the string efficiently using O(1) extra space.


## 📌 Examples

### Example 1

**Input:** s = ["h","e","l","l","o"]  
**Output:** ["o","l","l","e","h"]

### Example 2

**Input:** array = ["H","a","n","n","a","h"]  
**Output:** ["h","a","n","n","a","H"]

---

## ✅ Solutions

### 💡 Solution 1: Two-Pointer Technique

```javascript
function reverseStringTwoPointer(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}
```

### 💡 Solution 2: Iterative Approach

```javascript
function reverseStringIterative(s) {
    const length = s.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = s[i];
        s[i] = s[length - 1 - i];
        s[length - 1 - i] = temp;
    }
    return s;
}
```

### 💡 Solution 3: Using JavaScript Array.prototype.reverse()

```javascript
function reverseStringArrayReverse(s) {
    s.reverse();
    return s;
}
```

### 💡 Solution 4: Stack-Based Approach

```javascript
function reverseStringStack(s) {
    const stack = [];
    s.forEach(char => stack.push(char));
    for (let i = 0; i < s.length; i++) {
        s[i] = stack.pop();
    }
    return s;
}
```

### 💡 Solution 5: Recursive Approach

```javascript
function reverseStringRecursive(s) {
    function helper(left, right) {
        if (left >= right) return;
        [s[left], s[right]] = [s[right], s[left]];
        helper(left + 1, right - 1);
    }
    helper(0, s.length - 1);
    return s;
}
```

### 💡 Solution 6: Using In-Place Swap with Helper Function

```javascript
function reverseStringInPlace(s) {
    const swap = (i, j) => {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    };

    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        swap(left, right);
        left++;
        right--;
    }
    return s;
}
```

### 💡 Solution 7: Using Bitwise XOR for Swap

```javascript
function reverseStringXOR(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        // Swap elements using XOR
        s[left] = String.fromCharCode(s[left].charCodeAt(0) ^ s[right].charCodeAt(0));
        s[right] = String.fromCharCode(s[left].charCodeAt(0) ^ s[right].charCodeAt(0));
        s[left] = String.fromCharCode(s[left].charCodeAt(0) ^ s[right].charCodeAt(0));
        
        left++;
        right--;
    }
    return s;
}
```

### 💡 Solution 8: Using Deques (Double-ended Queue)

```javascript
function reverseStringDeque(s) {
    const deque = [];
    for (const char of s) {
        deque.push(char);
    }
    for (let i = 0; i < s.length; i++) {
        s[i] = deque.pop();
    }
    return s;
}
```

### 💡 Solution 9: Using Two Arrays (Intermediate Storage)

```javascript
function reverseStringTwoArrays(s) {
    const reversed = [];
    for (let i = s.length - 1; i >= 0; i--) {
        reversed.push(s[i]);
    }
    for (let i = 0; i < s.length; i++) {
        s[i] = reversed[i];
    }
    return s;
}
```

### 💡 Solution 10: Using Built-In Methods with Spread Operator

```javascript
function reverseStringSpread(s) {
    s.splice(0, s.length, ...s.reverse());
    return s;
}
```