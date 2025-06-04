# Group Anagrams

## 📝 Problem

Imagine you have a list of words, and you want to group them into sets where each set contains words that are anagrams of each other.

**What’s an Anagram?**

An anagram is a word formed by rearranging the letters of another word. For example, "tea" and "eat" are anagrams because you can rearrange the letters of "tea" to get "eat."

**Your Task:**

Given an array of words, group all the anagrams together. Each group of anagrams should be in its own sub-array. The order of the groups and the order of words within each group doesn’t matter.


## 📌 Examples

### Example 1

**Input:** array = ["eat","tea","tan","ate","nat","bat"]  
**Output:** [["eat","tea","ate"],["tan","nat"],["bat"]]

### Example 2

**Input:** array = [""]  
**Output:** [[""]]

### Example 3

**Input:** array = ["a"]  
**Output:** [["a"]]

---

## ✅ Solutions

### 💡 Solution 1: Sorting-Based Approach

```javascript
function groupAnagrams_Sorting(strs) {
    const map = new Map();

    for (const str of strs) {
        // Sort the characters of the string
        const sortedStr = str.split('').sort().join('');
        
        // Use sorted string as a key and group the anagrams
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    // Convert the map values to an array of arrays
    return Array.from(map.values());
}
```

### 💡 Solution 2: Frequency Count Approach

```javascript
function groupAnagramsFrequency(words) {
    const anagramGroups = new Map();

    words.forEach(word => {
        const frequencyCount = Array(26).fill(0); // Frequency count for each letter
        for (const char of word) {
            frequencyCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = frequencyCount.join('#'); // Use the frequency array as a key
        if (!anagramGroups.has(key)) {
            anagramGroups.set(key, []);
        }
        anagramGroups.get(key).push(word);
    });

    return Array.from(anagramGroups.values());
}
```

### 💡 Solution 3: Hashing with Sorted Characters Approach

```javascript
function groupAnagramsHashing(words) {
    const anagramGroups = new Map();

    words.forEach(word => {
        const sortedCharacters = word.split('').sort().join('');
        if (!anagramGroups.has(sortedCharacters)) {
            anagramGroups.set(sortedCharacters, []);
        }
        anagramGroups.get(sortedCharacters).push(word);
    });

    return Array.from(anagramGroups.values());
}
```

### 💡 Solution 4: Bit Masking Approach

```javascript
function groupAnagramsBitMasking(words) {
    const anagramGroups = new Map();

    function computeBitMask(word) {
        let mask = 0;
        for (const char of word) {
            mask ^= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        return mask;
    }

    words.forEach(word => {
        const bitmaskKey = computeBitMask(word);
        if (!anagramGroups.has(bitmaskKey)) {
            anagramGroups.set(bitmaskKey, []);
        }
        anagramGroups.get(bitmaskKey).push(word);
    });

    return Array.from(anagramGroups.values());
}
```

### 💡 Solution 5: Canonical Form Approach

```javascript
function groupAnagramsCanonical(words) {
    const anagramGroups = new Map();

    words.forEach(word => {
        const canonicalForm = word.split('').sort().join('');
        if (!anagramGroups.has(canonicalForm)) {
            anagramGroups.set(canonicalForm, []);
        }
        anagramGroups.get(canonicalForm).push(word);
    });

    return Array.from(anagramGroups.values());
}
```

### 💡 Solution 6: Sorted Tuple Key Approach

```javascript
function groupAnagramsTupleKey(words) {
    const anagramGroups = new Map();

    words.forEach(word => {
        const sortedTuple = [...word].sort().join('');
        if (!anagramGroups.has(sortedTuple)) {
            anagramGroups.set(sortedTuple, []);
        }
        anagramGroups.get(sortedTuple).push(word);
    });

    return Array.from(anagramGroups.values());
}
```

### 💡 Solution 7: Regular Expression Approach

```javascript
function groupAnagramsRegex(words) {
    const anagramGroups = new Map();

    function generateKey(word) {
        return word.split('').sort().join('');
    }

    words.forEach(word => {
        const key = generateKey(word);
        if (!anagramGroups.has(key)) {
            anagramGroups.set(key, []);
        }
        anagramGroups.get(key).push(word);
    });

    return Array.from(anagramGroups.values());
}
```