# Additive Number

## 📝 Problem

An additive number is a string of digits that can form an additive sequence. An additive sequence is a sequence where:

*   At least three numbers are present.
    
*   Each number (starting from the third) is the sum of the two preceding numbers.
    
*   Numbers cannot have leading zeros unless they are "0" itself.
    

**Objective:**

Given a string containing only digits, determine if it can be split into an additive sequence.


## 📌 Examples

### Example 1

**Input:** num = "112358"  
**Output:** true

### Example 2

**Input:** num = "199100199"  
**Output:** true

### Example 3

**Input:** num = "1023"  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Basic Iterative Approach

```javascript
function isAdditiveNumber_BasicIterative(digits) {
    const len = digits.length;

    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    for (let i = 1; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const firstNum = digits.substring(0, i);
            const secondNum = digits.substring(i, j);

            if (hasLeadingZeros(firstNum) || hasLeadingZeros(secondNum)) continue;

            let sequence = firstNum + secondNum;
            let prev1 = BigInt(firstNum);
            let prev2 = BigInt(secondNum);

            while (sequence.length < len) {
                const nextNum = prev1 + prev2;
                const nextStr = nextNum.toString();
                sequence += nextStr;

                if (sequence === digits) return true;

                prev1 = prev2;
                prev2 = nextNum;
            }
        }
    }

    return false;
}
```

### 💡 Solution 2: Recursive Approach with Backtracking

```javascript
function isAdditiveNumber_RecursiveBacktracking(digits) {
    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    function checkSequence(startIndex, firstNum, secondNum) {
        if (startIndex === digits.length) return true;
        const sum = BigInt(firstNum) + BigInt(secondNum);
        const sumStr = sum.toString();
        if (!digits.startsWith(sumStr, startIndex)) return false;
        return checkSequence(startIndex + sumStr.length, secondNum, sumStr);
    }

    for (let i = 1; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            const firstNum = digits.substring(0, i);
            const secondNum = digits.substring(i, j);
            if (!hasLeadingZeros(firstNum) && !hasLeadingZeros(secondNum)) {
                if (checkSequence(j, firstNum, secondNum)) return true;
            }
        }
    }

    return false;
}
```

### 💡 Solution 3: Dynamic Programming Approach

```javascript
function isAdditiveNumber_DynamicProgramming(digits) {
    const len = digits.length;

    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    for (let i = 1; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const firstNum = digits.substring(0, i);
            const secondNum = digits.substring(i, j);

            if (hasLeadingZeros(firstNum) || hasLeadingZeros(secondNum)) continue;

            let sequence = firstNum + secondNum;
            let prev1 = BigInt(firstNum);
            let prev2 = BigInt(secondNum);

            while (sequence.length < len) {
                const nextNum = prev1 + prev2;
                const nextStr = nextNum.toString();
                sequence += nextStr;

                if (sequence === digits) return true;

                prev1 = prev2;
                prev2 = nextNum;
            }
        }
    }

    return false;
}
```

### 💡 Solution 4: Using Regular Expressions

```javascript
function isAdditiveNumber_Regex(digits) {
    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    function validateSequence(startIndex, firstNum, secondNum) {
        if (startIndex === digits.length) return true;
        const sum = BigInt(firstNum) + BigInt(secondNum);
        const sumStr = sum.toString();
        if (!digits.startsWith(sumStr, startIndex)) return false;
        return validateSequence(startIndex + sumStr.length, secondNum, sumStr);
    }

    for (let i = 1; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            const firstNum = digits.substring(0, i);
            const secondNum = digits.substring(i, j);
            if (!hasLeadingZeros(firstNum) && !hasLeadingZeros(secondNum)) {
                if (validateSequence(j, firstNum, secondNum)) return true;
            }
        }
    }

    return false;
}
```

### 💡 Solution 5: Greedy Approach

```javascript
function isAdditiveNumber_Greedy(digits) {
    const len = digits.length;

    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    for (let i = 1; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const firstNum = digits.substring(0, i);
            const secondNum = digits.substring(i, j);

            if (hasLeadingZeros(firstNum) || hasLeadingZeros(secondNum)) continue;

            let sequence = firstNum + secondNum;
            let prev1 = BigInt(firstNum);
            let prev2 = BigInt(secondNum);

            while (sequence.length < len) {
                const nextNum = prev1 + prev2;
                const nextStr = nextNum.toString();
                sequence += nextStr;

                if (sequence === digits) return true;

                prev1 = prev2;
                prev2 = nextNum;
            }
        }
    }

    return false;
}
```

