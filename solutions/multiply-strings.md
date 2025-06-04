# Multiply Strings

## 📝 Problem

Imagine you have two numbers, but instead of having them in a normal numeric format, they're given to you as strings of digits. Your job is to calculate the product of these two numbers and return the result as a string, just like how you received the numbers.

Here's the catch: you can't use any built-in functions to handle large numbers or directly convert these strings to numbers. You need to solve this using just basic string operations.


## 📌 Examples

### Example 1

**Input:** num1 = "2", num2 = "3"  
**Output:** "6"

### Example 2

**Input:** num1 = "123", num2 = "456"  
**Output:** "56088"

---

## ✅ Solutions

### 💡 Solution 1: Naive Multiplication

```javascript
function multiplyNaive(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    const len1 = num1.length;
    const len2 = num2.length;
    let result = Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    return result.join('').replace(/^0+/, '') || '0';
}
```

### 💡 Solution 2: String Manipulation Approach

```javascript
function multiplyStringManipulation(num1, num2) {
    // Edge case for multiplication with zero
    if (num1 === '0' || num2 === '0') return '0';

    // Convert strings into arrays of digits in reverse order
    const arr1 = num1.split('').reverse().map(Number);
    const arr2 = num2.split('').reverse().map(Number);
    const len1 = arr1.length;
    const len2 = arr2.length;

    // Initialize an array to hold the result
    const result = Array(len1 + len2).fill(0);

    // Perform multiplication digit by digit
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            const mul = arr1[i] * arr2[j];
            const sum = mul + result[i + j];
            result[i + j] = sum % 10;
            result[i + j + 1] += Math.floor(sum / 10);
        }
    }

    // Convert result array to string and remove leading zeros
    let resultStr = result.reverse().join('');
    resultStr = resultStr.replace(/^0+/, '');

    return resultStr || '0'; // Handle case when result is zero
}
```

### 💡 Solution 3: Matrix Multiplication Approach

```javascript
function multiplyMatrix(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    const result = Array(m + n).fill(0);

    // Multiply each digit of num1 by each digit of num2
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const p1 = i + j;
            const p2 = i + j + 1;
            const sum = mul + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    // Convert result array to string
    let resultStr = result.join('');
    resultStr = resultStr.replace(/^0+/, ''); // Remove leading zeros

    return resultStr || '0'; // Handle case when the result is zero
}
```

### 💡 Solution 4: Bitwise Manipulation Approach

```javascript
function multiplyBitwise(num1, num2) {
    let result = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
        let carry = 0;
        for (let j = num2.length - 1; j >= 0; j--) {
            let product = (num1[i] - '0') * (num2[j] - '0') + carry;
            carry = Math.floor(product / 10);
            result += (product % 10) * Math.pow(10, (num1.length - i - 1) + (num2.length - j - 1));
        }
        if (carry > 0) {
            result += carry * Math.pow(10, (num1.length - i - 1) + num2.length);
        }
    }
    return result.toString();
}
```

### 💡 Solution 5: Array Reduce Approach

```javascript
function multiplyArrayReduce(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const result = Array(len1 + len2).fill(0);

    // Convert strings into arrays of digits
    const arr1 = num1.split('').map(Number).reverse();
    const arr2 = num2.split('').map(Number).reverse();

    // Function to add two arrays representing numbers
    function addArrays(arr1, arr2) {
        const len = Math.max(arr1.length, arr2.length);
        const result = Array(len).fill(0);
        let carry = 0;

        for (let i = 0; i < len; i++) {
            const sum = (arr1[i] || 0) + (arr2[i] || 0) + carry;
            result[i] = sum % 10;
            carry = Math.floor(sum / 10);
        }

        if (carry > 0) result.push(carry);
        return result;
    }

    // Multiply each digit of num1 with each digit of num2
    arr1.forEach((digit1, i) => {
        arr2.forEach((digit2, j) => {
            const mul = digit1 * digit2;
            result[i + j] += mul;
            if (result[i + j] >= 10) {
                result[i + j + 1] += Math.floor(result[i + j] / 10);
                result[i + j] %= 10;
            }
        });
    });

    // Convert result array to string
    return result.reverse().join('').replace(/^0+/, '') || '0';
}
```

### 💡 Solution 6: BigInt Approach

```javascript
function multiplyBigInt(num1, num2) {
    return (BigInt(num1) * BigInt(num2)).toString();
}
```

### 💡 Solution 7: Optimized Nested Loops

```javascript
function multiplyOptimized(num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const result = Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const p1 = i + j;
            const p2 = i + j + 1;
            const sum = mul + result[p2];
            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    return result.join('').replace(/^0+/, '') || '0';
}
```

### 💡 Solution 8: Recursive Divide and Conquer

```javascript
function multiplyDivideAndConquer(num1, num2) {
    function multiplyHelper(x, y) {
        if (x.length === 1 || y.length === 1) return (parseInt(x) * parseInt(y)).toString();
        const midX = Math.floor(x.length / 2);
        const midY = Math.floor(y.length / 2);
        const x1 = x.slice(0, midX);
        const x0 = x.slice(midX);
        const y1 = y.slice(0, midY);
        const y0 = y.slice(midY);
        
        const z2 = multiplyHelper(x1, y1);
        const z0 = multiplyHelper(x0, y0);
        const z1 = multiplyHelper((parseInt(x1) + parseInt(x0)).toString(), (parseInt(y1) + parseInt(y0)).toString());
        const result = (parseInt(z2) * Math.pow(10, 2 * (Math.max(x.length, y.length) - midX))) +
                       ((parseInt(z1) - parseInt(z2) - parseInt(z0)) * Math.pow(10, Math.max(x.length, y.length) - midX)) +
                       parseInt(z0);
        return result.toString();
    }

    return multiplyHelper(num1, num2);
}
```