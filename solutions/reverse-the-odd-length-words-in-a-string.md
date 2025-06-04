# Reverse the Odd-Length Words in a String

## 📝 Problem

Write a function that takes a sentence as input and reverses each word with an odd length while leaving words with an even length unchanged. The function should maintain the original word order and spacing.


## 📌 Examples

### Example 1

**Input:** str = "This is a test sentence with odd and even length words"  
**Output:** "This is a test sentence with ddo dna even length sdrow"

### Example 2

**Input:** str = "Hello world"  
**Output:** "olleH dlrow"

---

## ✅ Solutions

### 💡 Solution 1: Using split, map, and join

```javascript
function reverseOddLengthWordsUsingSplitMapJoin(sentence) {
  return sentence
    .split(" ")
    .map(word => word.length % 2 === 1 ? word.split("").reverse().join("") : word)
    .join(" ");
}
```

### 💡 Solution 2: Using for Loop

```javascript
function reverseOddLengthWordsUsingForLoop(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 1) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
}
```

### 💡 Solution 3: Using for...of Loop

```javascript
function reverseOddLengthWordsUsingForOfLoop(sentence) {
  const words = sentence.split(" ");
  const reversedWords = [];
  for (const word of words) {
    if (word.length % 2 === 1) {
      reversedWords.push(word.split("").reverse().join(""));
    } else {
      reversedWords.push(word);
    }
  }
  return reversedWords.join(" ");
}
```

### 💡 Solution 4: Using reduce

```javascript
function reverseOddLengthWordsUsingReduce(sentence) {
  return sentence
    .split(" ")
    .reduce((acc, word) => {
      const reversedWord = word.length % 2 === 1 ? word.split("").reverse().join("") : word;
      return acc + (acc ? " " : "") + reversedWord;
    }, "");
}
```

### 💡 Solution 5: Using Array.from and map

```javascript
function reverseOddLengthWordsUsingArrayFrom(sentence) {
  return Array.from(sentence.split(" "))
    .map(word => word.length % 2 === 1 ? Array.from(word).reverse().join("") : word)
    .join(" ");
}
```

### 💡 Solution 6: Using split and Manual String Reversal

```javascript
function reverseOddLengthWordsUsingManualReversal(sentence) {
  return sentence
    .split(" ")
    .map(word => {
      if (word.length % 2 === 1) {
        let reversedWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
          reversedWord += word[i];
        }
        return reversedWord;
      }
      return word;
    })
    .join(" ");
}
```

### 💡 Solution 7: Using split, map, and String.prototype.replace

```javascript
function reverseOddLengthWordsUsingReplace(sentence) {
  return sentence.replace(/\S+/g, word => word.length % 2 === 1 ? word.split("").reverse().join("") : word);
}
```

### 💡 Solution 8: Using map with split and reverse

```javascript
function reverseOddLengthWordsUsingMapSplitReverse(sentence) {
  return sentence
    .split(" ")
    .map(word => word.length % 2 === 1 ? [...word].reverse().join("") : word)
    .join(" ");
}
```

### 💡 Solution 9: Using Array.prototype.forEach

```javascript
function reverseOddLengthWordsUsingForEach(sentence) {
  const words = sentence.split(" ");
  words.forEach((word, index) => {
    if (word.length % 2 === 1) {
      words[index] = word.split("").reverse().join("");
    }
  });
  return words.join(" ");
}
```

### 💡 Solution 10: Using a Linked List Approach

```javascript
function reverseOddLengthWordsUsingLinkedList(sentence) {
  const words = sentence.split(" ");
  const reversedWords = [];
  for (const word of words) {
    if (word.length % 2 === 1) {
      let reversedWord = "";
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      }
      reversedWords.push(reversedWord);
    } else {
      reversedWords.push(word);
    }
  }
  return reversedWords.join(" ");
}
```