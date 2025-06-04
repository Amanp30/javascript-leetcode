# Minimum Cost of Buying Candies With Discount

## 📝 Problem

Imagine you're shopping for candies at a store that has a special offer: for every two candies you buy, you can choose a third candy to get for free. However, the free candy must be priced at or below the cost of the less expensive of the two candies you purchased.

Given an array called `cost`, where each element represents the price of a candy, your task is to calculate the minimum total cost needed to buy all the candies, taking advantage of this offer.


## 📌 Examples

### Example 1

**Input:** cost = [1,2,3]  
**Output:** 5

### Example 2

**Input:** cost = [6,5,7,9,2,2]  
**Output:** 23

---

## ✅ Solutions

### 💡 Solution 1: Greedy Approach

```javascript
function minCostGreedy(cost) {
    cost.sort((a, b) => b - a);
    let totalCost = 0;
    
    for (let i = 0; i < cost.length; i++) {
        if ((i % 3) !== 2) {
            totalCost += cost[i];
        }
    }
    
    return totalCost;
}
```

### 💡 Solution 2: Sorting and Grouping Approach

```javascript
function minCostSortingAndGrouping(cost) {
    cost.sort((a, b) => b - a);
    let totalCost = 0;
    
    for (let i = 0; i < cost.length; i += 3) {
        totalCost += cost[i] + (cost[i + 1] || 0);
    }
    
    return totalCost;
}
```

### 💡 Solution 3: Iterative Pairing Approach

```javascript
function minCostIterativePairing(cost) {
    cost.sort((a, b) => b - a);
    let totalCost = 0;
    
    for (let i = 0; i < cost.length; i += 3) {
        totalCost += cost[i] + (cost[i + 1] || 0);
    }
    
    return totalCost;
}
```

### 💡 Solution 4: Recursive Approach

```javascript
function minCostRecursive(cost) {
    function helper(arr) {
        if (arr.length <= 2) return arr.reduce((sum, val) => sum + val, 0);
        
        arr.sort((a, b) => b - a);
        return arr[0] + arr[1] + helper(arr.slice(3));
    }
    
    return helper(cost);
}
```

### 💡 Solution 5: Dynamic Programming Approach

```javascript
function minCostDynamicProgramming(cost) {
    const n = cost.length;
    if (n <= 2) return cost.reduce((sum, val) => sum + val, 0);
    
    cost.sort((a, b) => b - a);
    let totalCost = 0;
    
    for (let i = 0; i < n; i += 3) {
        totalCost += cost[i] + (cost[i + 1] || 0);
    }
    
    return totalCost;
}
```

### 💡 Solution 6: Greedy with Sorting and Pairing Approach

```javascript
function minCostGreedySortingPairing(cost) {
    cost.sort((a, b) => b - a);
    let totalCost = 0;
    
    for (let i = 0; i < cost.length; i += 3) {
        totalCost += cost[i] + (cost[i + 1] || 0);
    }
    
    return totalCost;
}
```

### 💡 Solution 7: Pair-by-Pair Approach

```javascript
function minCostPairByPair(cost) {
    cost.sort((a, b) => b - a);
    let totalCost = 0;
    
    for (let i = 0; i < cost.length; i += 3) {
        totalCost += cost[i] + (cost[i + 1] || 0);
    }
    
    return totalCost;
}
```