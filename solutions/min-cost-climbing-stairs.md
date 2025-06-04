# Min Cost Climbing Stairs

## 📝 Problem

You are given an integer array `cost` where `cost[i]` represents the cost associated with stepping on the `i-th` stair of a staircase. You have the option to either start from the first stair (index 0) or the second stair (index 1). From any stair, you can either move up one step or two steps.

The goal is to calculate the minimum cost required to reach the top of the staircase. The top of the staircase is considered to be beyond the last stair, so your solution should ensure that you can climb to the end of the array from either the last stair or the second-to-last stair.


## 📌 Examples

### Example 1

**Input:** cost = [10,15,20]  
**Output:** 15

### Example 2

**Input:** cost = [1,100,1,1,1,100,1,1,100,1]  
**Output:** 6

---

## ✅ Solutions

### 💡 Solution 1: Using a Hash Map for Memoization

```javascript
function minCostHashMap(cost) {
    const memo = new Map();

    function dp(i) {
        if (i < 0) return 0;
        if (i === 0 || i === 1) return cost[i];
        if (memo.has(i)) return memo.get(i);
        const result = cost[i] + Math.min(dp(i - 1), dp(i - 2));
        memo.set(i, result);
        return result;
    }

    const n = cost.length;
    return Math.min(dp(n - 1), dp(n - 2));
}
```

### 💡 Solution 2: Using Dynamic Programming with Full Table

```javascript
function minCostFullTable(cost) {
    const dp = Array(cost.length).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}
```

### 💡 Solution 3: Simple Recursive Approach

```javascript
function minCostRecursive(cost) {
    function dp(i) {
        if (i < 0) return 0;
        if (i === 0 || i === 1) return cost[i];
        return cost[i] + Math.min(dp(i - 1), dp(i - 2));
    }

    const n = cost.length;
    return Math.min(dp(n - 1), dp(n - 2));
}
```

### 💡 Solution 4: Recursive Approach with Memoization

```javascript
function minCostMemoization(cost) {
    const memo = {};

    function dp(i) {
        if (i < 0) return 0;
        if (i === 0 || i === 1) return cost[i];
        if (memo[i] !== undefined) return memo[i];
        memo[i] = cost[i] + Math.min(dp(i - 1), dp(i - 2));
        return memo[i];
    }

    const n = cost.length;
    return Math.min(dp(n - 1), dp(n - 2));
}
```

### 💡 Solution 5: Dynamic Programming (Space Optimization)

```javascript
function minCostSpaceOptimized(cost) {
    const n = cost.length;
    let [prev1, prev2] = [cost[0], cost[1]];

    for (let i = 2; i < n; i++) {
        const current = cost[i] + Math.min(prev1, prev2);
        [prev1, prev2] = [prev2, current];
    }

    return Math.min(prev1, prev2);
}
```

### 💡 Solution 6: Dynamic Programming (Tabulation)

```javascript
function minCostTabulation(cost) {
    const n = cost.length;
    const dp = Array(n).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[n - 1], dp[n - 2]);
}
```

### 💡 Solution 7: Using a Map for Memoization

```javascript
function minCostMapMemoization(cost) {
    const memo = new Map();

    function dp(i) {
        if (i < 0) return 0;
        if (i === 0 || i === 1) return cost[i];
        if (memo.has(i)) return memo.get(i);
        const result = cost[i] + Math.min(dp(i - 1), dp(i - 2));
        memo.set(i, result);
        return result;
    }

    const n = cost.length;
    return Math.min(dp(n - 1), dp(n - 2));
}
```

### 💡 Solution 8: Using Combination of Recursive and Iterative Approach

```javascript
function minCostHybrid(cost) {
    const dp = Array(cost.length).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}
```

### 💡 Solution 9: Using Sliding Window Technique

```javascript
function minCostSlidingWindow(cost) {
    let prev1 = cost[0];
    let prev2 = cost[1];

    for (let i = 2; i < cost.length; i++) {
        const current = cost[i] + Math.min(prev1, prev2);
        prev1 = prev2;
        prev2 = current;
    }

    return Math.min(prev1, prev2);
}
```

### 💡 Solution 10: Recursive Approach with Explicit Stack

```javascript
function minCostExplicitStack(cost) {
    const stack = [{ index: 0 }, { index: 1 }];
    const costs = Array(cost.length).fill(Infinity);
    costs[0] = cost[0];
    costs[1] = cost[1];

    while (stack.length > 0) {
        const { index } = stack.pop();
        if (index >= cost.length) continue;
        if (index < cost.length - 1) {
            const nextCost = cost[index + 1] + Math.min(costs[index], costs[index + 1]);
            if (nextCost < costs[index + 1]) {
                costs[index + 1] = nextCost;
                stack.push({ index: index + 1 });
            }
        }
        if (index < cost.length - 2) {
            const nextCost = cost[index + 2] + Math.min(costs[index], costs[index + 2]);
            if (nextCost < costs[index + 2]) {
                costs[index + 2] = nextCost;
                stack.push({ index: index + 2 });
            }
        }
    }

    return Math.min(costs[cost.length - 1], costs[cost.length - 2]);
}
```