### 💡 Solution 6: Optimized Iterative Approach

```javascript
function isAdditiveNumber_OptimizedIterative(digits) {
    const len = digits.length;

    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    for (let i = 1; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const firstNum = digits.substring(0, i);
            const secondNum = digits.substring(i, j);

            if (hasLeadingZeros(firstNum) || hasLeadingZeros(secondNum)) continue;

            let sequence = firstNum + secondNum;
            let prev1 = BigInt(firstNum);
            let prev2 = BigInt(secondNum);

            while (sequence.length < len) {
                const nextNum = prev1 + prev2;
                const nextStr = nextNum.toString();
                sequence += nextStr;

                if (sequence === digits) return true;

                prev1 = prev2;
                prev2 = nextNum;
            }
        }
    }

    return false;
}
```

### 💡 Solution 7: Recursive Approach with Memoization

```javascript
function isAdditiveNumber_RecursiveMemoization(digits) {
    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    function isAdditive(startIndex, firstNum, secondNum, memo = {}) {
        const key = `${startIndex}-${firstNum}-${secondNum}`;
        if (key in memo) return memo[key];
        if (startIndex === digits.length) return true;
        const sum = BigInt(firstNum) + BigInt(secondNum);
        const sumStr = sum.toString();
        if (!digits.startsWith(sumStr, startIndex)) {
            memo[key] = false;
            return false;
        }
        const result = isAdditive(startIndex + sumStr.length, secondNum, sumStr, memo);
        memo[key] = result;
        return result;
    }

    for (let i = 1; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            const firstNum = digits.substring(0, i);
            const secondNum = digits.substring(i, j);
            if (!hasLeadingZeros(firstNum) && !hasLeadingZeros(secondNum)) {
                if (isAdditive(j, firstNum, secondNum)) return true;
            }
        }
    }

    return false;
}
```

### 💡 Solution 8: Brute Force Approach

```javascript
function isAdditiveNumber_BruteForce(digits) {
    const len = digits.length;

    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    for (let i = 1; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const firstNum = digits.substring(0, i);
            const secondNum = digits.substring(i, j);

            if (hasLeadingZeros(firstNum) || hasLeadingZeros(secondNum)) continue;

            let sequence = firstNum + secondNum;
            let prev1 = BigInt(firstNum);
            let prev2 = BigInt(secondNum);

            while (sequence.length < len) {
                const nextNum = prev1 + prev2;
                const nextStr = nextNum.toString();
                sequence += nextStr;

                if (sequence === digits) return true;

                prev1 = prev2;
                prev2 = nextNum;
            }
        }
    }

    return false;
}
```

### 💡 Solution 9: Pure Iterative Approach

```javascript
function isAdditiveNumber_PureIterative(digits) {
    const len = digits.length;

    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    for (let i = 1; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const firstNum = digits.substring(0, i);
            const secondNum = digits.substring(i, j);

            if (hasLeadingZeros(firstNum) || hasLeadingZeros(secondNum)) continue;

            let sequence = firstNum + secondNum;
            let prev1 = BigInt(firstNum);
            let prev2 = BigInt(secondNum);

            while (sequence.length < len) {
                const nextNum = prev1 + prev2;
                const nextStr = nextNum.toString();
                sequence += nextStr;

                if (sequence === digits) return true;

                prev1 = prev2;
                prev2 = nextNum;
            }
        }
    }

    return false;
}
```

### 💡 Solution 10: Verbose Brute Force

```javascript
function isAdditiveNumber_VerboseBruteForce(digits) {
    const len = digits.length;

    function hasLeadingZeros(number) {
        return number.length > 1 && number[0] === '0';
    }

    for (let i = 1; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const firstPart = digits.substring(0, i);
            const secondPart = digits.substring(i, j);

            if (hasLeadingZeros(firstPart) || hasLeadingZeros(secondPart)) continue;

            let resultSequence = firstPart + secondPart;
            let num1 = BigInt(firstPart);
            let num2 = BigInt(secondPart);

            while (resultSequence.length < len) {
                const nextNumber = num1 + num2;
                const nextStr = nextNumber.toString();
                resultSequence += nextStr;

                if (resultSequence === digits) return true;

                num1 = num2;
                num2 = nextNumber;
            }
        }
    }

    return false;
}
```