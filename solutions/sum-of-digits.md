# Sum of Digits 

## 📝 Problem

Write a JavaScript function to calculate the sum of the digits of a given integer. The function should handle both positive and negative integers. Additionally, it should be able to process floating-point numbers by ignoring the decimal point.


## 📌 Examples

### Example 1

**Input:** n = 54  
**Output:** 9

### Example 2

**Input:** n = -1234  
**Output:** 10

---

## ✅ Solutions

### 💡 Solution 1: Using a Loop

```javascript
function sumOfDigitsLoop(posNum) {
  if (typeof posNum !== "number" || Number.isNaN(posNum)) {
    throw new Error("Input must be a number");
  }

  // Convert the number to its absolute value and remove the decimal point
  posNum = Math.abs(posNum).toString().replace('.', '');
  let sum = 0;

  for (let i = 0; i < posNum.length; i++) {
    sum += parseInt(posNum[i], 10);
  }

  return sum;
}
```

### 💡 Solution 2: Using Array Methods

```javascript
function sumOfDigitsArray(posNum) {
  if (typeof posNum !== "number" || Number.isNaN(posNum)) {
    throw new Error("Input must be a number");
  }

  // Convert the number to its absolute value and remove the decimal point
  posNum = Math.abs(posNum).toString().replace('.', '');
  return posNum
    .split("")
    .map((digit) => parseInt(digit, 10))
    .reduce((acc, val) => acc + val, 0);
}
```

### 💡 Solution 3: Using Recursion

```javascript
function sumOfDigitsRecursion(posNum) {
  // Ensure input is a number and not NaN
  if (typeof posNum !== "number" || Number.isNaN(posNum)) {
    throw new Error("Input must be a valid number");
  }

  // Convert the number to its absolute value and remove the decimal point
  posNum = Math.abs(posNum).toString().replace('.', '');

  // Define the recursive function to sum digits
  const sumDigits = (str) => {
    if (str.length === 0) {
      return 0;
    }
    return parseInt(str[0], 10) + sumDigits(str.slice(1));
  };

  return sumDigits(posNum);
}
```

### 💡 Solution 4: Using Mathematical Operations

```javascript
function sumOfDigitsMath(posNum) {
  if (typeof posNum !== "number" || Number.isNaN(posNum)) {
    throw new Error("Input must be a number");
  }

  posNum = Math.abs(posNum); // Handle negative numbers
  posNum = parseInt(posNum.toString().replace('.', ''), 10); // Remove decimal point
  let sum = 0;

  while (posNum > 0) {
    sum += posNum % 10;
    posNum = Math.floor(posNum / 10);
  }

  return sum;
}
```

### 💡 Solution 5: Using String.prototype.split and Array.prototype.reduce

```javascript
function sumOfDigitsSplitReduce(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new Error("Input must be a number");
  }

  // Convert the number to its absolute value and remove the decimal point
  const numberStr = Math.abs(num).toString().replace('.', '');

  // Split the string into characters and sum the numeric values
  return numberStr
    .split("")
    .reduce((sum, char) => sum + Number(char), 0);
}
```

### 💡 Solution 6: Using Array.from

```javascript
function sumOfDigitsArrayFrom(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new Error("Input must be a number");
  }

  // Convert the number to its absolute value and remove the decimal point
  const numberStr = Math.abs(num).toString().replace('.', '');

  // Convert the string to an array of digits and sum them
  return Array.from(numberStr).reduce((sum, char) => {
    // Only add if the character is a digit
    return sum + (parseInt(char, 10) || 0);
  }, 0);
}
```

### 💡 Solution 7: Handling Floating Points and Edge Cases

```javascript
function sumOfDigitsRecursionFloat(posNum) {
  if (typeof posNum !== "number" || Number.isNaN(posNum)) {
    throw new Error("Input must be a number");
  }

  // Convert the number to its absolute value and remove the decimal point
  const numberStr = Math.abs(posNum).toString().replace('.', '');
  
  // Call the recursion function with the cleaned-up string representation
  return sumOfDigitsRecursion(Number(numberStr));
}
```

### 💡 Solution 8: Using a while loop

```javascript
function sumOfDigitsWhileLoop(posNum) {
  if (typeof posNum !== "number" || Number.isNaN(posNum)) {
    throw new Error("Input must be a number");
  }

  // Convert the number to its absolute value and remove the decimal point
  posNum = Math.abs(posNum).toString().replace('.', '');
  posNum = parseInt(posNum, 10); // Ensure it's an integer
  let sum = 0;

  while (posNum > 0) {
    sum += posNum % 10;
    posNum = Math.floor(posNum / 10);
  }

  return sum;
}
```