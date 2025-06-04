# Largest 3-Same-Digit Number in String

## 📝 Problem

You are given a string `num` representing a large integer. Your task is to identify the largest integer that satisfies the following conditions:

1.  It is a substring of `num` with a length of exactly 3 characters.
    
2.  It consists of the same digit repeated three times (i.e., it is of the form "ddd", where `d` is a single digit).
    

Return this largest integer as a string. If no such integer exists, return an empty string.


## 📌 Examples

### Example 1

**Input:** num = "6777133339"  
**Output:** "777"

### Example 2

**Input:** num = "2300019"  
**Output:** "000"

### Example 3

**Input:** num = "42352338"  
**Output:** ""

---

## ✅ Solutions

### 💡 Solution 1: Naive Approach

```javascript
function largestThreeSameDigitNumberNaive(num) {
    let largest = "";
    
    for (let i = 0; i <= num.length - 3; i++) {
        const substring = num.slice(i, i + 3);
        if (substring[0] === substring[1] && substring[1] === substring[2]) {
            if (substring > largest) {
                largest = substring;
            }
        }
    }
    
    return largest;
}
```

### 💡 Solution 2: Regular Expressions

```javascript
function largestThreeSameDigitNumberRegex(num) {
    const matches = num.match(/(\d)\1{2}/g) || [];
    if (matches.length === 0) return "";

    return matches.reduce((max, current) => (current > max ? current : max), "");
}
```

### 💡 Solution 3: Dynamic Programming

```javascript
function largestThreeSameDigitNumberDP(num) {
    let max = "";
    let currentDigit = '';
    let count = 0;

    for (const char of num) {
        if (char === currentDigit) {
            count++;
        } else {
            currentDigit = char;
            count = 1;
        }

        if (count === 3) {
            const candidate = char.repeat(3);
            if (candidate > max) {
                max = candidate;
            }
        }
    }

    return max;
}
```

### 💡 Solution 4: Set-Based Approach

```javascript
function largestThreeSameDigitNumberSet(num) {
    const seen = new Set();

    for (let i = 0; i <= num.length - 3; i++) {
        const substring = num.slice(i, i + 3);
        if (substring[0] === substring[1] && substring[1] === substring[2]) {
            seen.add(substring);
        }
    }

    return seen.size ? Array.from(seen).reduce((max, current) => (current > max ? current : max), "") : "";
}
```

### 💡 Solution 5: Single Pass Check

```javascript
function largestThreeSameDigitNumberSinglePass(num) {
    let max = "";

    for (let i = 0; i <= num.length - 3; i++) {
        const substring = num.substring(i, i + 3);
        if (substring[0] === substring[1] && substring[1] === substring[2]) {
            if (substring > max) {
                max = substring;
            }
        }
    }

    return max;
}
```

### 💡 Solution 6: Stack-Based Approach

```javascript
function largestThreeSameDigitNumberStack(num) {
    const stack = [];
    
    for (const char of num) {
        if (stack.length >= 2 && stack[stack.length - 1] === char && stack[stack.length - 2] === char) {
            return char.repeat(3);
        }
        stack.push(char);
    }
    
    return "";
}
```

### 💡 Solution 7: Prefix Sum Array

```javascript
function largestThreeSameDigitNumberPrefixSum(num) {
    const prefix = Array(num.length).fill(0);
    
    for (let i = 0; i < num.length; i++) {
        prefix[i] = (i > 0 && num[i] === num[i - 1]) ? prefix[i - 1] + 1 : 1;
        if (prefix[i] >= 3) {
            return num[i].repeat(3);
        }
    }
    
    return "";
}
```

### 💡 Solution 8: Two pointers

```javascript
function largestTwoPointer(num) {
    let maxNum = -1;
    let l = 0;
    let r = l + 1;

    while (r < num.length) {
        if (num[l] !== num[r]) {
            l = r;
            r = l + 1;
        } else {
            if (r - l === 2) {
                maxNum = Math.max(maxNum, parseInt(num[l]));
                l = r + 1;
                r = l + 1;
            } else {
                r += 1;
            }
        }
    }

    return maxNum === -1 ? "" : `${maxNum}`.repeat(3);
}
```

### 💡 Solution 9: Sliding window approach

```javascript
function largestSlidingWindow(num) {
    let candidate = "";
    let start = 0;

    for (let i = 1; i < num.length; i++) {
        const current = num[i];
        const prev = num[i - 1];

        if (current === prev) {
            if (i - start + 1 === 3) {
                if (candidate === "") {
                    candidate = current;
                } else {
                    candidate = Math.max(parseInt(candidate), parseInt(current)).toString();
                }
            }
        } else {
            start = i;
        }
    }

    return candidate === "" ? "" : candidate.repeat(3);
}
```

### 💡 Solution 10: Iterator Approach

```javascript
function largestGoodInteger(num) {
    for (let d = 9; d >= 0; d--) {
        const triplet = d.toString().repeat(3);
        if (num.includes(triplet)) {
            return triplet;
        }
    }
    return "";
}
```

### 💡 Solution 11: Using while loop

```javascript
function findLargestTripleDigit(num) {
    let n = 9;
    while (n >= 0) {
        let s = n === 0 ? "000" : (n * 111).toString();
        if (num.includes(s)) {
            return s;
        }
        n--;
    }
    return "";
}
```

### 💡 Solution 12: method 12

```javascript
function findLargestTripleDigit12(num) {
    const tripleDigits = ['999', '888', '777', '666', '555', '444', '333', '222', '111', '000'];
    
    for (const digit of tripleDigits) {
        if (num.includes(digit)) {
            return digit;
        }
    }
    
    return '';
}
```