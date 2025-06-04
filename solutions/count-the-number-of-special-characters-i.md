# Count the Number of Special Characters I

## 📝 Problem

You are given a string `word`. A character is considered _special_ if it appears in both lowercase and uppercase forms within the string.

Your task is to count the number of unique special characters in the given string.


## 📌 Examples

### Example 1

**Input:** word = "aaAbcBC"  
**Output:** 3

### Example 2

**Input:** word = "abc"  
**Output:** 0

### Example 3

**Input:** word = "abBCab"  
**Output:** 1

---

## ✅ Solutions

### 💡 Solution 1: Using Sets to Track Special Characters

```javascript
function countSpecialCharactersSets(word) {
    const lowerSet = new Set();
    const upperSet = new Set();
    
    for (const char of word) {
        if (char === char.toLowerCase()) {
            lowerSet.add(char);
        } else {
            upperSet.add(char.toLowerCase());
        }
    }

    let specialCount = 0;
    for (const char of lowerSet) {
        if (upperSet.has(char)) {
            specialCount++;
        }
    }

    return specialCount;
}
```

### 💡 Solution 2: Using Frequency Count Arrays

```javascript
function countSpecialCharactersFrequency(word) {
    const lowerFreq = new Array(26).fill(false);
    const upperFreq = new Array(26).fill(false);

    for (const char of word) {
        if (char === char.toLowerCase()) {
            lowerFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
        } else {
            upperFreq[char.charCodeAt(0) - 'A'.charCodeAt(0)] = true;
        }
    }

    let specialCount = 0;
    for (let i = 0; i < 26; i++) {
        if (lowerFreq[i] && upperFreq[i]) {
            specialCount++;
        }
    }

    return specialCount;
}
```

### 💡 Solution 3: Using Map to Track Character Occurrences

```javascript
function countSpecialCharactersMap(word) {
    const charMap = new Map();

    for (const char of word) {
        const lowerChar = char.toLowerCase();
        const isUpper = char === char.toUpperCase();

        if (!charMap.has(lowerChar)) {
            charMap.set(lowerChar, { lower: false, upper: false });
        }

        if (isUpper) {
            charMap.get(lowerChar).upper = true;
        } else {
            charMap.get(lowerChar).lower = true;
        }
    }

    let specialCount = 0;
    for (const [_, { lower, upper }] of charMap) {
        if (lower && upper) {
            specialCount++;
        }
    }

    return specialCount;
}
```

### 💡 Solution 4: Using Regular Expressions

```javascript
function countSpecialCharactersRegex(word) {
    const uniqueChars = new Set(word.toLowerCase());
    let specialCount = 0;

    uniqueChars.forEach(char => {
        const lowerMatch = new RegExp(char, 'g').test(word);
        const upperMatch = new RegExp(char.toUpperCase(), 'g').test(word);

        if (lowerMatch && upperMatch) {
            specialCount++;
        }
    });

    return specialCount;
}
```

### 💡 Solution 5: Using Two Passes and indexOf

```javascript
function countSpecialCharactersIndexOf(word) {
    const uniqueChars = new Set(word.toLowerCase());
    let specialCount = 0;

    for (const char of uniqueChars) {
        if (word.indexOf(char) !== -1 && word.indexOf(char.toUpperCase()) !== -1) {
            specialCount++;
        }
    }

    return specialCount;
}
```

### 💡 Solution 6: Using Set Intersection

```javascript
function countSpecialCharactersSetIntersection(word) {
    const lowerSet = new Set();
    const upperSet = new Set();

    for (const char of word) {
        if (char === char.toLowerCase()) {
            lowerSet.add(char);
        } else {
            upperSet.add(char.toLowerCase());
        }
    }

    const intersection = [...lowerSet].filter(char => upperSet.has(char));
    return intersection.length;
}
```