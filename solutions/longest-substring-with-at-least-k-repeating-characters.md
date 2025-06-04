# Longest Substring with At Least K Repeating Characters

## 📝 Problem

Given a string `s` and an integer `k`, your task is to find the length of the longest substring of `s` such that every character in this substring appears at least `k` times.


## 📌 Examples

### Example 1

**Input:** s = "aaabb", k = 3  
**Output:** 3

### Example 2

**Input:** s = "ababbc", k = 2  
**Output:** 5

---

## ✅ Solutions

### 💡 Solution 1: Using Frequency Count and Recursion

```javascript
function longestSubstringWithAtLeastKCharsRecursive(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (k > s.length) return 0;
    
    function helper(start, end) {
        if (end - start + 1 < k) return 0;

        const freq = {};
        for (let i = start; i <= end; i++) {
            freq[s[i]] = (freq[s[i]] || 0) + 1;
        }

        for (const [char, count] of Object.entries(freq)) {
            if (count < k) {
                let i = start;
                let maxLen = 0;
                while (i <= end) {
                    while (i <= end && freq[s[i]] < k) i++;
                    if (i > end) break;

                    let j = i;
                    while (j <= end && freq[s[j]] >= k) j++;
                    maxLen = Math.max(maxLen, helper(i, j - 1));
                    i = j;
                }
                return maxLen;
            }
        }
        return end - start + 1;
    }

    return helper(0, s.length - 1);
}

// Test case
console.log(longestSubstringWithAtLeastKCharsRecursive("aaabb", 3)); // Output: 3
console.log(longestSubstringWithAtLeastKCharsRecursive("ababbc", 2)); // Output: 5
```

### 💡 Solution 2: Using Divide and Conquer Strategy

```javascript
function longestSubstringByDivideAndConquer(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (s.length === 0 || k > s.length) return 0;

    const countChars = (str) => {
        const count = {};
        for (let char of str) {
            count[char] = (count[char] || 0) + 1;
        }
        return count;
    };

    const findLongestSubstring = (start, end) => {
        if (end - start + 1 < k) return 0;

        const count = countChars(s.slice(start, end + 1));
        for (const [char, cnt] of Object.entries(count)) {
            if (cnt < k) {
                let maxLen = 0;
                let i = start;
                while (i <= end) {
                    while (i <= end && count[s[i]] < k) i++;
                    if (i > end) break;

                    let j = i;
                    while (j <= end && count[s[j]] >= k) j++;
                    maxLen = Math.max(maxLen, findLongestSubstring(i, j - 1));
                    i = j;
                }
                return maxLen;
            }
        }
        return end - start + 1;
    };

    return findLongestSubstring(0, s.length - 1);
}

// Test case
console.log(longestSubstringByDivideAndConquer("aaabb", 3)); // Output: 3
console.log(longestSubstringByDivideAndConquer("ababbc", 2)); // Output: 5
```

### 💡 Solution 3: Using Sliding Window with Variable Unique Characters

```javascript
function longestSubstringUsingSlidingWindow(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (k > s.length) return 0;

    const maxUniqueChars = (str) => {
        const set = new Set(str);
        return set.size;
    };

    let maxLength = 0;
    for (let numUnique = 1; numUnique <= maxUniqueChars(s); numUnique++) {
        const freq = {};
        let start = 0, end = 0, uniqueCount = 0, validCount = 0;

        while (end < s.length) {
            if (uniqueCount <= numUnique) {
                if (!freq[s[end]]) uniqueCount++;
                freq[s[end]] = (freq[s[end]] || 0) + 1;
                if (freq[s[end]] === k) validCount++;
                end++;
            } else {
                if (freq[s[start]] === k) validCount--;
                freq[s[start]]--;
                if (freq[s[start]] === 0) uniqueCount--;
                start++;
            }

            if (uniqueCount === numUnique && uniqueCount === validCount) {
                maxLength = Math.max(maxLength, end - start);
            }
        }
    }

    return maxLength;
}

// Test case
console.log(longestSubstringUsingSlidingWindow("aaabb", 3)); // Output: 3
console.log(longestSubstringUsingSlidingWindow("ababbc", 2)); // Output: 5
```

### 💡 Solution 4: Using Hash Map to Track Frequencies

