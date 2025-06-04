# Longest Palindromic Substring

## 📝 Problem

Given a string `s`, your goal is to find and return the longest substring within `s` that is a palindrome.

A palindrome is a sequence of characters that reads the same backward as forward. For example, `"aba"` is a palindrome, but `"abc"` is not.


## 📌 Examples

### Example 1

**Input:** s = "babad"  
**Output:** "bab"

### Example 2

**Input:** s = "cbbd"  
**Output:** "bb"

---

## ✅ Solutions

### 💡 Solution 1: Dynamic Programming

```javascript
function longestPalindromeDP(s) {
    const n = s.length;
    if (n === 0) return "";

    let start = 0;
    let maxLength = 1;

    const dp = Array(n).fill(false).map(() => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            let j = i + length - 1;
            if (s[i] === s[j]) {
                if (length === 2) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
                if (dp[i][j] && length > maxLength) {
                    start = i;
                    maxLength = length;
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
}
```

### 💡 Solution 2: Manachers Algorithm

```javascript
function longestPalindromeManacher(s) {
    let t = "#" + s.split("").join("#") + "#";
    const n = t.length;
    const p = Array(n).fill(0);
    let center = 0;
    let right = 0;

    for (let i = 0; i < n; i++) {
        if (i < right) {
            p[i] = Math.min(right - i, p[2 * center - i]);
        }
        while (i + p[i] + 1 < n && i - p[i] - 1 >= 0 && t[i + p[i] + 1] === t[i - p[i] - 1]) {
            p[i]++;
        }
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
    }

    let maxLen = 0;
    let start = 0;
    for (let i = 0; i < n; i++) {
        if (p[i] > maxLen) {
            maxLen = p[i];
            start = i;
        }
    }

    return s.substring((start - maxLen) / 2, (start + maxLen) / 2);
}
```

### 💡 Solution 3: Expand Around Center with Memoization

```javascript
function longestPalindromeExpandAroundCenterMemo(s) {
    const memo = new Map();

    function isPalindrome(left, right) {
        if (left > right) return true;
        if (memo.has(`${left},${right}`)) return memo.get(`${left},${right}`);
        const result = (left >= 0 && right < s.length && s[left] === s[right] && isPalindrome(left + 1, right - 1));
        memo.set(`${left},${right}`, result);
        return result;
    }

    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(i, j)) {
                if (j - i + 1 > maxLength) {
                    start = i;
                    maxLength = j - i + 1;
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
}
```

### 💡 Solution 4: Longest Palindromic Substring with Two Pointers

```javascript
function longestPalindromeTwoPointers(s) {
    if (s.length === 0) return "";

    let maxLen = 1;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;

        // Check for odd length palindromes
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1;
                start = l;
            }
            l--;
            r++;
        }

        l = i;
        r = i + 1;

        // Check for even length palindromes
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1;
                start = l;
            }
            l--;
            r++;
        }
    }

    return s.substring(start, start + maxLen);
}
```

### 💡 Solution 5: Using a Set for Palindromes

```javascript
function longestPalindromeUsingSet(s) {
    const palindromes = new Set();

    function addPalindromes(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            palindromes.add(s.substring(left, right + 1));
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        addPalindromes(i, i);
        addPalindromes(i, i + 1);
    }

    let longest = "";
    palindromes.forEach(palindrome => {
        if (palindrome.length > longest.length) {
            longest = palindrome;
        }
    });

    return longest;
}
```

### 💡 Solution 6: Recursive Approach

```javascript
function longestPalindromeRecursive(s) {
    function isPalindrome(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        let pal1 = isPalindrome(i, i);
        let pal2 = isPalindrome(i, i + 1);
        let currentLongest = pal1.length > pal2.length ? pal1 : pal2;
        if (currentLongest.length > longest.length) {
            longest = currentLongest;
        }
    }

    return longest;
}
```

### 💡 Solution 7: Using a Stack for Palindrome Check

```javascript
function longestPalindromeStack(s) {
    const stack = [];
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.substring(i, j + 1);
            if (isPalindromeStack(substring)) {
                if (substring.length > longest.length) {
                    longest = substring;
                }
            }
        }
    }

    return longest;

    function isPalindromeStack(str) {
        const stack = [];
        for (let char of str) {
            stack.push(char);
        }
        let reversed = "";
        while (stack.length) {
            reversed += stack.pop();
        }
        return str === reversed;
    }
}
```

### 💡 Solution 8: Using Hash Map for Palindrome Check

```javascript
function longestPalindromeHashMap(s) {
    const map = new Map();
    let longest = "";

    function isPalindrome(str) {
        if (map.has(str)) return map.get(str);
        const result = str === str.split("").reverse().join("");
        map.set(str, result);
        return result;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.substring(i, j + 1);
            if (isPalindrome(substring)) {
                if (substring.length > longest.length) {
                    longest = substring;
                }
            }
        }
    }

    return longest;
}
```