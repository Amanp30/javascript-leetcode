# Valid Anagram

## 📝 Problem

Given two strings, `string1` and `string2`, determine if `string2` is an anagram of `string1`. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


## 📌 Examples

### Example 1

**Input:** str1 = "listen", str2 = "silent"  
**Output:** true

---

## ✅ Solutions

### 💡 Solution 1: Sorting Method

```javascript
function isAnagramSorting(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}
```

### 💡 Solution 2: Frequency Count with Object

```javascript
function isAnagramFrequencyObject(s, t) {
    if (s.length !== t.length) return false;

    const count = {};
    for (const char of s) count[char] = (count[char] || 0) + 1;
    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
        if (count[char] < 0) return false;
    }
    return true;
}
```

### 💡 Solution 3: Frequency Count with Array

```javascript
function isAnagramFrequencyArray(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    for (const char of s) count[char.charCodeAt(0) - base]++;
    for (const char of t) {
        if (--count[char.charCodeAt(0) - base] < 0) return false;
    }
    return true;
}
```

### 💡 Solution 4: Using Map

```javascript
function isAnagramMap(s, t) {
    if (s.length !== t.length) return false;

    const count = new Map();
    for (const char of s) count.set(char, (count.get(char) || 0) + 1);
    for (const char of t) {
        if (!count.has(char)) return false;
        count.set(char, count.get(char) - 1);
        if (count.get(char) < 0) return false;
    }
    return true;
}
```

### 💡 Solution 5: Using Set for Character Comparison

```javascript
function isAnagramSet(s, t) {
    if (s.length !== t.length) return false;
    
    const sSet = new Set(s);
    const tSet = new Set(t);

    if (sSet.size !== tSet.size) return false;

    for (const char of sSet) {
        if (!tSet.has(char)) return false;
    }
    return true;
}
```

### 💡 Solution 6: Character Count with reduce

```javascript
function isAnagramReduce(s, t) {
    if (s.length !== t.length) return false;

    const count = s.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
        if (count[char] < 0) return false;
    }
    return true;
}
```

### 💡 Solution 7: Using charCodeAt for Frequency Counting

```javascript
function isAnagramCharCode(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for (const char of s) count[char.charCodeAt(0) - base]++;
    for (const char of t) {
        if (--count[char.charCodeAt(0) - base] < 0) return false;
    }
    return true;
}
```

### 💡 Solution 8: Using Array.prototype.some for Validation

```javascript
function isAnagramSome(s, t) {
    if (s.length !== t.length) return false;

    const sCount = Array.from(s).reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
    return !Array.from(t).some(char => {
        if (!sCount[char]) return true;
        sCount[char]--;
        return sCount[char] < 0;
    });
}
```

### 💡 Solution 9: Using for...of Loop with Counter

```javascript
function isAnagramCounter(s, t) {
    if (s.length !== t.length) return false;

    const count = {};
    for (const char of s) count[char] = (count[char] || 0) + 1;
    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
        if (count[char] < 0) return false;
    }
    return true;
}
```

### 💡 Solution 10: Using String.prototype.split and join

```javascript
function isAnagramSplitJoin(s, t) {
    if (s.length !== t.length) return false;

    const count = Array(26).fill(0);
    const base = 'a'.charCodeAt(0);
    
    s.split('').forEach(char => count[char.charCodeAt(0) - base]++);
    t.split('').forEach(char => {
        if (--count[char.charCodeAt(0) - base] < 0) return false;
    });
    return true;
}
```