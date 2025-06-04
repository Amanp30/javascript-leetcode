# Reverse Every Word in a String

## 📝 Problem

Write a function that takes a sentence as input and reverses each word within the sentence individually while maintaining the original word order and spacing.


## 📌 Examples

### Example 1

**Input:** str = "Hey Aman is that correct way to reverse words of a string"  
**Output:** "yeH namA si taht tcerroc yaw ot esrever sdrow fo a gnirts"

---

## ✅ Solutions

### 💡 Solution 1: Using split, map, and join

```javascript
function reverseEachWordUsingSplitMapJoin(sentence) {
  return sentence.split(" ")
                 .map(word => word.split("").reverse().join(""))
                 .join(" ");
}
```

### 💡 Solution 2: Using a for loop

```javascript
function reverseEachWordUsingForLoop(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
}
```

### 💡 Solution 3: Using for...of loop

```javascript
function reverseEachWordUsingForOfLoop(sentence) {
  const words = sentence.split(" ");
  const reversedWords = [];
  for (const word of words) {
    reversedWords.push(word.split("").reverse().join(""));
  }
  return reversedWords.join(" ");
}
```

### 💡 Solution 4: Using reduce

```javascript
function reverseEachWordUsingReduce(sentence) {
  return sentence.split(" ")
                 .reduce((acc, word) => acc + (acc ? " " : "") + word.split("").reverse().join(""), "");
}
```

### 💡 Solution 5: Using Array.from and forEach

```javascript
function reverseEachWordUsingArrayFromForEach(sentence) {
  return sentence
    .split(" ")
    .map((word) => Array.from(word).reverse().join(""))
    .join(" ");
}
```

### 💡 Solution 6: Using map with split and reverse

```javascript
function reverseEachWordUsingMapSplitReverse(sentence) {
  return sentence
    .split(" ")
    .map((word) => [...word].reverse().join(""))
    .join(" ");
}
```

### 💡 Solution 7: Using split, reverse, and reduce

```javascript
function reverseEachWordUsingSplitReverseReduce(sentence) {
  return sentence.split(" ")
                 .map(word => word.split("").reverse().join(""))
                 .reduce((acc, word) => acc + (acc ? " " : "") + word, "");
}
```

### 💡 Solution 8: Using split and manual string reversal

```javascript
function reverseEachWordUsingSplitManual(sentence) {
  return sentence.split(" ")
                 .map(word => {
                   let reversedWord = "";
                   for (let i = word.length - 1; i >= 0; i--) {
                     reversedWord += word[i];
                   }
                   return reversedWord;
                 })
                 .join(" ");
}
```

### 💡 Solution 9: Using String.prototype.replace

```javascript
function reverseEachWordUsingReplace(sentence) {
  return sentence.replace(/\S+/g, word => word.split("").reverse().join(""));
}
```

### 💡 Solution 10: Using split, for loop, and join

```javascript
function reverseEachWordUsingSplitForJoin(sentence) {
  const words = sentence.split(" ");
  const reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    let reversedWord = "";
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversedWord += words[i][j];
    }
    reversedWords.push(reversedWord);
  }
  return reversedWords.join(" ");
}
```