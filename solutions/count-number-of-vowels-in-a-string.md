# Count Number of Vowels in a String

## 📝 Problem

Write a function that counts the number of vowels (a, e, i, o, u) in a given string.


## 📌 Examples

### Example 1

**Input:** str = "Write a program to count the number of vowels in a string."  
**Output:** 17

---

## ✅ Solutions

### 💡 Solution 1: Using forEach with includes

```javascript
function countVowelsUsingForEach(str) {
  const lowerString = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  lowerString.split("").forEach((char) => {
    if (vowels.includes(char)) vowelCount++;
  });

  return vowelCount;
}
```

### 💡 Solution 2: Using filter with includes

```javascript
function countVowelsUsingFilter(str) {
  const lowerString = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  
  return lowerString.split("").filter((char) => vowels.includes(char)).length;
}
```

### 💡 Solution 3: Using Regular Expressions

```javascript
function countVowelsUsingRegex(str) {
  const lowerString = str.toLowerCase();
  const vowelRegex = /[aeiou]/g;
  const matches = lowerString.match(vowelRegex);

  return matches ? matches.length : 0;
}
```

### 💡 Solution 4: Using for Loop and switch Case

```javascript
function countVowelsUsingSwitch(str) {
  const lowerString = str.toLowerCase();
  let vowelCount = 0;

  for (let i = 0; i < lowerString.length; i++) {
    switch (lowerString[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelCount++;
        break;
      default:
        continue;
    }
  }

  return vowelCount;
}
```

### 💡 Solution 5: Using for Loop and indexOf

```javascript
function countVowelsUsingIndexOf(str) {
  const lowerString = str.toLowerCase();
  const vowels = "aeiou";
  let vowelCount = 0;

  for (let i = 0; i < lowerString.length; i++) {
    if (vowels.indexOf(lowerString[i]) !== -1) vowelCount++;
  }

  return vowelCount;
}
```

### 💡 Solution 6: Using reduce Method

```javascript
function countVowelsUsingReduce(str) {
  const lowerString = str.toLowerCase();
  const vowels = "aeiou";

  return lowerString.split("").reduce((count, char) => {
    return vowels.includes(char) ? count + 1 : count;
  }, 0);
}
```

### 💡 Solution 7: Using Array.from and filter

```javascript
function countVowelsUsingArrayFrom(str) {
  const lowerString = str.toLowerCase();
  const vowels = "aeiou";
  
  return Array.from(lowerString).filter(char => vowels.includes(char)).length;
}
```

### 💡 Solution 8: Using map and reduce

```javascript
function countVowelsUsingMapReduce(str) {
  const lowerString = str.toLowerCase();
  const vowels = "aeiou";

  return lowerString
    .split("")
    .map(char => vowels.includes(char) ? 1 : 0)
    .reduce((total, count) => total + count, 0);
}
```

### 💡 Solution 9: Using some Method

```javascript
function countVowelsUsingSome(str) {
  const lowerString = str.toLowerCase();
  const vowels = "aeiou";

  let vowelCount = 0;
  lowerString.split("").forEach(char => {
    if (vowels.split("").some(vowel => vowel === char)) vowelCount++;
  });

  return vowelCount;
}
```

### 💡 Solution 10: Using for...of Loop

```javascript
function countVowelsUsingForOf(str) {
  const lowerString = str.toLowerCase();
  const vowels = "aeiou";
  let vowelCount = 0;

  for (const char of lowerString) {
    if (vowels.includes(char)) vowelCount++;
  }

  return vowelCount;
}
```