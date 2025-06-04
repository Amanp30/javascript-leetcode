# Find the Longest Word in a Sentence

## 📝 Problem

Write a function that finds and returns the longest word in a given sentence. If there are multiple words with the maximum length, return the first one.


## 📌 Examples

### Example 1

**Input:** str = "Hey its me aman pareek"  
**Output:** "pareek"

### Example 2

**Input:** num = 874156  
**Output:** ❌ Throw error => Your input is not a string

---

## ✅ Solutions

### 💡 Solution 1: Using split, map, and sort

```javascript
function findLongestWordUsingSplitMapSort(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error("Your input is not a string");
  }
  return sentence
    .split(" ")
    .map(word => ({ length: word.length, word }))
    .sort((a, b) => b.length - a.length)[0].word;
}
```

### 💡 Solution 2: Using split, map, and filter

```javascript
function findLongestWordUsingSplitMapFilter(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error("Your input is not a string");
  }
  const words = sentence.split(" ");
  const maxLength = Math.max(...words.map(word => word.length));
  return words.filter(word => word.length === maxLength)[0];
}
```

### 💡 Solution 3: Using split and sort

```javascript
function findLongestWordUsingSplitAndSort(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error("Your input is not a string");
  }
  return sentence.split(" ").sort((a, b) => b.length - a.length)[0];
}
```

### 💡 Solution 4: Using a for Loop

```javascript
function findLongestWordUsingForLoop(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error("Your input is not a string");
  }
  const words = sentence.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
```

### 💡 Solution 5: Using Array.prototype.reduce

```javascript
function findLongestWordUsingReduce(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error("Your input is not a string");
  }
  return sentence.split(" ").reduce((longest, word) => 
    word.length > longest.length ? word : longest, ""
  );
}
```

### 💡 Solution 6: Using Array.prototype.every

```javascript
function findLongestWordUsingEvery(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error("Your input is not a string");
  }
  const words = sentence.split(" ");
  let longestWord = words[0];
  words.every(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
    return true; // Continue iteration
  });
  return longestWord;
}
```

### 💡 Solution 7: Using for...of Loop

```javascript
function findLongestWordUsingForOf(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error("Your input is not a string");
  }
  const words = sentence.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
```

### 💡 Solution 8: Using String.prototype.match

```javascript
function findLongestWordUsingMatch(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error("Your input is not a string");
  }
  const words = sentence.match(/\w+/g) || [];
  return words.reduce((longest, word) => 
    word.length > longest.length ? word : longest, ""
  );
}
```

### 💡 Solution 9: Using String.prototype.split and filter

```javascript
function findLongestWordUsingSplitFilter(sentence) {
  if (typeof sentence !== "string") {
    throw new Error("Your input is not a string");
  }
  const words = sentence.split(" ");
  const maxLength = words.reduce((max, word) => Math.max(max, word.length), 0);
  return words.filter((word) => word.length === maxLength)[0];
}
```

### 💡 Solution 10: Using Array.prototype.find

```javascript
function findLongestWordUsingFind(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error("Your input is not a string");
  }
  const words = sentence.split(" ");
  const maxLength = Math.max(...words.map(word => word.length));
  return words.find(word => word.length === maxLength);
}
```