# Number of Substrings Containing All Three Characters

## 📝 Problem

Given a string `s` consisting only of characters 'a', 'b', and 'c', return the number of substrings that contain at least one occurrence of each of these characters.


## 📌 Examples

### Example 1

**Input:** s = "abcabc"  
**Output:** 10

---

## ✅ Solutions

### 💡 Solution 1: Sliding Window Approach

```javascript
function countSubstringsSlidingWindow(s) {
    let count = 0;
    let left = 0;
    const n = s.length;
    const freq = { 'a': 0, 'b': 0, 'c': 0 };

    for (let right = 0; right < n; right++) {
        freq[s[right]]++;
        while (freq['a'] > 0 && freq['b'] > 0 && freq['c'] > 0) {
            count += n - right;
            freq[s[left]]--;
            left++;
        }
    }

    return count;
}
```

### 💡 Solution 2: Brute Force Approach

```javascript
function countSubstringsBruteForce(s) {
    let count = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        let freq = { 'a': 0, 'b': 0, 'c': 0 };
        for (let j = i; j < n; j++) {
            freq[s[j]]++;
            if (freq['a'] > 0 && freq['b'] > 0 && freq['c'] > 0) {
                count++;
            }
        }
    }

    return count;
}
```

### 💡 Solution 3: Dynamic Programming Approach

```javascript
function countSubstringsDP(s) {
    const n = s.length;
    let count = 0;
    let lastSeen = { 'a': -1, 'b': -1, 'c': -1 };

    for (let i = 0; i < n; i++) {
        lastSeen[s[i]] = i;
        const minLastSeen = Math.min(lastSeen['a'], lastSeen['b'], lastSeen['c']);
        if (minLastSeen >= 0) {
            count += minLastSeen + 1;
        }
    }

    return count;
}
```

### 💡 Solution 4: Using a Hash Map

```javascript
function countSubstringsHashMap(s) {
    let count = 0;
    const n = s.length;
    let left = 0;
    const charCount = { 'a': 0, 'b': 0, 'c': 0 };

    for (let right = 0; right < n; right++) {
        charCount[s[right]]++;
        while (charCount['a'] > 0 && charCount['b'] > 0 && charCount['c'] > 0) {
            count += n - right;
            charCount[s[left]]--;
            left++;
        }
    }

    return count;
}
```

### 💡 Solution 5: Two-Pointer Technique

```javascript
function countSubstringsTwoPointer(s) {
    let count = 0;
    const n = s.length;
    let start = 0;
    let end = 0;
    const freq = { 'a': 0, 'b': 0, 'c': 0 };

    while (end < n) {
        freq[s[end]]++;
        while (freq['a'] > 0 && freq['b'] > 0 && freq['c'] > 0) {
            count += n - end;
            freq[s[start]]--;
            start++;
        }
        end++;
    }

    return count;
}
```

### 💡 Solution 6: Using Sliding Window with Frequency Array

```javascript
function countSubstringsFrequencyArray(s) {
    let count = 0;
    const n = s.length;
    let left = 0;
    const freq = new Array(3).fill(0);
    const base = 'a'.charCodeAt(0);

    for (let right = 0; right < n; right++) {
        freq[s[right].charCodeAt(0) - base]++;
        while (freq[0] > 0 && freq[1] > 0 && freq[2] > 0) {
            count += n - right;
            freq[s[left].charCodeAt(0) - base]--;
            left++;
        }
    }

    return count;
}
```

### 💡 Solution 7: Optimized Sliding Window

```javascript
function countSubstringsOptimizedSlidingWindow(s) {
    let count = 0;
    let left = 0;
    const freq = { 'a': 0, 'b': 0, 'c': 0 };

    for (let right = 0; right < s.length; right++) {
        freq[s[right]]++;
        while (freq['a'] > 0 && freq['b'] > 0 && freq['c'] > 0) {
            count += s.length - right;
            freq[s[left]]--;
            left++;
        }
    }

    return count;
}
```

### 💡 Solution 8: Prefix Sum Array Approach

```javascript
function countSubstringsPrefixSum(s) {
    const n = s.length;
    let count = 0;
    const lastSeen = { 'a': -1, 'b': -1, 'c': -1 };

    for (let i = 0; i < n; i++) {
        lastSeen[s[i]] = i;
        const minLastSeen = Math.min(lastSeen['a'], lastSeen['b'], lastSeen['c']);
        if (minLastSeen >= 0) {
            count += minLastSeen + 1;
        }
    }

    return count;
}
```

### 💡 Solution 9: Advanced Frequency Counting

```javascript
function countSubstringsAdvancedFrequency(s) {
    const n = s.length;
    let count = 0;
    let left = 0;
    const freq = { 'a': 0, 'b': 0, 'c': 0 };

    for (let right = 0; right < n; right++) {
        freq[s[right]]++;
        while (freq['a'] > 0 && freq['b'] > 0 && freq['c'] > 0) {
            count += n - right;
            freq[s[left]]--;
            left++;
        }
    }

    return count;
}
```

### 💡 Solution 10: Iterative Check Approach

```javascript
function countSubstringsIterative(s) {
    const n = s.length;
    let count = 0;

    for (let start = 0; start < n; start++) {
        let hasA = false, hasB = false, hasC = false;
        for (let end = start; end < n; end++) {
            if (s[end] === 'a') hasA = true;
            if (s[end] === 'b') hasB = true;
            if (s[end] === 'c') hasC = true;
            if (hasA && hasB && hasC) count++;
        }
    }

    return count;
}
```