# Maximum Average Subarray I

## 📝 Problem

You are given an array of integers, `nums`, with `n` elements, and an integer `k`. Your goal is to find the contiguous subarray of length `k` that has the highest average value. Return this maximum average, ensuring that your answer is accurate within an error margin of less than `10^-5`.


## 📌 Examples

### Example 1

**Input:** nums = [1,12,-5,-6,50,3], k = 4  
**Output:** 12.75000

### Example 2

**Input:** nums = [5], k = 1  
**Output:** 5.00000

---

## ✅ Solutions

### 💡 Solution 1: Sliding Window Approach

```javascript
function findMaxAverageSlidingWindow(nums, k) {
    let windowSum = 0;
    let maxAverage = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        windowSum += nums[i];
        if (i >= k - 1) {
            if (i >= k) {
                windowSum -= nums[i - k];
            }
            const average = windowSum / k;
            maxAverage = Math.max(maxAverage, average);
        }
    }

    return maxAverage;
}
```

### 💡 Solution 2: Prefix Sum Approach

```javascript
function findMaxAveragePrefixSum(nums, k) {
    const prefixSum = [0];
    
    for (let i = 0; i < nums.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let maxAverage = -Infinity;

    for (let i = k; i <= nums.length; i++) {
        const sum = prefixSum[i] - prefixSum[i - k];
        const average = sum / k;
        maxAverage = Math.max(maxAverage, average);
    }

    return maxAverage;
}
```

### 💡 Solution 3: Sliding Window with Manual Averaging

```javascript
function findMaxAverageSlidingWindowManual(nums, k) {
    let currArr = nums.slice(0, k);
    let currAvg = currArr.reduce((sum, num) => sum + num, 0) / k;
    let maxAvg = currAvg;

    for (let i = 1; i <= nums.length - k; i++) {
        currAvg -= nums[i - 1] / k;
        currArr = nums.slice(i, i + k);
        currAvg += currArr[currArr.length - 1] / k;
        maxAvg = Math.max(maxAvg, currAvg);
    }

    return maxAvg;
}
```

### 💡 Solution 4: Sliding Window with Two Pointers

```javascript
function findMaxAverageSlidingWindowTwoPointers(nums, k) {
    let maxAverage = -Infinity;
    let sum = 0;
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        if (right - left + 1 === k) {
            let average = sum / k;
            maxAverage = Math.max(maxAverage, average);
            sum -= nums[left];
            left++;
        }
    }
    
    return maxAverage;
}
```

### 💡 Solution 5: Sliding Window with Manual Average Calculation

```javascript
function findMaxAverageSlidingWindowManualAvg(nums, k) {
    let right = 0;
    let left = 0;
    const length = nums.length;
    let maxAvg = 0.0;
    let windowAvg = 0.0;

    // Initialize the window
    while (right < k) {
        windowAvg += nums[right] / k;
        right++;
    }
    maxAvg = windowAvg;

    // Slide the window
    while (right < length) {
        windowAvg = windowAvg - nums[left] / k + nums[right] / k;
        left++;
        if (windowAvg > maxAvg) {
            maxAvg = windowAvg;
        }
        right++;
    }

    return maxAvg;
}
```

### 💡 Solution 6: Sliding Window with Incremental Update

```javascript
function findMaxAverageSlidingWindowIncremental(nums, k) {
    let maxAvg = nums.slice(0, k).reduce((sum, num) => sum + num, 0) / k;
    let currAvg = maxAvg;

    for (let i = k; i < nums.length; i++) {
        currAvg = currAvg + (nums[i] - nums[i - k]) / k;
        maxAvg = Math.max(maxAvg, currAvg);
    }

    return parseFloat(maxAvg.toFixed(5));
}
```

### 💡 Solution 7: Sliding Window with Sum Update

```javascript
function findMaxAverageSlidingWindowSumUpdate(nums, k) {
    let curSum = nums.slice(0, k).reduce((sum, num) => sum + num, 0);
    let maxSum = curSum;

    for (let i = k; i < nums.length; i++) {
        curSum += nums[i] - nums[i - k];
        if (curSum > maxSum) {
            maxSum = curSum;
        }
    }

    return maxSum / k;
}
```