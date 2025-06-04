# Length of the Longest Palindrome

## 📝 Problem

You are given a string `s` composed of lowercase and/or uppercase English letters. Your task is to determine the length of the longest palindrome that can be constructed using the characters from the string. Note that the characters are case-sensitive; for example, 'a' and 'A' are considered different characters and do not match each other.


## 📌 Examples

### Example 1

**Input:** s = "abccccdd"  
**Output:** 7

### Example 2

**Input:** s = "a"  
**Output:** 1

---

## ✅ Solutions

### 💡 Solution 1: Frequency Count Approach

```javascript
function longestPalindromeUsingFrequency(s) {
    const freq = {};
    let length = 0;
    let hasOdd = false;

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const count of Object.values(freq)) {
        length += Math.floor(count / 2) * 2;
        if (count % 2 === 1) {
            hasOdd = true;
        }
    }

    return length + (hasOdd ? 1 : 0);
}
```

### 💡 Solution 2: Using a Set to Track Odd Frequencies

```javascript
function longestPalindromeWithSet1(s) {
    const oddSet = new Set();
    
    for (const char of s) {
        if (oddSet.has(char)) {
            oddSet.delete(char);
        } else {
            oddSet.add(char);
        }
    }

    return s.length - oddSet.size + (oddSet.size > 0 ? 1 : 0);
}
```

### 💡 Solution 3: HashMap with Conditional Check

```javascript
function longestPalindromeWithSet(s) {
    const oddSet = new Set();
    
    for (const char of s) {
        if (oddSet.has(char)) {
            oddSet.delete(char);
        } else {
            oddSet.add(char);
        }
    }

    return s.length - oddSet.size + (oddSet.size > 0 ? 1 : 0);
}
```

### 💡 Solution 4: Array-Based Frequency Count

```javascript
function longestPalindromeUsingHashMap(s) {
    const freq = {};
    let length = 0;

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const count of Object.values(freq)) {
        length += Math.floor(count / 2) * 2;
    }

    return length + (length < s.length ? 1 : 0);
}
```

### 💡 Solution 5: Using Frequency Object and Array

```javascript
function longestPalindromeFreqArray(s) {
    const freq = {};
    const charArray = [];
    let length = 0;

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const char in freq) {
        charArray.push(freq[char]);
    }

    for (const count of charArray) {
        length += Math.floor(count / 2) * 2;
    }

    return length + (length < s.length ? 1 : 0);
}
```

### 💡 Solution 6: Frequency Count with Object.keys

```javascript
function longestPalindromeFromKeys(s) {
    const freq = {};
    let length = 0;

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const char of Object.keys(freq)) {
        length += Math.floor(freq[char] / 2) * 2;
    }

    return length + (length < s.length ? 1 : 0);
}
```

### 💡 Solution 7: Using Map for Character Frequencies

```javascript
function longestPalindromeWithMap(s) {
    const freq = new Map();
    let length = 0;

    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    for (const count of freq.values()) {
        length += Math.floor(count / 2) * 2;
    }

    return length + (length < s.length ? 1 : 0);
}
```

### 💡 Solution 8: Advanced Frequency Counting with Iteration

```javascript
function longestPalindromeAdvancedCount(s) {
    const freq = {};
    let length = 0;
    let oddCount = 0;

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const count of Object.values(freq)) {
        length += Math.floor(count / 2) * 2;
        if (count % 2 === 1) {
            oddCount++;
        }
    }

    return length + (oddCount > 0 ? 1 : 0);
}
```

### 💡 Solution 9: Using Character Frequency Map and Aggregation

```javascript
function longestPalindromeMapAggregation(s) {
    const freq = new Map();
    let length = 0;
    let hasOddFrequency = false;

    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    for (const count of freq.values()) {
        length += Math.floor(count / 2) * 2;
        if (count % 2 === 1) {
            hasOddFrequency = true;
        }
    }

    return length + (hasOddFrequency ? 1 : 0);
}
```

### 💡 Solution 10: Iterative Count with Central Character Check

```javascript
function longestPalindromeWithCentralChar(s) {
    const freq = {};
    let length = 0;
    let hasOdd = false;

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const count of Object.values(freq)) {
        length += Math.floor(count / 2) * 2;
        if (count % 2 === 1) {
            hasOdd = true;
        }
    }

    return length + (hasOdd ? 1 : 0);
}
```