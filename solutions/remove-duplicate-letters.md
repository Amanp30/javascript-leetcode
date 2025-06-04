# Remove Duplicate Letters

## 📝 Problem

You are given a string `s` consisting of lowercase English letters. Your task is to remove duplicate letters from the string so that every letter appears exactly once, and the resulting string is the smallest lexicographically among all possible results. In other words, the final string should be the smallest possible in alphabetical order after removing duplicates.


## 📌 Examples

### Example 1

**Input:** s = "bcabc"  
**Output:** "abc"

---

## ✅ Solutions

### 💡 Solution 1: Greedy Approach with Stack

```javascript
function removeDuplicateLettersStack(s) {
    const stack = [];
    const inStack = new Set();
    const lastOccurrence = {};
    
    for (const char of s) {
        lastOccurrence[char] = s.lastIndexOf(char);
    }
    
    for (const char of s) {
        if (inStack.has(char)) continue;
        while (stack.length && char < stack[stack.length - 1] && lastOccurrence[stack[stack.length - 1]] > s.indexOf(char)) {
            inStack.delete(stack.pop());
        }
        stack.push(char);
        inStack.add(char);
    }
    
    return stack.join('');
}
```

### 💡 Solution 2: Using a Greedy Approach with Count Arrays

```javascript
function removeDuplicateLettersGreedy(s) {
    const count = Array(26).fill(0);
    const inResult = Array(26).fill(false);
    
    for (const char of s) {
        count[char.charCodeAt() - 'a'.charCodeAt()]++;
    }
    
    const result = [];
    for (const char of s) {
        count[char.charCodeAt() - 'a'.charCodeAt()]--;
        if (inResult[char.charCodeAt() - 'a'.charCodeAt()]) continue;
        while (result.length && char < result[result.length - 1] && count[result[result.length - 1].charCodeAt() - 'a'.charCodeAt()] > 0) {
            inResult[result.pop().charCodeAt() - 'a'.charCodeAt()] = false;
        }
        result.push(char);
        inResult[char.charCodeAt() - 'a'.charCodeAt()] = true;
    }
    
    return result.join('');
}
```

### 💡 Solution 3: Using Last Occurrence Map and Stack

```javascript
function removeDuplicateLettersLastOccurrence(s) {
    const lastIndex = {};
    const stack = [];
    const inStack = new Set();
    
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (inStack.has(char)) continue;
        while (stack.length && char < stack[stack.length - 1] && i < lastIndex[stack[stack.length - 1]]) {
            inStack.delete(stack.pop());
        }
        stack.push(char);
        inStack.add(char);
    }
    
    return stack.join('');
}
```

### 💡 Solution 4: Using Character Frequency and Stack

```javascript
function removeDuplicateLettersCharFrequency(s) {
    const freq = Array(26).fill(0);
    const inResult = Array(26).fill(false);
    const result = [];
    
    for (const char of s) {
        freq[char.charCodeAt() - 'a'.charCodeAt()]++;
    }
    
    for (const char of s) {
        const index = char.charCodeAt() - 'a'.charCodeAt();
        freq[index]--;
        
        if (inResult[index]) continue;
        
        while (result.length && char < result[result.length - 1] && freq[result[result.length - 1].charCodeAt() - 'a'.charCodeAt()] > 0) {
            inResult[result.pop().charCodeAt() - 'a'.charCodeAt()] = false;
        }
        
        result.push(char);
        inResult[index] = true;
    }
    
    return result.join('');
}
```

### 💡 Solution 5: Recursive Backtracking Approach

```javascript
function removeDuplicateLettersBacktrack(s) {
    const lastIndex = {};
    const result = [];
    const used = Array(26).fill(false);
    
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    
    function backtrack(start) {
        if (start === s.length) return result.join('');
        
        for (let i = start; i < s.length; i++) {
            const char = s[i];
            if (used[char.charCodeAt() - 'a'.charCodeAt()]) continue;
            
            while (result.length && char < result[result.length - 1] && lastIndex[result[result.length - 1]] > i) {
                used[result.pop().charCodeAt() - 'a'.charCodeAt()] = false;
            }
            
            result.push(char);
            used[char.charCodeAt() - 'a'.charCodeAt()] = true;
        }
        
        return result.join('');
    }
    
    return backtrack(0);
}
```

### 💡 Solution 6: Using a Linked List for Result Construction

```javascript
function removeDuplicateLettersLinkedList(s) {
    const lastOccurrence = {};
    const result = [];
    const inResult = new Set();
    
    for (const char of s) {
        lastOccurrence[char] = s.lastIndexOf(char);
    }
    
    for (const char of s) {
        if (inResult.has(char)) continue;
        
        while (result.length && char < result[result.length - 1] && lastOccurrence[result[result.length - 1]] > s.indexOf(char)) {
            inResult.delete(result.pop());
        }
        
        result.push(char);
        inResult.add(char);
    }
    
    return result.join('');
}
```

### 💡 Solution 7: Using a Frequency Count Array

```javascript
function removeDuplicateLettersFreqArray(s) {
    const count = Array(26).fill(0);
    const inResult = Array(26).fill(false);
    const result = [];
    
    for (const char of s) {
        count[char.charCodeAt() - 'a'.charCodeAt()]++;
    }
    
    for (const char of s) {
        const index = char.charCodeAt() - 'a'.charCodeAt();
        count[index]--;
        
        if (inResult[index]) continue;
        
        while (result.length && char < result[result.length - 1] && count[result[result.length - 1].charCodeAt() - 'a'.charCodeAt()] > 0) {
            inResult[result.pop().charCodeAt() - 'a'.charCodeAt()] = false;
        }
        
        result.push(char);
        inResult[index] = true;
    }
    
    return result.join('');
}
```

### 💡 Solution 8: Using a Stack with Priority Queue

```javascript
function removeDuplicateLettersPriorityQueue(s) {
    const lastOccurrence = {};
    const result = [];
    const inResult = new Set();
    
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (inResult.has(char)) continue;
        
        while (result.length && char < result[result.length - 1] && lastOccurrence[result[result.length - 1]] > i) {
            inResult.delete(result.pop());
        }
        
        result.push(char);
        inResult.add(char);
    }
    
    return result.join('');
}
```

### 💡 Solution 9: Using Sorting and Set for Deduplication

```javascript
function removeDuplicateLettersSorting(s) {
    const result = [];
    const inResult = new Set();
    const sortedChars = [...new Set(s)].sort();
    
    for (const char of sortedChars) {
        if (inResult.has(char)) continue;
        while (result.length && char < result[result.length - 1] && s.indexOf(result[result.length - 1]) < s.indexOf(char)) {
            inResult.delete(result.pop());
        }
        result.push(char);
        inResult.add(char);
    }
    
    return result.join('');
}
```

### 💡 Solution 10: Using Hash Maps and Sorting

```javascript
function removeDuplicateLettersHashMap(s) {
    const lastOccurrence = {};
    const count = Array(26).fill(0);
    const result = [];
    const inResult = new Set();
    
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
        count[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        count[char.charCodeAt() - 'a'.charCodeAt()]--;
        
        if (inResult.has(char)) continue;
        
        while (result.length && char < result[result.length - 1] && lastOccurrence[result[result.length - 1]] > i) {
            inResult.delete(result.pop());
        }
        
        result.push(char);
        inResult.add(char);
    }
    
    return result.join('');
}
```