# Generate Parentheses

## 📝 Problem

Imagine you have a certain number of pairs of parentheses, and you need to generate all possible ways to arrange these pairs such that they are well-formed. Well-formed parentheses mean that every opening parenthesis has a matching closing parenthesis and they are properly nested.


## 📌 Examples

### Example 1

**Input:** n = 3  
**Output:** ["((()))","(()())","(())()","()(())","()()()"]

### Example 2

**Input:** n = 1  
**Output:** ["()"]

---

## ✅ Solutions

### 💡 Solution 1: Backtracking Approach

```javascript
function generateParenthesesBacktracking(n) {
    const result = [];

    function backtrack(current, open, close) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        if (open < n) backtrack(current + '(', open + 1, close);
        if (close < open) backtrack(current + ')', open, close + 1);
    }

    backtrack('', 0, 0);
    return result;
}
```

### 💡 Solution 2: Iterative Approach with Stack

```javascript
function generateParenthesesStack(n) {
    const result = [];
    const stack = [{ s: '', left: 0, right: 0 }];

    while (stack.length > 0) {
        const { s, left, right } = stack.pop();

        if (s.length === 2 * n) {
            result.push(s);
            continue;
        }

        if (left < n) {
            stack.push({ s: s + '(', left: left + 1, right });
        }

        if (right < left) {
            stack.push({ s: s + ')', left, right: right + 1 });
        }
    }

    return result.sort();
}
```

### 💡 Solution 3: Breadth-First Search (BFS) Approach

```javascript
function generateParenthesesBFS(n) {
    const result = [];
    const queue = [''];

    while (queue.length) {
        const current = queue.shift();

        if (current.length === 2 * n) {
            if (isValid(current)) result.push(current);
        } else {
            queue.push(current + '(');
            queue.push(current + ')');
        }
    }

    function isValid(s) {
        let balance = 0;
        for (const char of s) {
            if (char === '(') balance++;
            else balance--;
            if (balance < 0) return false;
        }
        return balance === 0;
    }

    return result;
}
```

### 💡 Solution 4: Dynamic Programming Approach

```javascript
function generateParenthesesDP(n) {
    const dp = Array(n + 1).fill(null).map(() => []);
    dp[0].push(""); // Base case: one way to arrange zero pairs of parentheses

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            for (const left of dp[j]) {
                for (const right of dp[i - 1 - j]) {
                    // Combine the left and right parts with a pair of parentheses around them
                    dp[i].push(`(${left})${right}`);
                }
            }
        }
    }

    // Sort the final list of parentheses combinations
    return dp[n].sort();
}
```

### 💡 Solution 5: Recursive Approach with Validation

```javascript
function generateParenthesesRecursive(n) {
    const result = [];

    function generate(current, open, close) {
        if (current.length === 2 * n) {
            if (isValid(current)) result.push(current);
            return;
        }
        if (open < n) generate(current + '(', open + 1, close);
        if (close < open) generate(current + ')', open, close + 1);
    }

    function isValid(s) {
        let balance = 0;
        for (const char of s) {
            if (char === '(') balance++;
            else balance--;
            if (balance < 0) return false;
        }
        return balance === 0;
    }

    generate('', 0, 0);
    return result;
}
```

### 💡 Solution 6: Memoization Approach

```javascript
function generateParenthesesMemoized(n) {
    const memo = new Map();

    function helper(open, close) {
        const key = `${open}-${close}`;
        if (memo.has(key)) return memo.get(key);

        if (open === n && close === n) return [''];
        const result = [];
        if (open < n) {
            const subresults = helper(open + 1, close);
            for (const r of subresults) {
                result.push('(' + r);
            }
        }
        if (close < open) {
            const subresults = helper(open, close + 1);
            for (const r of subresults) {
                result.push(')' + r);
            }
        }
        memo.set(key, result);
        return result;
    }

    return helper(0, 0);
}
```

### 💡 Solution 7: Set-Based Approach

```javascript
function generateParenthesesSet(n) {
    const result = new Set();

    function backtrack(current, open, close) {
        if (current.length === 2 * n) {
            result.add(current);
            return;
        }
        if (open < n) backtrack(current + '(', open + 1, close);
        if (close < open) backtrack(current + ')', open, close + 1);
    }

    backtrack('', 0, 0);
    return Array.from(result);
}
```

### 💡 Solution 8: Bit Manipulation Approach

```javascript
function generateParenthesesBit(n) {
    const results = [];
    const totalCombinations = 1 << (2 * n); // 2^(2 * n)
    
    for (let i = 0; i < totalCombinations; i++) {
        let binaryString = i.toString(2).padStart(2 * n, '0');
        let parentheses = '';

        // Generate the parentheses string based on the binary representation
        for (let char of binaryString) {
            parentheses += char === '0' ? '(' : ')';
        }

        // Validate the parentheses string
        if (isValidParentheses(parentheses)) {
            results.push(parentheses);
        }
    }

    return results;
}

function isValidParentheses(s) {
    let balance = 0;
    for (let char of s) {
        if (char === '(') balance++;
        if (char === ')') balance--;
        if (balance < 0) return false; // More closing than opening
    }
    return balance === 0; // Balanced if balance is zero
}
```

### 💡 Solution 9: DFS Approach

```javascript
function generateParenthesesDFS(n) {
    const result = [];

    function dfs(current, open, close) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        if (open < n) dfs(current + '(', open + 1, close);
        if (close < open) dfs(current + ')', open, close + 1);
    }

    dfs('', 0, 0);
    return result;
}
```

### 💡 Solution 10: Recursive Helper Function

```javascript
function generateParenthesesHelper(n) {
    function intToRomanHelper(num, values, symbols) {
        const result = [];
        function helper(current, open, close) {
            if (current.length === 2 * n) {
                result.push(current);
                return;
            }
            if (open < n) helper(current + '(', open + 1, close);
            if (close < open) helper(current + ')', open, close + 1);
        }

        helper('', 0, 0);
        return result;
    }

    return intToRomanHelper(n, [], []);
}
```