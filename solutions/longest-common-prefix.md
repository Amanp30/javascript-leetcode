# Longest Common Prefix

## 📝 Problem

You are given an array of strings `strs`. Your task is to write a function that finds the longest common prefix string shared by all the strings in the array. If no common prefix exists, return an empty string `""`.

A common prefix is a substring that appears at the beginning of each string in the array.


## 📌 Examples

### Example 1

**Input:** strsArray = ["flower","flow","flight"]  
**Output:** "fl"

---

## ✅ Solutions

### 💡 Solution 1: Horizontal Scanning

```javascript
function longestCommonPrefixHorizontal(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}
```

### 💡 Solution 2: Vertical Scanning

```javascript
function longestCommonPrefixVertical(strs) {
    if (strs.length === 0) return "";
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}
```

### 💡 Solution 3: Divide and Conquer

```javascript
function longestCommonPrefixDivideAndConquer(strs) {
    if (strs.length === 0) return "";
    
    function findCommonPrefix(left, right) {
        let i = 0;
        while (i < left.length && i < right.length && left[i] === right[i]) {
            i++;
        }
        return left.substring(0, i);
    }
    
    function longestCommonPrefixHelper(left, right) {
        if (left === right) return strs[left];
        const mid = Math.floor((left + right) / 2);
        return findCommonPrefix(longestCommonPrefixHelper(left, mid), longestCommonPrefixHelper(mid + 1, right));
    }
    
    return longestCommonPrefixHelper(0, strs.length - 1);
}
```

### 💡 Solution 4: Binary Search

```javascript
function longestCommonPrefixBinarySearch(strs) {
    if (strs.length === 0) return "";
    
    function isCommonPrefix(length) {
        const prefix = strs[0].substring(0, length);
        for (let i = 1; i < strs.length; i++) {
            if (!strs[i].startsWith(prefix)) return false;
        }
        return true;
    }
    
    let minLength = Math.min(...strs.map(s => s.length));
    let low = 1, high = minLength;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (isCommonPrefix(mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return strs[0].substring(0, Math.floor((low + high) / 2));
}
```

### 💡 Solution 5: Trie-Based Approach

```javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

function longestCommonPrefixTrie(strs) {
    if (strs.length === 0) return "";
    
    const root = new TrieNode();
    
    for (const word of strs) {
        let node = root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    
    let prefix = "";
    let node = root;
    while (Object.keys(node.children).length === 1 && !node.isEndOfWord) {
        const char = Object.keys(node.children)[0];
        prefix += char;
        node = node.children[char];
    }
    
    return prefix;
}
```

### 💡 Solution 6: Sorting-Based Approach

```javascript
function longestCommonPrefixSorting(strs) {
    if (strs.length === 0) return "";
    
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length && i < last.length && first[i] === last[i]) {
        i++;
    }
    return first.substring(0, i);
}
```

### 💡 Solution 7: Using Hash Set

```javascript
function longestCommonPrefixHashSet(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    for (const str of strs) {
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}
```

### 💡 Solution 8: Prefix Comparison

```javascript
function longestCommonPrefixComparison(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);
        if (prefix === "") return "";
    }
    return prefix;
}
```

### 💡 Solution 9: Character-by-Character Comparison

```javascript
function longestCommonPrefixCharByChar(strs) {
    if (strs.length === 0) return "";
    
    let commonPrefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return commonPrefix;
            }
        }
        commonPrefix += char;
    }
    
    return commonPrefix;
}
```

### 💡 Solution 10: Using Recursion

```javascript
function longestCommonPrefixRecursive(strs) {
    if (strs.length === 0) return "";
    
    function commonPrefix(l, r) {
        if (l === r) return strs[l];
        const mid = Math.floor((l + r) / 2);
        const leftPrefix = commonPrefix(l, mid);
        const rightPrefix = commonPrefix(mid + 1, r);
        return findCommonPrefix(leftPrefix, rightPrefix);
    }
    
    function findCommonPrefix(left, right) {
        let i = 0;
        while (i < left.length && i < right.length && left[i] === right[i]) {
            i++;
        }
        return left.substring(0, i);
    }
    
    return commonPrefix(0, strs.length - 1);
}
```