```javascript
function longestSubstringWithHashMap(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (k > s.length) return 0;

    function getLongestSubstring(start, end) {
        if (end - start + 1 < k) return 0;

        const count = {};
        for (let i = start; i <= end; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
        }

        for (const char in count) {
            if (count[char] < k) {
                let maxLen = 0;
                let i = start;
                while (i <= end) {
                    while (i <= end && count[s[i]] < k) i++;
                    if (i > end) break;

                    let j = i;
                    while (j <= end && count[s[j]] >= k) j++;
                    maxLen = Math.max(maxLen, getLongestSubstring(i, j - 1));
                    i = j;
                }
                return maxLen;
            }
        }
        return end - start + 1;
    }

    return getLongestSubstring(0, s.length - 1);
}

// Test case
console.log(longestSubstringWithHashMap("aaabb", 3)); // Output: 3
console.log(longestSubstringWithHashMap("ababbc", 2)); // Output: 5
```

### 💡 Solution 5: Using Recursive Approach with Frequency Count

```javascript
function longestSubstringRecursiveWithFrequency(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (k > s.length) return 0;

    const countChars = (str) => {
        const count = {};
        for (let char of str) {
            count[char] = (count[char] || 0) + 1;
        }
        return count;
    };

    const longestSubstring = (start, end) => {
        if (end - start + 1 < k) return 0;

        const freq = countChars(s.slice(start, end + 1));
        for (const [char, cnt] of Object.entries(freq)) {
            if (cnt < k) {
                let maxLen = 0;
                let i = start;
                while (i <= end) {
                    while (i <= end && freq[s[i]] < k) i++;
                    if (i > end) break;

                    let j = i;
                    while (j <= end && freq[s[j]] >= k) j++;
                    maxLen = Math.max(maxLen, longestSubstring(i, j - 1));
                    i = j;
                }
                return maxLen;
            }
        }
        return end - start + 1;
    };

    return longestSubstring(0, s.length - 1);
}

// Test case
console.log(longestSubstringRecursiveWithFrequency("aaabb", 3)); // Output: 3
console.log(longestSubstringRecursiveWithFrequency("ababbc", 2)); // Output: 5
```

### 💡 Solution 6: Using Iterative Approach with Character Frequency

```javascript
function longestSubstringWithIterativeFrequency(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (k > s.length) return 0;

    function longestSubstring(start, end) {
        if (end - start + 1 < k) return 0;

        const freq = {};
        for (let i = start; i <= end; i++) {
            freq[s[i]] = (freq[s[i]] || 0) + 1;
        }

        for (const char in freq) {
            if (freq[char] < k) {
                let maxLen = 0;
                let i = start;
                while (i <= end) {
                    while (i <= end && freq[s[i]] < k) i++;
                    if (i > end) break;

                    let j = i;
                    while (j <= end && freq[s[j]] >= k) j++;
                    maxLen = Math.max(maxLen, longestSubstring(i, j - 1));
                    i = j;
                }
                return maxLen;
            }
        }
        return end - start + 1;
    }

    return longestSubstring(0, s.length - 1);
}

// Test case
console.log(longestSubstringWithIterativeFrequency("aaabb", 3)); // Output: 3
console.log(longestSubstringWithIterativeFrequency("ababbc", 2)); // Output: 5
```

### 💡 Solution 7: Using Recursive Function with Frequency Analysis

```javascript
function longestSubstringRecursiveFrequencyAnalysis(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (k > s.length) return 0;

    const countChars = (str) => {
        const count = {};
        for (let char of str) {
            count[char] = (count[char] || 0) + 1;
        }
        return count;
    };

    const findLongestSubstring = (start, end) => {
        if (end - start + 1 < k) return 0;

        const count = countChars(s.slice(start, end + 1));
        for (const [char, cnt] of Object.entries(count)) {
            if (cnt < k) {
                let maxLen = 0;
                let i = start;
                while (i <= end) {
                    while (i <= end && count[s[i]] < k) i++;
                    if (i > end) break;

                    let j = i;
                    while (j <= end && count[s[j]] >= k) j++;
                    maxLen = Math.max(maxLen, findLongestSubstring(i, j - 1));
                    i = j;
                }
                return maxLen;
            }
        }
        return end - start + 1;
    };

    return findLongestSubstring(0, s.length - 1);
}

// Test case
console.log(longestSubstringRecursiveFrequencyAnalysis("aaabb", 3)); // Output: 3
console.log(longestSubstringRecursiveFrequencyAnalysis("ababbc", 2)); // Output: 5
```

