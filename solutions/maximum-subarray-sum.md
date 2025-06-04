# Maximum Subarray Sum

## 📝 Problem

Given an array of integers, your task is to find the contiguous subarray (containing at least one number) that has the largest sum and return that sum.


## 📌 Examples

### Example 1

**Input:** array = [1, -2, 3, 4, -1, 2, 1, -5, 4]  
**Output:** 9

---

## ✅ Solutions

### 💡 Solution 1: Kadane Algorithm

```javascript
function maximumSubarraySumKadane(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```

### 💡 Solution 2: Prefix Sum with HashMap

```javascript
function maximumSubarraySumPrefixSum(arr) {
    let maxSum = -Infinity;
    let prefixSum = 0;
    let minPrefixSum = 0;  // Initialize with 0, to handle cases where the subarray starts from the beginning

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];
        maxSum = Math.max(maxSum, prefixSum - minPrefixSum);
        minPrefixSum = Math.min(minPrefixSum, prefixSum);
    }

    return maxSum;
}
```

### 💡 Solution 3: Dynamic Programming Approach

```javascript
function maximumSubarraySumDynamic(arr) {
    if (arr.length === 0) return 0;
    
    const dp = new Array(arr.length).fill(0);
    dp[0] = arr[0];
    let maxSum = dp[0];
    
    for (let i = 1; i < arr.length; i++) {
        dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
        maxSum = Math.max(maxSum, dp[i]);
    }
    
    return maxSum;
}
```

### 💡 Solution 4: Divide and Conquer

```javascript
function maximumSubarraySumDivideAndConquer(arr) {
    function maxCrossingSum(arr, left, mid, right) {
        let sum = 0;
        let leftSum = -Infinity;
        
        for (let i = mid; i >= left; i--) {
            sum += arr[i];
            leftSum = Math.max(leftSum, sum);
        }
        
        sum = 0;
        let rightSum = -Infinity;
        
        for (let i = mid + 1; i <= right; i++) {
            sum += arr[i];
            rightSum = Math.max(rightSum, sum);
        }
        
        return leftSum + rightSum;
    }
    
    function maxSubArraySum(arr, left, right) {
        if (left === right) return arr[left];
        
        const mid = Math.floor((left + right) / 2);
        
        return Math.max(
            maxSubArraySum(arr, left, mid),
            maxSubArraySum(arr, mid + 1, right),
            maxCrossingSum(arr, left, mid, right)
        );
    }
    
    return maxSubArraySum(arr, 0, arr.length - 1);
}
```

### 💡 Solution 5: Brute Force Approach

```javascript
function maximumSubarraySumBruteForce(arr) {
    let maxSum = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    
    return maxSum;
}
```

### 💡 Solution 6: Sliding Window Approach

```javascript
function maximumSubarraySumSlidingWindow(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
```

### 💡 Solution 7: Recursive Approach

```javascript
function maximumSubarraySumRecursive(arr) {
    function helper(arr, start, end) {
        if (start === end) return arr[start];
        
        const mid = Math.floor((start + end) / 2);
        
        const leftMax = helper(arr, start, mid);
        const rightMax = helper(arr, mid + 1, end);
        
        let leftSum = -Infinity, rightSum = -Infinity;
        let sum = 0;
        
        for (let i = mid; i >= start; i--) {
            sum += arr[i];
            leftSum = Math.max(leftSum, sum);
        }
        
        sum = 0;
        
        for (let i = mid + 1; i <= end; i++) {
            sum += arr[i];
            rightSum = Math.max(rightSum, sum);
        }
        
        const crossMax = leftSum + rightSum;
        
        return Math.max(leftMax, rightMax, crossMax);
    }
    
    return helper(arr, 0, arr.length - 1);
}
```

### 💡 Solution 8: Maximum Subarray Sum with Indices

```javascript
function maximumSubarraySumWithIndices(arr) {
    let maxSoFar = -Infinity;
    let maxEndingHere = -Infinity;
    let start = 0, end = 0, s = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (maxEndingHere < 0) {
            maxEndingHere = arr[i];
            s = i;
        } else {
            maxEndingHere += arr[i];
        }
        
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = s;
            end = i;
        }
    }
    
    return maxSoFar;
}
```