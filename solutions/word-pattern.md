# Word Pattern

## 📝 Problem

Imagine you have a pattern described by a string `pattern` and another string `s` composed of words separated by spaces. Your task is to determine if the string `s` follows the pattern described by `pattern`.

To "follow the pattern" means:

*   Each letter in `pattern` should map to a unique word in `s`.
    
*   Each unique word in `s` should map to exactly one letter in `pattern`.
    
*   No two letters in `pattern` should map to the same word, and no two words in `s` should map to the same letter.
    

In simpler terms, you need to check if you can assign each letter in `pattern` to a word in `s` such that the pattern is consistently followed.


## 📌 Examples

### Example 1

**Input:** pattern = "abba", s = "dog cat cat dog"  
**Output:** true

### Example 2

**Input:** pattern = "abba", s = "dog cat cat fish"  
**Output:** false

### Example 3

**Input:** pattern = "aaaa", s = "dog cat cat dog"  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Hash Maps for Both Directions

```javascript
function wordPattern_HashMaps(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const mapPatternToWord = new Map();
    const mapWordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (mapPatternToWord.get(char) !== word && mapPatternToWord.has(char)) {
            return false;
        }
        if (mapWordToPattern.get(word) !== char && mapWordToPattern.has(word)) {
            return false;
        }

        mapPatternToWord.set(char, word);
        mapWordToPattern.set(word, char);
    }

    return true;
}
```

### 💡 Solution 2: Two Pass Solution with String Splitting and Maps

```javascript
function wordPattern_TwoPass(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const patternMap = new Map();
    const wordMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (patternMap.has(char)) {
            if (patternMap.get(char) !== word) return false;
        } else {
            patternMap.set(char, word);
        }

        if (wordMap.has(word)) {
            if (wordMap.get(word) !== char) return false;
        } else {
            wordMap.set(word, char);
        }
    }

    return true;
}
```

### 💡 Solution 3: Single Map with Pattern Encoding

```javascript
function wordPattern_SingleMapEncoding(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const map = new Map();
    const encodedPattern = [];
    const encodedWords = [];

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!map.has(char)) map.set(char, word);
        encodedPattern.push(map.get(char));
        encodedWords.push(word);
    }

    return encodedPattern.join(' ') === encodedWords.join(' ');
}
```

### 💡 Solution 4: Regular Expression Matching

```javascript
function wordPattern_Regex(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const map = {};
    let regexPattern = '';

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (map[char] && map[char] !== word) return false;
        if (!map[char]) map[char] = word;

        regexPattern += (i === 0 ? '' : '|') + `(${word})`;
    }

    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(s);
}
```

### 💡 Solution 5: Encoding Pattern and Words to Unique Strings

```javascript
function wordPattern_EncodedStrings(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const map = new Map();
    let patternString = '';
    let wordString = '';

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!map.has(char)) map.set(char, word);
        patternString += map.get(char);
        wordString += word;
    }

    return patternString === wordString;
}
```

### 💡 Solution 6: Using a Combined String Encoding for Verification

```javascript
function wordPattern_CombinedString(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const patternMap = new Map();
    const wordMap = new Map();
    let encodedPattern = '';
    let encodedWords = '';

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (!patternMap.has(char)) {
            patternMap.set(char, i);
            encodedPattern += i + '-';
        } else {
            encodedPattern += patternMap.get(char) + '-';
        }

        if (!wordMap.has(word)) {
            wordMap.set(word, i);
            encodedWords += i + '-';
        } else {
            encodedWords += wordMap.get(word) + '-';
        }
    }

    return encodedPattern === encodedWords;
}
```