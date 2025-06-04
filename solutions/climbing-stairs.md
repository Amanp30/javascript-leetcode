# Climbing Stairs

## 📝 Problem

You are tasked with climbing a staircase that consists of `n` steps. Each time you can either climb 1 step or 2 steps. Your goal is to determine the number of distinct ways you can reach the top of the staircase.


## 📌 Examples

### Example 1

**Input:** n = 2  
**Output:** 2

### Example 2

**Input:** n = 3  
**Output:** 3

---

## ✅ Solutions

### 💡 Solution 1: Recursive with Memoization

```javascript
function climbStairsMemoization(n) {
    const memo = {};
    function climb(n) {
        if (n <= 1) return 1;
        if (memo[n]) return memo[n];
        memo[n] = climb(n - 1) + climb(n - 2);
        return memo[n];
    }
    return climb(n);
}
```

### 💡 Solution 2: Dynamic Programming with a Class

```javascript
function climbStairsDPClass(n) {
    class Climber {
        constructor(n) {
            this.n = n;
            this.dp = new Array(n + 1).fill(0);
            this.dp[1] = 1;
            this.dp[2] = 2;
        }

        calculateWays() {
            for (let i = 3; i <= this.n; i++) {
                this.dp[i] = this.dp[i - 1] + this.dp[i - 2];
            }
            return this.dp[this.n];
        }
    }

    let climber = new Climber(n);
    return climber.calculateWays();
}
```

### 💡 Solution 3: Depth-First Search (DFS) Approach

```javascript
function climbStairsDFS(n) {
    function dfs(current) {
        if (current === n) return 1;
        if (current > n) return 0;
        return dfs(current + 1) + dfs(current + 2);
    }
    return dfs(0);
}
```

### 💡 Solution 4: Dynamic Programming (Tabulation)

```javascript
function climbStairsTabulation(n) {
    if (n <= 1) return 1;
    const dp = Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```

### 💡 Solution 5: Dynamic Programming (Space Optimization)

```javascript
function climbStairsSpaceOptimized(n) {
    if (n <= 1) return 1;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}
```

### 💡 Solution 6: Simple Recursive

```javascript
function climbStairsRecursive(n) {
    if (n <= 1) return 1;
    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}
```

### 💡 Solution 7: Iterative Approach

```javascript
function climbStairsIterative(n) {
    if (n <= 1) return 1;
    let first = 1, second = 1;
    for (let i = 2; i <= n; i++) {
        const temp = first + second;
        first = second;
        second = temp;
    }
    return second;
}
```

### 💡 Solution 8: Using a Stack (Depth-First Search)

```javascript
function climbStairsDFS2(n) {
    function dfs(n) {
        if (n <= 1) return 1;
        return dfs(n - 1) + dfs(n - 2);
    }
    return dfs(n);
}
```

### 💡 Solution 9: Using an Explicit Stack

```javascript
function climbStairsStack(n) {
    const stack = [n];
    const visited = new Set();
    let result = 0;

    while (stack.length) {
        const current = stack.pop();
        if (current <= 1) {
            result += 1;
            continue;
        }
        if (!visited.has(current)) {
            visited.add(current);
            stack.push(current - 1);
            stack.push(current - 2);
        }
    }
    return result;
}
```

### 💡 Solution 10: Using a Queue (Breadth-First Search)

```javascript
function climbStairsBFS(n) {
    if (n <= 1) return 1;
    let result = 0;
    const queue = [{ steps: n }];

    while (queue.length) {
        const { steps } = queue.shift();
        if (steps === 0) {
            result += 1;
        } else if (steps > 0) {
            queue.push({ steps: steps - 1 });
            queue.push({ steps: steps - 2 });
        }
    }
    return result;
}
```

### 💡 Solution 11: Using a HashMap for Memoization

```javascript
function climbStairsHashMap(n) {
    const memo = new Map();
    function countWays(n) {
        if (n <= 1) return 1;
        if (memo.has(n)) return memo.get(n);
        const result = countWays(n - 1) + countWays(n - 2);
        memo.set(n, result);
        return result;
    }
    return countWays(n);
}
```

### 💡 Solution 12: Using an Array-Based Recursion

```javascript
function climbStairsArrayRecursion(n) {
    const memo = Array(n + 1).fill(0);
    function countWays(n) {
        if (n <= 1) return 1;
        if (memo[n] !== 0) return memo[n];
        memo[n] = countWays(n - 1) + countWays(n - 2);
        return memo[n];
    }
    return countWays(n);
}
```

### 💡 Solution 13: Using Dynamic Programming with Sliding Window

```javascript
function climbStairsSlidingWindow(n) {
    if (n <= 1) return 1;
    let [a, b] = [1, 1];
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
```

### 💡 Solution 14: Using a Fibonacci Sequence Formula

```javascript
function climbStairsFibonacciFormula(n) {
    function fibonacci(n) {
        const phi = (1 + Math.sqrt(5)) / 2;
        const psi = (1 - Math.sqrt(5)) / 2;
        return Math.round((Math.pow(phi, n + 1) - Math.pow(psi, n + 1)) / Math.sqrt(5));
    }
    return fibonacci(n);
}
```

### 💡 Solution 15: Using a Recursive Generator

```javascript
function climbStairsUsingGenerator(n) {
    let count = 0;
    for (const _ of climbStairsGenerator(n)) {
        count++;
    }
    return count;
}
function* climbStairsGenerator(n) {
    if (n <= 1) {
        yield 1;
        return;
    }
    yield* climbStairsGenerator(n - 1);
    yield* climbStairsGenerator(n - 2);
}
```

### 💡 Solution 16: Using Permutations

```javascript
function climbStairsPermutations(n) {
    function countWays(n, k) {
        if (n < 0) return 0;
        if (n === 0) return 1;
        if (k <= 0) return 0;
        return countWays(n - 1, k - 1) + countWays(n - 2, k - 1);
    }
    return countWays(n, n);
}
```

### 💡 Solution 17: Using a Priority Queue

```javascript
function climbStairsPriorityQueue(n) {
    if (n <= 1) return 1;
    const pq = [{ steps: n, ways: 0 }];
    let result = 0;
    
    while (pq.length) {
        const { steps } = pq.shift();
        if (steps === 0) {
            result += 1;
        } else if (steps > 0) {
            pq.push({ steps: steps - 1 });
            pq.push({ steps: steps - 2 });
        }
    }
    return result;
}
```