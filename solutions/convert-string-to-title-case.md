# Convert String to Title Case

## 📝 Problem

Write a function that converts a given string into Title Case. In Title Case, the first letter of each word is capitalized, and the rest of the letters in each word are in lowercase.


## 📌 Examples

### Example 1

**Input:** str = "Hey Aman is a correct way to convert a string to title case"  
**Output:** "Hey Aman Is A Correct Way To Convert A String To Title Case"

---

## ✅ Solutions

### 💡 Solution 1: Using replace Method with Regex

```javascript
function convertToTitleCaseUsingReplace(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
```

### 💡 Solution 2: Using split, map, splice, and join

```javascript
function convertToTitleCaseUsingSplitMapJoin(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
```

### 💡 Solution 3: Using for Loop

```javascript
function convertToTitleCaseUsingForLoop(str) {
  const words = str.split(" ");
  let titleCasedString = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    titleCasedString += (i > 0 ? " " : "") + word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return titleCasedString;
}
```

### 💡 Solution 4: Using split, map, and join

```javascript
function convertToTitleCaseUsingSplitMapJoin2(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
```

### 💡 Solution 5: Using reduce

```javascript
function convertToTitleCaseUsingReduce(str) {
  return str
    .split(" ")
    .reduce((titleCasedString, word) => {
      return titleCasedString + (titleCasedString ? " " : "") + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }, "");
}
```

### 💡 Solution 6: Using Array.from and map

```javascript
function convertToTitleCaseUsingArrayFromMap(str) {
  return Array.from(str.split(" "))
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
```

### 💡 Solution 7: Using Array.prototype.map

```javascript
function convertToTitleCaseUsingMap(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
```

### 💡 Solution 8: Using Regular Expression with replace

```javascript
function convertToTitleCaseUsingRegexReplace(str) {
  return str.replace(
    /\b\w+/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}
```

### 💡 Solution 9: Using String.prototype.replace with Match

```javascript
function convertToTitleCaseUsingMatchReplace(str) {
  return str
  .toLowerCase()
  .replace(/\b\w/g, (char) => char.toUpperCase());
}
```

### 💡 Solution 10: Using String.prototype.split, Array.from, and join

```javascript
function convertToTitleCaseUsingSplitArrayJoin(str) {
  const words = str.split(" ");
  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
```