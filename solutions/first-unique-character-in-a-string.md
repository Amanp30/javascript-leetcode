# Find the First Unique Character in a String

## 📝 Problem

Write a function that takes a string as input and returns the first character that appears exactly once. If there is no such character, return `null` or an appropriate indicator.


## 📌 Examples

### Example 1

**Input:** str = "swiss"  
**Output:** "w"

---

## ✅ Solutions

### 💡 Solution 1: Using a Frequency Map

```javascript
function findFirstUniqueCharacterUsingMap(str) {
  const frequency = new Map();

  // Count the frequency of each character
  for (const char of str) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  // Find the first unique character
  for (const char of str) {
    if (frequency.get(char) === 1) {
      return char;
    }
  }

  return null;
}
```

### 💡 Solution 2: Using a Frequency Array

```javascript
function findFirstUniqueCharacterUsingArray(str) {
  const frequency = new Array(256).fill(0); // Assuming ASCII characters

  // Count the frequency of each character
  for (const char of str) {
    frequency[char.charCodeAt(0)]++;
  }

  // Find the first unique character
  for (const char of str) {
    if (frequency[char.charCodeAt(0)] === 1) {
      return char;
    }
  }

  return null;
}
```

### 💡 Solution 3: Using Two Passes with an Object

```javascript
function findFirstUniqueCharacterUsingObject(str) {
  const frequency = {};

  // Count the frequency of each character
  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Find the first unique character
  for (const char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}
```

### 💡 Solution 4: Using Array.prototype.find

```javascript
function findFirstUniqueCharacterUsingFind(str) {
  const frequency = {};

  // Count the frequency of each character
  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Find the first unique character using Array.prototype.find
  return str.split("").find(char => frequency[char] === 1) || null;
}
```

### 💡 Solution 5: Using Set for Uniqueness Check

```javascript
function findFirstUniqueCharacterUsingSet(str) {
  const seen = new Set();
  const unique = new Set();

  // Populate seen and unique sets
  for (const char of str) {
    if (seen.has(char)) {
      unique.delete(char);
    } else {
      seen.add(char);
      unique.add(char);
    }
  }

  // Return the first unique character
  return unique.values().next().value || null;
}
```

### 💡 Solution 6: Using a Single Pass with Linked List Approach

```javascript
function findFirstUniqueCharacterUsingLinkedList(str) {
  const frequency = {};
  const order = [];

  // Count the frequency of each character and track order
  for (const char of str) {
    if (frequency[char] === undefined) {
      frequency[char] = 1;
      order.push(char);
    } else {
      frequency[char]++;
    }
  }

  // Find the first unique character
  for (const char of order) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}
```

### 💡 Solution 7: Using Array.prototype.reduce

```javascript
function findFirstUniqueCharacterUsingReduce(str) {
  const frequency = Array.from(str).reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Array.from(str).find(char => frequency[char] === 1) || null;
}
```

### 💡 Solution 8: Using Map and Array.prototype.forEach

```javascript
function findFirstUniqueCharacterUsingMapForEach(str) {
  const frequency = new Map();

  // Count the frequency of each character
  Array.from(str).forEach(char => frequency.set(char, (frequency.get(char) || 0) + 1));

  // Find the first unique character
  return Array.from(str).find(char => frequency.get(char) === 1) || null;
}
```

### 💡 Solution 9: Using a Deque (Double-ended Queue) for Order Preservation

```javascript
function findFirstUniqueCharacterUsingDeque(str) {
  const frequency = {};
  const deque = [];

  // Count the frequency of each character and maintain order
  for (const char of str) {
    if (frequency[char] === undefined) {
      frequency[char] = 1;
      deque.push(char);
    } else {
      frequency[char]++;
      deque.splice(deque.indexOf(char), 1);
    }
  }

  // Return the first unique character
  return deque[0] || null;
}
```

### 💡 Solution 10: Using Array.prototype.indexOf

```javascript
function findFirstUniqueCharacterUsingIndexOf(str) {
  // Check each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }

  return null;
}
```