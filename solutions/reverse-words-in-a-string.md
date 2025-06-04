# Reverse words in a string

## 📝 Problem

Write a function that takes a sentence as input and reverses the order of the words in that sentence. The reversed sentence should maintain the original spacing between words and should not alter the characters within each word.


## 📌 Examples

### Example 1

**Input:** str = "Hey Aman is that correct way to reverse words of a string"  
**Output:** "string a of words reverse to way correct that is Aman Hey"

---

## ✅ Solutions

### 💡 Solution 1: Using reduce

```javascript
function reverseWordsUsingReduce(str) {
  return str.split(" ").reduce((reversed, word) => word + " " + reversed, "").trim();
}
```

### 💡 Solution 2: Using split, reverse, and join

```javascript
function reverseWordsUsingSplitReverseJoin(str) {
  return str.split(" ").reverse().join(" ");
}
```

### 💡 Solution 3: Using for loop and push

```javascript
function reverseWordsUsingForLoopAndPush(str) {
  const words = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      words.push(word);
      word = "";
    } else {
      word += str[i];
    }
  }
  words.push(word);
  return words.reverse().join(" ");
}
```

### 💡 Solution 4: Using for...of loop

```javascript
function reverseWordsUsingForOfLoop(str) {
  const words = [];
  let word = "";
  for (const char of str) {
    if (char === " ") {
      words.push(word);
      word = "";
    } else {
      word += char;
    }
  }
  words.push(word);
  return words.reverse().join(" ");
}
```

### 💡 Solution 5: Using split and map

```javascript
function reverseWordsUsingSplitAndMap(str) {
  const words = str.split(" ");
  return words.map((word, index, array) => array[array.length - 1 - index]).join(" ");
}
```

### 💡 Solution 6: Using Array.from and forEach

```javascript
function reverseWordsUsingArrayFromAndForEach(str) {
  const words = [];
  Array.from(str).forEach((char) => {
    if (char === " ") {
      words.push(words.pop().trim());
      words.push("");
    } else {
      if (words.length === 0) words.push("");
      words[words.length - 1] += char;
    }
  });
  words.push(words.pop().trim());
  return words.reverse().join(" ");
}
```

### 💡 Solution 7: Using String.prototype.replace with a regular expression

```javascript
function reverseWordsUsingReplaceRegex(str) {
  return str.replace(/(\S+)/g, (match, p1, offset, string) => {
    const words = string.match(/\S+/g);
    return words[words.length - 1 - words.indexOf(p1)];
  });
}
```

### 💡 Solution 8: Using split, filter, and reduce

```javascript
function reverseWordsUsingSplitFilterReduce(str) {
  return str.split(" ")
            .filter(word => word.length > 0)
            .reduce((reversed, word) => word + " " + reversed, "")
            .trim();
}
```

### 💡 Solution 9: Using a stack data structure

```javascript
function reverseWordsUsingStack(str) {
  const stack = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      stack.push(word);
      word = "";
    } else {
      word += str[i];
    }
  }
  stack.push(word);
  return stack.reverse().join(" ");
}
```

### 💡 Solution 10: Sliding Window Approach to Reverse Words in a String

```javascript
function reverseWordsSlidingWindow(s) {
    let result = "";
    
    // Return an empty string if input is empty or just whitespace
    if (s.length === 0 || s.trim() === "") {
        return result;
    }

    // If the string is just one character in length, return it
    if (s.length === 1) {
        return s;
    }

    // Extract the words using the GetWords function
    const words = getWords(s);

    // Reassembly of the words
    result = words.join(" ") + " ";

    // Trim the trailing space before returning
    return result.trimEnd();
}

function getWords(s) {
    const words = [];
    let i = s.length - 1, j = i;

    while (i >= 0) {
        // If current char is whitespace and the next is not
        if (s[i] === ' ' && s[i - 1] !== ' ') {
            j = i; // Mark end of word
        } 
        // If current char is not whitespace and the next is whitespace
        else if (s[i] !== ' ' && s[i - 1] === ' ') {
            // Extract the word
            if (j === s.length - 1 && s[j] !== ' ') {
                words.push(s.substring(i));
            } else {
                words.push(s.substring(i, j));
            }
        }
        // Handle the case when the last character is not whitespace
        if (i === 0 && s[i] !== ' ') {
            words.push(s.substring(i, j + 1));
        }
        i--;
    }

    return words;
}
```

### 💡 Solution 11: Using split, sort, and join with index manipulation

```javascript
function reverseWordsUsingSplitSortJoin(str) {
  const words = str.split(" ");
  return words.sort((a, b) => words.length - words.indexOf(a) - (words.length - words.indexOf(b))).join(" ");
}
```

### 💡 Solution 12: Two-Pointer Approach to Reverse Words in a String

```javascript
function reverseWordsTwoPointer(str) {
    const n = str.length;
    let ans = "";
    if (n === 0) return "";
    let temp = "";

    for (let i = 0; i < n; i++) {
        if (str[i] !== ' ') {
            temp += str[i];
        }

        if (str[i] === ' ' && temp.length !== 0) {
            ans = ans.length !== 0 ? temp + " " + ans : temp;
            temp = "";
        }
    }

    // Handle the last word
    if (temp.length !== 0) {
        ans = ans.length !== 0 ? temp + " " + ans : temp;
    }

    return ans.trim(); // Trim any leading or trailing spaces
}
```

### 💡 Solution 13: Divide and Conquer

```javascript
function reverseWordsDivideConquer(s) {
    const words = s.trim().split(/\s+/); // Split by whitespace and trim input
    let reversed = "";

    // Construct the reversed string by appending words in reverse order
    for (let i = words.length - 1; i >= 0; i--) {
        if (reversed) {
            reversed += " "; // Add a space if not the first word
        }
        reversed += words[i];
    }

    return reversed;
}
```