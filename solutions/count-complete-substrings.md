# Count Complete Substrings

## 📝 Problem

You are given a string `word` and an integer `k`. Your task is to count the number of substrings of `word` that meet the following criteria:

1.  **Character Frequency:** Each character in the substring must appear exactly `k` times.
    
2.  **Adjacent Characters:** The absolute difference between the ASCII values of any two adjacent characters in the substring must be at most 2.
    

A substring is defined as a contiguous sequence of characters within the string `word`.

Write a function that returns the number of complete substrings.


## 📌 Examples

### Example 1

**Input:** str = "igigee", k = 2  
**Output:** 3

### Example 2

**Input:** str = "pdpddpdppd", k = 4  
**Output:** 1

---

## ✅ Solutions

### 💡 Solution 1: Brute Force with All Substrings

```javascript
function countValidSubstrings(word, k) {
    const length = word.length;
    let count = 0;

    // Function to check if all characters in the map appear exactly k times
    function hasValidCharacterCounts(countMap) {
        return Object.values(countMap).every(count => count === k);
    }

    // Iterate over all possible substrings
    for (let start = 0; start < length; start++) {
        const frequencyMap = {};
        for (let end = start; end < length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (!hasValidCharacterCounts(frequencyMap)) {
                continue;
            }

            if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                break;  // As soon as the ASCII difference condition fails, break out of the loop
            }

            if (hasValidCharacterCounts(frequencyMap)) {
                count++;
            }
        }
    }
    return count;
}
```

### 💡 Solution 2: Sliding Window with Hash Map

```javascript
function countValidSubstringsUsingSlidingWindow(word, k) {
    function hasValidCharacterCounts(countMap) {
        return Object.values(countMap).every(count => count === k);
    }

    let count = 0;
    for (let start = 0; start < word.length; start++) {
        const frequencyMap = {};
        let isValid = true;
        for (let end = start; end < word.length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (!hasValidCharacterCounts(frequencyMap)) {
                continue;
            }

            if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                isValid = false;
            }
            
            if (isValid && hasValidCharacterCounts(frequencyMap)) {
                count++;
            } else {
                break;
            }
        }
    }
    return count;
}
```

### 💡 Solution 3: Dynamic Programming Approach

```javascript
function countCompleteSubstringsWithDP(word, k) {
    const length = word.length;
    let count = 0;

    for (let start = 0; start < length; start++) {
        const frequencyMap = {};
        let isValid = true;
        for (let end = start; end < length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (Object.values(frequencyMap).some(freq => freq > k)) {
                isValid = false;
                break;
            }

            if (Object.values(frequencyMap).every(freq => freq === k)) {
                if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                    isValid = false;
                    break;
                }
                if (isValid) {
                    count++;
                }
            }
        }
    }
    return count;
}
```

### 💡 Solution 4: Prefix Frequency Array

```javascript
function countSubstringsWithPrefixFrequency(word, k) {
    const length = word.length;
    let count = 0;

    for (let start = 0; start < length; start++) {
        const frequencyMap = {};
        let valid = true;
        for (let end = start; end < length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (Object.values(frequencyMap).some(count => count > k)) {
                valid = false;
                break;
            }

            if (Object.values(frequencyMap).every(count => count === k)) {
                if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                    valid = false;
                    break;
                }
                if (valid) {
                    count++;
                }
            }
        }
    }
    return count;
}
```

### 💡 Solution 5: Efficient ASCII Difference Check

```javascript
function countValidSubstringsWithAsciiCheck(word, k) {
    const length = word.length;
    let count = 0;

    // Function to check if all characters in the map appear exactly k times
    function hasValidCharacterCounts(countMap) {
        return Object.values(countMap).every(count => count === k);
    }

    // Iterate over all possible starting points
    for (let start = 0; start < length; start++) {
        const frequencyMap = {};
        let isValid = true;
        for (let end = start; end < length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (!hasValidCharacterCounts(frequencyMap)) {
                // If frequency count fails, move to the next start position
                continue;
            }

            // Check ASCII difference condition
            if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                isValid = false;
            }

            if (isValid && hasValidCharacterCounts(frequencyMap)) {
                count++;
            } else {
                break; // Early exit for current starting point if not valid
            }
        }
    }

    return count;
}
```

### 💡 Solution 6: Hash Set for Frequency Check

```javascript
function countSubstringsUsingHashSet(word, k) {
    let count = 0;

    for (let start = 0; start < word.length; start++) {
        const frequencyMap = {};
        let valid = true;
        for (let end = start; end < word.length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (Object.values(frequencyMap).some(count => count > k)) {
                valid = false;
                break;
            }
            if (Object.values(frequencyMap).every(count => count === k)) {
                if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                    valid = false;
                    break;
                }
                if (valid) {
                    count++;
                }
            }
        }
    }
    return count;
}
```

### 💡 Solution 7: Set-Based Frequency Validation

```javascript
function countSubstringsWithSetValidation(word, k) {
    const length = word.length;
    let count = 0;

    for (let start = 0; start < length; start++) {
        const frequencyMap = {};
        for (let end = start; end < length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (Object.values(frequencyMap).every(count => count === k)) {
                if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                    break;
                }
                count++;
            }
        }
    }
    return count;
}
```

### 💡 Solution 8: Direct Validation with Hash Map

```javascript
function countSubstringsWithDirectValidation(word, k) {
    const length = word.length;
    let count = 0;

    for (let start = 0; start < length; start++) {
        const frequencyMap = {};
        for (let end = start; end < length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (Object.values(frequencyMap).some(count => count > k)) {
                break;
            }

            if (Object.values(frequencyMap).every(count => count === k)) {
                if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                    break;
                }
                count++;
            }
        }
    }
    return count;
}
```

### 💡 Solution 9: Two-Pointer Approach

```javascript
function countSubstringsUsingTwoPointers(word, k) {
    let count = 0;

    for (let start = 0; start < word.length; start++) {
        const frequencyMap = {};
        for (let end = start; end < word.length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (Object.values(frequencyMap).some(count => count > k)) {
                break;
            }

            if (Object.values(frequencyMap).every(count => count === k)) {
                if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                    break;
                }
                count++;
            }
        }
    }
    return count;
}
```

### 💡 Solution 10: Frequency Map with Early Exit

```javascript
function countSubstringsWithEarlyExit(word, k) {
    const length = word.length;
    let count = 0;

    for (let start = 0; start < length; start++) {
        const frequencyMap = {};
        let valid = true;
        for (let end = start; end < length; end++) {
            const char = word[end];
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;

            if (Object.values(frequencyMap).some(count => count > k)) {
                valid = false;
                break;
            }

            if (Object.values(frequencyMap).every(count => count === k)) {
                if (end > start && Math.abs(word.charCodeAt(end) - word.charCodeAt(end - 1)) > 2) {
                    valid = false;
                    break;
                }
                if (valid) {
                    count++;
                }
            }
        }
    }
    return count;
}
```