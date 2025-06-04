# Plus One

## 📝 Problem

You are given a large integer as an array of digits, where each element in the array represents a single digit of the integer. The digits are arranged from the most significant to the least significant. Importantly, there are no leading zeros in this array.

Your goal is to increment this large integer by one and return the updated integer in the same array format.

Write a function that efficiently handles the incrementation of large integers represented as arrays and returns the result as an updated array of digits. Ensure that your solution adheres to the constraints and correctly handles edge cases.


## 📌 Examples

### Example 1

**Input:** array = [1,2,3]  
**Output:** [1,2,4]

### Example 2

**Input:** array = [4,3,2,1]  
**Output:** [4,3,2,2]

### Example 3

**Input:** array = [9]  
**Output:** [1,0]

---

## ✅ Solutions

### 💡 Solution 1: Basic Approach with Carry Handling

```javascript
function plusOneBasic(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits];
}
```

### 💡 Solution 2: Using Array.prototype.reduceRight()

```javascript
function plusOneReduceRight(digits) {
    return digits.reduceRight((acc, num, index) => {
        if (index === digits.length - 1) {
            num++;
        }
        if (num > 9) {
            acc[index] = 0;
            acc.unshift(1);
        } else {
            acc[index] = num;
        }
        return acc;
    }, Array(digits.length).fill(0));
}
```

### 💡 Solution 3: Using BigInt

```javascript
function plusOneBigInt(digits) {
    const num = BigInt(digits.join('')) + BigInt(1);
    return num.toString().split('').map(Number);
}
```

### 💡 Solution 4: Using a Custom Helper Function for Carry

```javascript
function plusOneCustomCarry(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }
    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits;
}
```

### 💡 Solution 5: Using String Manipulation

```javascript
function plusOneStringManipulation(digits) {
    const numStr = digits.join('');
    const incrementedNum = (BigInt(numStr) + BigInt(1)).toString();
    return incrementedNum.split('').map(Number);
}
```

### 💡 Solution 6: Handling All Nines

```javascript
function plusOneAllNines(digits) {
    if (digits.every(digit => digit === 9)) {
        return [1, ...Array(digits.length).fill(0)];
    }
    
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return digits;
}
```

### 💡 Solution 7: Using Array.prototype.concat()

```javascript
function plusOneConcat(digits) {
    let carry = 1;
    const result = digits.slice().reverse().map(num => {
        let sum = num + carry;
        carry = Math.floor(sum / 10);
        return sum % 10;
    }).reverse();

    if (carry > 0) {
        result.unshift(carry);
    }
    return result;
}
```

### 💡 Solution 8: Using Array.prototype.reduce() with Concatenation

```javascript
function plusOneReduceConcat(digits) {
    let carry = 1;
    const result = digits.reduceRight((acc, num) => {
        let sum = num + carry;
        carry = Math.floor(sum / 10);
        acc.unshift(sum % 10);
        return acc;
    }, []);

    if (carry > 0) {
        result.unshift(carry);
    }
    return result;
}
```

### 💡 Solution 9: Using Decomposition

```javascript
function plusOneDecomposition(digits) {
    let carry = 1;
    const result = [];
    
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }
    
    if (carry > 0) {
        result.push(carry);
    }
    
    return result.reverse();
}
```

### 💡 Solution 10: Using Array.prototype.splice()

```javascript
function plusOneSplice(digits) {
    let carry = 1;
    let i = digits.length - 1;
    
    while (i >= 0 && carry > 0) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);
        i--;
    }
    
    if (carry > 0) {
        digits.splice(0, 0, carry);
    }
    
    return digits;
}
```

### 💡 Solution 11: Using Mathematical Computations

```javascript
function plusOneMath(digits) {
    let number = digits.reduce((acc, digit) => acc * 10 + digit, 0);
    number++;
    return number.toString().split('').map(Number);
}
```

### 💡 Solution 12: Using Recursion

```javascript
function plusOneRecursive(digits) {
    function helper(digits, index) {
        if (index < 0) {
            return [1, ...digits];
        }
        
        if (digits[index] < 9) {
            digits[index]++;
            return digits;
        }
        
        digits[index] = 0;
        return helper(digits, index - 1);
    }
    
    return helper(digits, digits.length - 1);
}
```

### 💡 Solution 13: Using Array.prototype.forEach()

```javascript
function plusOneForEach(digits) {
    let carry = 1;
    digits.reverse().forEach((num, index) => {
        let sum = num + carry;
        digits[index] = sum % 10;
        carry = Math.floor(sum / 10);
    });
    digits.reverse();
    
    if (carry > 0) {
        digits.unshift(carry);
    }
    
    return digits;
}
```