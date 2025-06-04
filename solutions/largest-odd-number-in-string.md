# Largest Odd Number in String

## 📝 Problem

You are given a string `num` that represents a large integer. Your task is to find and return the largest odd integer that can be obtained as a non-empty substring of `num`. If no odd integer exists within the string, return an empty string.


## 📌 Examples

### Example 1

**Input:** num = "52"  
**Output:** "5"

### Example 2

**Input:** num = "4206"  
**Output:** ""

### Example 3

**Input:** num = "35427"  
**Output:** "35427"

---

## ✅ Solutions

### 💡 Solution 1: Naive Approach

```javascript
function largestOddSubstringNaive(num) {
    let largestOdd = "";

    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j <= num.length; j++) {
            let substring = num.slice(i, j);
            if (parseInt(substring) % 2 !== 0 && substring.length > largestOdd.length) {
                largestOdd = substring;
            }
        }
    }

    return largestOdd;
}
```

### 💡 Solution 2: From Right to Left

```javascript
function largestOddSubstringRightToLeft(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return "";
}
```

### 💡 Solution 3: Check Last Digit

```javascript
function largestOddSubstringLastDigit(num) {
    let largestOdd = "";

    // Scan the string from the end
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            largestOdd = num.slice(0, i + 1);
            break;
        }
    }

    return largestOdd;
}
```

### 💡 Solution 4: Using Regular Expressions

```javascript
function largestOddSubstringRegex(num) {
    let match = num.match(/.*[13579]/g);
    return match ? match[match.length - 1] : "";
}
```

### 💡 Solution 5: Binary Search

```javascript
function largestOddSubstringEfficient(num) {
    let largestOdd = "";

    // Scan from right to left
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            largestOdd = num.slice(0, i + 1);
            break;
        }
    }

    return largestOdd;
}
```

### 💡 Solution 6: Sliding Window

```javascript
function largestOddSubstringSlidingWindow(num) {
    let largestOdd = "";
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < num.length; windowEnd++) {
        if (num[windowEnd] % 2 !== 0) {
            largestOdd = num.slice(windowStart, windowEnd + 1);
        }
    }

    return largestOdd;
}
```

### 💡 Solution 7: Dynamic Programming

```javascript
function largestOddSubstringDP(num) {
    let dp = Array(num.length).fill("");
    let largestOdd = "";

    for (let i = 0; i < num.length; i++) {
        dp[i] = num[i] % 2 !== 0 ? num[i] : "";
        if (dp[i].length > largestOdd.length) {
            largestOdd = dp[i];
        }
        for (let j = i - 1; j >= 0; j--) {
            dp[i] = num.slice(j, i + 1);
            if (parseInt(dp[i]) % 2 !== 0 && dp[i].length > largestOdd.length) {
                largestOdd = dp[i];
            }
        }
    }

    return largestOdd;
}
```

### 💡 Solution 8: Stack-Based Approach

```javascript
function largestOddSubstringStack(num) {
    let stack = [];
    let largestOdd = "";

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            stack.push(num.slice(0, i + 1));
        }
    }

    while (stack.length > 0) {
        let candidate = stack.pop();
        if (candidate.length > largestOdd.length) {
            largestOdd = candidate;
        }
    }

    return largestOdd;
}
```

### 💡 Solution 9: Greedy Approach

```javascript
function largestOddSubstringGreedy(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return "";
}
```

### 💡 Solution 10: String Manipulation

```javascript
function largestOddSubstringStringManipulation(num) {
    let largestOdd = "";

    for (let i = 0; i < num.length; i++) {
        for (let j = i; j < num.length; j++) {
            let substring = num.substring(i, j + 1);
            if (parseInt(substring) % 2 !== 0 && substring.length > largestOdd.length) {
                largestOdd = substring;
            }
        }
    }

    return largestOdd;
}
```