### 💡 Solution 8: Using Frequency Count with Sliding Window

```javascript
function longestSubstringUsingFrequencySlidingWindow(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (k > s.length) return 0;

    const maxUniqueChars = (str) => {
        const set = new Set(str);
        return set.size;
    };

    let maxLength = 0;
    for (let numUnique = 1; numUnique <= maxUniqueChars(s); numUnique++) {
        const freq = {};
        let start = 0, end = 0, uniqueCount = 0, validCount = 0;

        while (end < s.length) {
            if (uniqueCount <= numUnique) {
                if (!freq[s[end]]) uniqueCount++;
                freq[s[end]] = (freq[s[end]] || 0) + 1;
                if (freq[s[end]] === k) validCount++;
                end++;
            } else {
                if (freq[s[start]] === k) validCount--;
                freq[s[start]]--;
                if (freq[s[start]] === 0) uniqueCount--;
                start++;
            }

            if (uniqueCount === numUnique && uniqueCount === validCount) {
                maxLength = Math.max(maxLength, end - start);
            }
        }
    }

    return maxLength;
}

// Test case
console.log(longestSubstringUsingFrequencySlidingWindow("aaabb", 3)); // Output: 3
console.log(longestSubstringUsingFrequencySlidingWindow("ababbc", 2)); // Output: 5
```

### 💡 Solution 9: Using Character Count and Recursive Search

```javascript
function longestSubstringWithCharCountSearch(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (k > s.length) return 0;

    const countChars = (str) => {
        const count = {};
        for (let char of str) {
            count[char] = (count[char] || 0) + 1;
        }
        return count;
    };

    const findSubstring = (start, end) => {
        if (end - start + 1 < k) return 0;

        const freq = countChars(s.slice(start, end + 1));
        for (const char in freq) {
            if (freq[char] < k) {
                let maxLen = 0;
                let i = start;
                while (i <= end) {
                    while (i <= end && freq[s[i]] < k) i++;
                    if (i > end) break;

                    let j = i;
                    while (j <= end && freq[s[j]] >= k) j++;
                    maxLen = Math.max(maxLen, findSubstring(i, j - 1));
                    i = j;
                }
                return maxLen;
            }
        }
        return end - start + 1;
    };

    return findSubstring(0, s.length - 1);
}

// Test case
console.log(longestSubstringWithCharCountSearch("aaabb", 3)); // Output: 3
console.log(longestSubstringWithCharCountSearch("ababbc", 2)); // Output: 5
```

### 💡 Solution 10: Using Iterative Approach with Sliding Window

```javascript
function longestSubstringIterativeSlidingWindow(s, k) {
    if (typeof s !== 'string' || typeof k !== 'number') throw new TypeError('Invalid input');
    if (k > s.length) return 0;

    const maxUniqueChars = (str) => {
        const set = new Set(str);
        return set.size;
    };

    let maxLength = 0;
    for (let numUnique = 1; numUnique <= maxUniqueChars(s); numUnique++) {
        const freq = {};
        let start = 0, end = 0, uniqueCount = 0, validCount = 0;

        while (end < s.length) {
            if (uniqueCount <= numUnique) {
                if (!freq[s[end]]) uniqueCount++;
                freq[s[end]] = (freq[s[end]] || 0) + 1;
                if (freq[s[end]] === k) validCount++;
                end++;
            } else {
                if (freq[s[start]] === k) validCount--;
                freq[s[start]]--;
                if (freq[s[start]] === 0) uniqueCount--;
                start++;
            }

            if (uniqueCount === numUnique && uniqueCount === validCount) {
                maxLength = Math.max(maxLength, end - start);
            }
        }
    }

    return maxLength;
}

// Test case
console.log(longestSubstringIterativeSlidingWindow("aaabb", 3)); // Output: 3
console.log(longestSubstringIterativeSlidingWindow("ababbc", 2)); // Output: 5
```