# Shortest Palindrome

## 📝 Problem

Given a string `s`, you want to make it a palindrome by adding the minimum number of characters to the beginning of the string. A palindrome is a string that reads the same forwards and backwards.


## 📌 Examples

### Example 1

**Input:** str = "aacecaaa"  
**Output:** "aaacecaaa"

### Example 2

**Input:** str = "abcd"  
**Output:** "dcbabcd"

---

## ✅ Solutions

### 💡 Solution 1: KMP Algorithm-Based Approach

```javascript
function shortestPalindromeKMP(s) {
    function computeKMPTable(pattern) {
        const table = Array(pattern.length).fill(0);
        let j = 0;
        for (let i = 1; i < pattern.length; i++) {
            while (j > 0 && pattern[i] !== pattern[j]) {
                j = table[j - 1];
            }
            if (pattern[i] === pattern[j]) {
                j++;
            }
            table[i] = j;
        }
        return table;
    }

    if (s.length === 0) return s;

    const reversed = s.split('').reverse().join('');
    const newString = s + '#' + reversed;
    const kmpTable = computeKMPTable(newString);
    const palinLen = kmpTable[newString.length - 1];

    return reversed.substring(0, s.length - palinLen) + s;
}
```

### 💡 Solution 2: Manachers Algorithm-Based Approach for Shortest Palindrome

```javascript
function shortestPalindromeManacher(s) {
    // Helper function to preprocess the input string with separators
    function preprocessString(input) {
        const length = (input.length << 1) + 3;
        const processedString = new Array(length).fill('#');
        processedString[0] = '^'; 
        processedString[length - 1] = '$';
        for (let i = 2, j = 0; j < input.length; j++, i += 2) {
            processedString[i] = input[j];
        }
        return processedString.join('');
    }

    // Manacher's Algorithm to find the longest palindromic prefix
    function findLongestPalindromePrefix(input) {
        const preprocessed = preprocessString(input);
        const palindromeLengths = new Array(preprocessed.length).fill(0);
        let center = 0, rightBoundary = 0;
        let maxLength = 1;

        for (let i = 1; i < preprocessed.length - 1; i++) {
            const mirrorIndex = center - (i - center);

            if (rightBoundary > i) {
                palindromeLengths[i] = Math.min(rightBoundary - i, palindromeLengths[mirrorIndex]);
            }

            while (preprocessed[i + 1 + palindromeLengths[i]] === preprocessed[i - 1 - palindromeLengths[i]]) {
                palindromeLengths[i]++;
            }

            if (i + palindromeLengths[i] > rightBoundary) {
                center = i;
                rightBoundary = i + palindromeLengths[i];
            }

            if (i - 1 - palindromeLengths[i] <= 0) {
                maxLength = Math.max(maxLength, palindromeLengths[i]);
            }
        }

        // Construct the shortest palindrome by adding the reversed suffix
        const suffixToAdd = input.substring(maxLength).split('').reverse().join('');
        return suffixToAdd + input;
    }

    return findLongestPalindromePrefix(s);
}
```

### 💡 Solution 3: Prefix Matching Approach for Shortest Palindrome

```javascript
function shortestPalindromePrefixMatching(s) {
    // Reverse the input string
    const reversed = s.split('').reverse().join('');
    const length = reversed.length;

    // Check for the shortest palindrome by matching prefixes
    for (let i = 0; i < length; i++) {
        const prefixToMatch = s.substring(0, (length - i + 1) / 2);
        const candidatePrefix = reversed.substring(i, (length + i + 1) / 2);

        if (prefixToMatch === candidatePrefix) {
            return reversed.substring(0, i) + s;
        }
    }

    // If no valid prefix is found, return the reversed string with last character excluded
    return reversed.substring(0, length - 1) + s;
}
```

### 💡 Solution 4: Using Dynamic Programming

```javascript
function shortestPalindromeDP(s) {
    function isPalindrome(i, j) {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    let res = s.split('');
    for (let i = s.length - 1; i >= 0; i--) {
        if (isPalindrome(0, i)) {
            let suffix = s.slice(i + 1);
            res = [...suffix.split('').reverse(), ...res];
            return res.join('');
        }
    }
    return res.join('');
}
```

### 💡 Solution 5: Hashing Approach

```javascript
function shortestPalindromeHashing(s) {
    const base = 131; // Base for the polynomial rolling hash
    const mod = 1e9 + 7; // Modulus to handle large numbers and avoid overflow
    let mul = 1; // Multiplier for the suffix hash
    let prefix = 0; // Hash of the prefix
    let suffix = 0; // Hash of the suffix
    let idx = 0; // Index where the longest palindromic prefix ends
    const n = s.length;
    
    // Calculate hashes to find the longest palindromic prefix
    for (let i = 0; i < n; ++i) {
        const t = s.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
        prefix = (prefix * base + t) % mod;
        suffix = (suffix + t * mul) % mod;
        mul = (mul * base) % mod;
        
        if (prefix === suffix) {
            idx = i + 1;
        }
    }
    
    // If the entire string is a palindrome, return it
    if (idx === n) {
        return s;
    }
    
    // Build the shortest palindrome by adding the reversed suffix to the original string
    const suffixToAdd = s.substring(idx).split('').reverse().join('');
    return suffixToAdd + s;
}
```