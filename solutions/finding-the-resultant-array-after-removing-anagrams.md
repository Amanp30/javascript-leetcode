# Finding the Resultant Array After Removing Anagrams

## 📝 Problem

You are given an array of strings called `words`, where each string consists of lowercase English letters.

Your task is to perform the following operation:

*   In each operation, select any index `i` such that `0 < i < words.length`, and if the string at index `i` is an anagram of the string at index `i - 1`, delete the string at index `i` from the array. Continue performing this operation as long as you can find such indices.
    

An **anagram** is a word or phrase formed by rearranging the letters of another word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

**Objective**: Return the array after performing all possible operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same final result.


## 📌 Examples

### Example 1

**Input:** words = ["abba","baba","bbaa","cd","cd"]  
**Output:** ["abba","cd"]

### Example 2

**Input:** words = ["a","b","c","d","e"]  
**Output:** ["a","b","c","d","e"]

---

## ✅ Solutions

### 💡 Solution 1: Using Stack for Anagram Removal

```javascript
function removeAnagramsStack(words) {
    let stack = [];
    
    for (let i = words.length - 1; i >= 0; i--) {
        let currentWord = words[i];
        
        // Remove elements from stack while the top of the stack is an anagram of the current word
        while (stack.length > 0 && areAnagrams(stack[stack.length - 1], currentWord)) {
            stack.pop();
        }
        
        stack.push(currentWord);
    }
    
    // Convert stack to result list
    let result = [];
    while (stack.length > 0) {
        result.push(stack.pop());
    }
    
    return result;
}

function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    let counts = new Array(26).fill(0);
    
    for (let char of word1) {
        counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    for (let char of word2) {
        counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    
    return counts.every(count => count === 0);
}
```

### 💡 Solution 2: Using Index-Based Traversal for Anagram Removal

```javascript
function removeAnagramsIndexBased(words) {
    let result = [];
    let n = words.length;
    let i = 0;

    while (i < n) {
        let j = i + 1;
        
        // Find the next index where words[i] and words[j] are not anagrams
        while (j < n && areAnagrams1(words[i], words[j])) {
            j++;
        }
        
        // Add the current word to the result list
        result.push(words[i]);
        
        // Move to the next set of words
        i = j;
    }
    
    return result;
}

function areAnagrams1(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    let counts = new Array(26).fill(0);
    
    for (let char of word1) {
        counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    for (let char of word2) {
        counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    
    return counts.every(count => count === 0);
}
```

### 💡 Solution 3: Using Set and Helper Function for Anagram Removal

```javascript
function removeAnagramsSet(words) {
    let set = new Set();
    
    while (set.size < words.length) {
        let found = false;
        for (let i = 0; i < words.length; i++) {
            if (set.has(i)) {
                continue;
            }
            if (i === words.length - 1) {
                break;
            }
            let next = findNextIndex(set, i + 1, words.length - 1);
            if (next === -1) {
                break;
            }
            if (areAnagrams2(words[i], words[next])) {
                set.add(next);
                found = true;
            }
        }
        if (!found) {
            break;
        }
    }
    
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (!set.has(i)) {
            result.push(words[i]);
        }
    }
    
    return result;
}

function findNextIndex(set, start, end) {
    for (let i = start; i <= end; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return -1;
}

function areAnagrams2(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    let counts = new Array(256).fill(0);
    
    for (let char of word1) {
        counts[char.charCodeAt(0)]++;
    }
    
    for (let char of word2) {
        counts[char.charCodeAt(0)]--;
    }
    
    return counts.every(count => count === 0);
}
```

### 💡 Solution 4: Using Sorting and Comparison for Anagram Removal

```javascript
function removeAnagramsSorting(words) {
    let result = [];
    let temp = "";

    for (let word of words) {
        // Convert word to a character array, sort it, and then convert back to a string
        let sortedWord = word.split('').sort().join('');
        
        // Add word to result if it's not an anagram of the previous word
        if (sortedWord !== temp) {
            result.push(word);
        }
        
        // Update temp to the current sorted word
        temp = sortedWord;
    }
    
    return result;
}
```

### 💡 Solution 5: Using Linked List and Sorting for Anagram Removal

```javascript
function removeAnagramsLinkedList(words) {
    let result = [];
    let lastAnagramStr = null;

    for (let word of words) {
        // Convert word to a character array, sort it, and then convert back to a string
        let sortedWord = word.split('').sort().join('');
        
        // Check if the current sorted word is the same as the last one
        if (sortedWord === lastAnagramStr) {
            continue;
        }
        
        // Update lastAnagramStr and add the word to the result list
        lastAnagramStr = sortedWord;
        result.push(word);
    }

    return result;
}
```