# Maximum Sum Circular Subarray

## 📝 Problem

Given a circular integer array `nums` of length `n`, return the maximum possible sum of a non-empty subarray of `nums`.

**Circular Array Definition:**

*   The end of the array connects to the beginning.
    
*   Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.


## 📌 Examples

### Example 1

**Input:** array = [1, -2, 3, -2]  
**Output:** 3

### Example 2

**Input:** array = [5,-3,5]  
**Output:** 10

---

## ✅ Solutions

### 💡 Solution 1: Kadane Algorithm with Circular Adjustment

```javascript
function maxSumCircularKadane(nums) {
    const n = nums.length;

    function kadane(arr) {
        let maxSoFar = -Infinity, maxEndingHere = 0;
        for (const num of arr) {
            maxEndingHere = Math.max(num, maxEndingHere + num);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    const maxLinear = kadane(nums);
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const minSubarraySum = kadane(nums.map(x => -x));
    const maxCircular = totalSum + minSubarraySum;

    return maxLinear > maxCircular ? maxLinear : maxCircular;
}
```

### 💡 Solution 2: Kadane Algorithm with Prefix and Suffix Sums

```javascript
function maxSumCircularPrefixSuffix1(nums) {
    const n = nums.length;

    function kadane(arr) {
        let maxSoFar = -Infinity, maxEndingHere = 0;
        for (const num of arr) {
            maxEndingHere = Math.max(num, maxEndingHere + num);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    const maxLinear = kadane(nums);
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    
    let minSum = Infinity, currMin = 0;
    for (const num of nums) {
        currMin = Math.min(num, currMin + num);
        minSum = Math.min(minSum, currMin);
    }

    const maxCircular = totalSum - minSum;
    return Math.max(maxLinear, maxCircular);
}
```

### 💡 Solution 3: Dynamic Programming Approach

```javascript
function maxSumCircularDP(nums) {
    const n = nums.length;
    
    const maxEndingHere = Array(n).fill(0);
    const minEndingHere = Array(n).fill(0);
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    
    maxEndingHere[0] = nums[0];
    minEndingHere[0] = nums[0];
    let maxSoFar = nums[0];
    let minSoFar = nums[0];

    for (let i = 1; i < n; i++) {
        maxEndingHere[i] = Math.max(nums[i], maxEndingHere[i - 1] + nums[i]);
        minEndingHere[i] = Math.min(nums[i], minEndingHere[i - 1] + nums[i]);
        
        maxSoFar = Math.max(maxSoFar, maxEndingHere[i]);
        minSoFar = Math.min(minSoFar, minEndingHere[i]);
    }
    
    const maxCircular = totalSum - minSoFar;

    return Math.max(maxSoFar, maxCircular);
}
```

### 💡 Solution 4: Prefix Sum and Kadane’s for Circular Case

```javascript
function maxSumCircularPrefixKadane(nums) {
    const n = nums.length;
    const totalSum = nums.reduce((acc, num) => acc + num, 0);

    function kadane(arr) {
        let maxSoFar = -Infinity, maxEndingHere = 0;
        for (const num of arr) {
            maxEndingHere = Math.max(num, maxEndingHere + num);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    const maxLinear = kadane(nums);

    let minSum = Infinity, currMin = 0;
    for (const num of nums) {
        currMin = Math.min(num, currMin + num);
        minSum = Math.min(minSum, currMin);
    }

    const maxCircular = totalSum - minSum;
    return Math.max(maxLinear, maxCircular);
}
```

### 💡 Solution 5: Two Pass Kadane’s Algorithm

```javascript
function maxSumCircularTwoPass(nums) {
    const n = nums.length;

    function kadane(arr) {
        let maxSoFar = -Infinity, maxEndingHere = 0;
        for (const num of arr) {
            maxEndingHere = Math.max(num, maxEndingHere + num);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    const maxLinear = kadane(nums);
    const totalSum = nums.reduce((acc, num) => acc + num, 0);

    const minSum = kadane(nums.map(x => -x));
    const maxCircular = totalSum + minSum;

    return Math.max(maxLinear, maxCircular);
}
```

### 💡 Solution 6: Max Sum with Precomputed Prefix and Suffix Arrays

```javascript
function maxSumCircularPrefixSuffixArrays(nums) {
    const n = nums.length;

    if (n === 0) return 0;

    // Calculate prefix maximum sums
    const prefixMax = Array(n).fill(0);
    let currentPrefixSum = 0;
    prefixMax[0] = nums[0];
    currentPrefixSum = nums[0];
    
    for (let i = 1; i < n; i++) {
        currentPrefixSum += nums[i];
        prefixMax[i] = Math.max(prefixMax[i - 1], currentPrefixSum);
    }

    // Calculate suffix maximum sums
    const suffixMax = Array(n).fill(0);
    let currentSuffixSum = 0;
    suffixMax[n - 1] = nums[n - 1];
    currentSuffixSum = nums[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        currentSuffixSum += nums[i];
        suffixMax[i] = Math.max(suffixMax[i + 1], currentSuffixSum);
    }

    // Calculate the maximum circular subarray sum
    let maxCircular = -Infinity;
    for (let i = 0; i < n - 1; i++) {
        maxCircular = Math.max(maxCircular, prefixMax[i] + suffixMax[i + 1]);
    }

    // Find the maximum sum of a non-circular subarray using Kadane's algorithm
    function kadane(arr) {
        let maxSoFar = -Infinity, maxEndingHere = 0;
        for (const num of arr) {
            maxEndingHere = Math.max(num, maxEndingHere + num);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    const maxLinear = kadane(nums);
    return Math.max(maxLinear, maxCircular);
}
```

### 💡 Solution 7: Using Prefix Sum Arrays and Min Sum Calculation

```javascript
function maxSumCircularWithPrefix(nums) {
    const n = nums.length;

    if (n === 0) return 0;

    // Helper function to compute maximum subarray sum using Kadane's algorithm
    function kadane(arr) {
        let maxSoFar = -Infinity, maxEndingHere = 0;
        for (const num of arr) {
            maxEndingHere = Math.max(num, maxEndingHere + num);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    // Calculate the maximum sum subarray (linear case)
    const maxLinear = kadane(nums);

    // Compute total sum of the array
    const totalSum = nums.reduce((acc, num) => acc + num, 0);

    // Compute minimum subarray sum (to find circular max subarray)
    const minSubarraySum = kadane(nums.map(x => -x));
    const maxCircular = totalSum + minSubarraySum;

    // Return the maximum of the linear and circular sums
    return Math.max(maxLinear, maxCircular);
}
```

### 💡 Solution 8: Finding Maximum and Minimum Subarray Sums

```javascript
function maxSumCircularMaxMinSubarray(nums) {
    const n = nums.length;

    function kadane(arr) {
        let maxSoFar = -Infinity, maxEndingHere = 0;
        for (const num of arr) {
            maxEndingHere = Math.max(num, maxEndingHere + num);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    const maxLinear = kadane(nums);
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const minSubarraySum = kadane(nums.map(x => -x));
    const maxCircular = totalSum + minSubarraySum;

    return Math.max(maxLinear, maxCircular);
}
```