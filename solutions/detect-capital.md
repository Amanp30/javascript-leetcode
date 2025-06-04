#  Detect Capital

## 📝 Problem

You are given a string `word` consisting of uppercase and lowercase English letters. Your task is to determine whether the capitalization of letters in the given word adheres to one of the following rules:

1.  **All Letters are Uppercase:** The entire word is written in uppercase letters (e.g., "USA").
    
2.  **All Letters are Lowercase:** The entire word is written in lowercase letters (e.g., "leetcode").
    
3.  **Only the First Letter is Uppercase:** The word starts with an uppercase letter followed by lowercase letters (e.g., "Google").
    

Your function should return `true` if the word adheres to any of these rules. Otherwise, return `false`.


## 📌 Examples

### Example 1

**Input:** word = "INDIA"  
**Output:** true

### Example 2

**Input:** word = "FlaG"  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Valid Capital Pattern

```javascript
function detectCapitalUse(word) {
    const n = word.length;
    let allUpper = false;

    // Check if the first letter is uppercase and the second letter is also uppercase
    if (word[0] === word[0].toUpperCase()) {
        if (n > 1 && word[1] === word[1].toUpperCase()) {
            allUpper = true;
        }
    }

    // Validate the capitalization based on the `allUpper` flag
    for (let i = 1; i < n; i++) {
        if (!allUpper) {
            // Check if the word is not all uppercase; all other characters must be lowercase
            if (word[i] === word[i].toUpperCase()) {
                return false;
            }
        } else {
            // Check if the word is all uppercase; all other characters must be uppercase
            if (word[i] === word[i].toLowerCase()) {
                return false;
            }
        }
    }

    return true;
}
```

### 💡 Solution 2: Simple Iterative Check

```javascript
function detectCapitalUseSimple(word) {
    const isAllCaps = word === word.toUpperCase();
    const isAllLower = word === word.toLowerCase();
    const isFirstCaps = word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase();

    return isAllCaps || isAllLower || isFirstCaps;
}
```

### 💡 Solution 3: Regular Expression Approach

```javascript
function detectCapitalUseRegex(word) {
    return /^[A-Z]+$/.test(word) || /^[a-z]+$/.test(word) || /^[A-Z][a-z]+$/.test(word);
}
```

### 💡 Solution 4: Using toUpperCase and toLowerCase Methods

```javascript
function detectCapitalUseCaseConversion(word) {
    const allCaps = word.toUpperCase();
    const allLower = word.toLowerCase();
    const firstCaps = word[0].toUpperCase() + word.slice(1).toLowerCase();

    return word === allCaps || word === allLower || word === firstCaps;
}
```

### 💡 Solution 5: Counting Uppercase Letters

```javascript
function detectCapitalUseCountUpper(word) {
    let upperCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) upperCount++;
    }

    return upperCount === word.length || upperCount === 0 || (upperCount === 1 && word[0] === word[0].toUpperCase());
}
```

### 💡 Solution 6: Checking Patterns Directly

```javascript
function detectCapitalUsePattern(word) {
    if (word.length === 0) return false;

    if (word[0] === word[0].toUpperCase()) {
        return word.slice(1) === word.slice(1).toLowerCase() || word === word.toUpperCase();
    }

    return word === word.toLowerCase();
}
```

### 💡 Solution 7: Using every Method

```javascript
function detectCapitalUseEvery(word) {
    const isAllCaps = word.split('').every(char => char === char.toUpperCase());
    const isAllLower = word.split('').every(char => char === char.toLowerCase());
    const isFirstCaps = word[0] === word[0].toUpperCase() && word.slice(1).split('').every(char => char === char.toLowerCase());

    return isAllCaps || isAllLower || isFirstCaps;
}
```