# Longest Valid Parentheses

## 📝 Problem

You are given a string composed of the characters `'('` and `')'`. Your objective is to determine the length of the longest substring that is a valid sequence of parentheses.

A valid parentheses substring is one where every opening parenthesis `'('` is matched by a corresponding closing parenthesis `')'`, and they are properly nested.


## 📌 Examples

### Example 1

**Input:** s = "(()"  
**Output:** 2

### Example 2

**Input:** s = ")()())"  
**Output:** 4

### Example 3

**Input:** s = ""  
**Output:** 0

---

## ✅ Solutions

### 💡 Solution 1: Stack-Based Approach

```javascript
function longestValidParentheses_Stack(s) {
    const stack = [-1];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
}
```

### 💡 Solution 2: Dynamic Programming

```javascript
function longestValidParentheses_DP(s) {
    const dp = new Array(s.length).fill(0);
    let maxLength = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
                dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0);
            }
            maxLength = Math.max(maxLength, dp[i]);
        }
    }

    return maxLength;
}
```

### 💡 Solution 3: Two-Pass Approach

```javascript
function longestValidParentheses_TwoPass(s) {
    let left = 0, right = 0, maxLength = 0;

    // Left to right
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') left++;
        if (s[i] === ')') right++;
        if (left === right) maxLength = Math.max(maxLength, 2 * right);
        if (right > left) left = right = 0;
    }

    left = right = 0;
    // Right to left
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') left++;
        if (s[i] === ')') right++;
        if (left === right) maxLength = Math.max(maxLength, 2 * left);
        if (left > right) left = right = 0;
    }

    return maxLength;
}
```

### 💡 Solution 4: Greedy Approach

```javascript
function longestValidParentheses_Greedy(s) {
    let maxLength = 0;
    let currentLength = 0;
    let stack = [-1]; // Base for valid substrings

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                currentLength = i - stack[stack.length - 1];
                maxLength = Math.max(maxLength, currentLength);
            }
        }
    }

    return maxLength;
}
```