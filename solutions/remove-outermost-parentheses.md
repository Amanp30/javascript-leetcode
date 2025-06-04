# Remove Outermost Parentheses

## 📝 Problem

You’re given a valid parentheses string. A valid string is something like `()`, `(())`, or `(()())`. A string is primitive if it can't be split into two nonempty valid parentheses strings.

Your task is to remove the outermost parentheses from each primitive part of the string and return the result.


## 📌 Examples

### Example 1

**Input:** s = "(()())(())"  
**Output:** "()()()"

### Example 2

**Input:** s = "(()())(())(()(()))"  
**Output:** "()()()()(())"

### Example 3

**Input:** s = "()()"  
**Output:** ""

---

## ✅ Solutions

### 💡 Solution 1: method1

```javascript
function removeOuterParenthesesMethod1 (s) {
    let ans = '';
    let cnt = 0;
    for (const ch of s) {
        if (ch === '(') {
            if (cnt > 0) ans += ch;
            cnt++;
        } else {
            cnt--;
            if (cnt > 0) ans += ch;
        }
    }
    return ans;
};
```

### 💡 Solution 2: Two Pointer

```javascript
function removeOuterParentheses (s) {
    let ans = '';
    let cnt = 0;
    let left = 0;
    
    for (let right = 0; right < s.length; right++) {
        cnt += (s[right] === '(') ? 1 : -1;
        
        if (cnt === 0) {
            ans += s.slice(left + 1, right);
            left = right + 1;
        }
    }
    
    return ans;
};
```

### 💡 Solution 3: Recursive Approach

```javascript
function removeOuterParenthesesRecursion (s) {
    let ans = '';
    let stack = [];
    let i = 0;

    while (i < s.length) {
        if (s[i] === '(') {
            stack.push(s[i]);
            if (stack.length > 1) ans += s[i];
        } else {
            if (stack.length > 1) ans += s[i];
            stack.pop();
        }

        if (stack.length === 0) {
            ans += removeOuterParentheses(s.slice(i + 1));
            break;
        }

        i++;
    }
    
    return ans;
};
```