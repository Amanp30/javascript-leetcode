# Maximum Product of Word Lengths

## 📝 Problem

You are given an array of strings `words`. Your task is to find the maximum value of the product of the lengths of two words in the array, where the two words do not share any common letters. If no such pair of words exists, return `0`.


## 📌 Examples

### Example 1

**Input:** words = ["abcw","baz","foo","bar","xtfn","abcdef"]  
**Output:** 16

### Example 2

**Input:** words = ["a","ab","abc","d","cd","bcd","abcd"]  
**Output:** 4

### Example 3

**Input:** words = ["a","aa","aaa","aaaa"]  
**Output:** 0

---

## ✅ Solutions

### 💡 Solution 1: Brute Force Approach

```javascript
function maxProductBruteForce(words) {
    const n = words.length;
    let maxProduct = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (!hasCommonLetters(words[i], words[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }
    
    function hasCommonLetters(word1, word2) {
        const set1 = new Set(word1);
        for (const char of word2) {
            if (set1.has(char)) return true;
        }
        return false;
    }
    
    return maxProduct;
}
```

### 💡 Solution 2: Bitmask Approach

```javascript
function maxProductBitmask(words) {
    const n = words.length;
    const masks = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (const char of words[i]) {
            masks[i] |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
        }
    }
    
    let maxProduct = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((masks[i] & masks[j]) === 0) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }
    
    return maxProduct;
}
```

### 💡 Solution 3: Hash Set Approach

```javascript
function maxProductHashSet(words) {
    const n = words.length;
    const sets = new Array(n);
    
    for (let i = 0; i < n; i++) {
        sets[i] = new Set(words[i]);
    }
    
    let maxProduct = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (!hasCommonLetters(sets[i], sets[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }
    
    function hasCommonLetters(set1, set2) {
        for (const char of set1) {
            if (set2.has(char)) return true;
        }
        return false;
    }
    
    return maxProduct;
}
```

### 💡 Solution 4: Two-Pointer Approach

```javascript
function maxProductTwoPointer(words) {
    const n = words.length;
    const lengths = words.map(word => word.length);
    
    let maxProduct = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (noCommonLetters(words[i], words[j])) {
                maxProduct = Math.max(maxProduct, lengths[i] * lengths[j]);
            }
        }
    }
    
    function noCommonLetters(word1, word2) {
        const set1 = new Set(word1);
        for (const char of word2) {
            if (set1.has(char)) return false;
        }
        return true;
    }
    
    return maxProduct;
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

function maxProductTrie(words) {
    const root = new TrieNode();
    
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    
    let maxProduct = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (noCommonLetters(words[i], words[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }
    
    function noCommonLetters(word1, word2) {
        const set1 = new Set(word1);
        for (const char of word2) {
            if (set1.has(char)) return false;
        }
        return true;
    }
    
    return maxProduct;
}
```

### 💡 Solution 6: Sorting Approach

```javascript
function maxProductSorting(words) {
    words.sort((a, b) => b.length - a.length);
    let maxProduct = 0;
    
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (noCommonLetters(words[i], words[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }
    
    function noCommonLetters(word1, word2) {
        const set1 = new Set(word1);
        for (const char of word2) {
            if (set1.has(char)) return false;
        }
        return true;
    }
    
    return maxProduct;
}
```

### 💡 Solution 7: Prefix Tree Approach

```javascript
class PrefixTreeNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

function maxProductPrefixTree(words) {
    const root = new PrefixTreeNode();
    
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new PrefixTreeNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }
    
    let maxProduct = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (noCommonLetters(words[i], words[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }
    
    function noCommonLetters(word1, word2) {
        const set1 = new Set(word1);
        for (const char of word2) {
            if (set1.has(char)) return false;
        }
        return true;
    }
    
    return maxProduct;
}
```

### 💡 Solution 8: Set-Based Approach

```javascript
function maxProductSet(words) {
    const n = words.length;
    const sets = words.map(word => new Set(word));
    
    let maxProduct = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (areDisjointSets(sets[i], sets[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }
    
    function areDisjointSets(set1, set2) {
        for (const char of set1) {
            if (set2.has(char)) return false;
        }
        return true;
    }
    
    return maxProduct;
}
```

### 💡 Solution 9: Character Frequency Approach

```javascript
function maxProductFrequency(words) {
    const n = words.length;
    const frequencies = words.map(word => {
        const freq = new Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        }
        return freq;
    });
    
    let maxProduct = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (areDisjoint(frequencies[i], frequencies[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }
    
    function areDisjoint(freq1, freq2) {
        for (let k = 0; k < 26; k++) {
            if (freq1[k] && freq2[k]) return false;
        }
        return true;
    }
    
    return maxProduct;
}
```

### 💡 Solution 10: Lookup Table Approach

```javascript
function maxProductLookupTable(words) {
    const n = words.length;
    const lookupTable = new Array(n);
    
    for (let i = 0; i < n; i++) {
        lookupTable[i] = new Set(words[i]);
    }
    
    let maxProduct = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isDisjoint(lookupTable[i], lookupTable[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }
    
    function isDisjoint(set1, set2) {
        for (const char of set1) {
            if (set2.has(char)) return false;
        }
        return true;
    }
    
    return maxProduct;
}
```