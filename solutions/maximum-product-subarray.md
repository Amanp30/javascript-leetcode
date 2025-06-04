# Maximum Product Subarray

## 📝 Problem

Given an integer array `nums`, find a contiguous subarray (containing at least one number) that has the largest product and return the product.


## 📌 Examples

### Example 1

**Input:** array = [1, -2, -3, 4]  
**Output:** 24

### Example 2

**Input:** array = [10, -1, -10, 2, -3, 5]  
**Output:** 300

---

## ✅ Solutions

### 💡 Solution 1: Dynamic Programming Approach

```javascript
function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        
        if (num < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(num, maxProduct * num);
        minProduct = Math.min(num, minProduct * num);

        result = Math.max(result, maxProduct);
    }

    return result;
}
```

### 💡 Solution 2: Prefix Product with Reset

```javascript
function maxProductPrefix(nums) {
    let maxProduct = nums[0];
    let currentProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        currentProduct *= nums[i];
        maxProduct = Math.max(maxProduct, currentProduct);

        if (nums[i] === 0) {
            currentProduct = 1;
        }
    }

    currentProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        currentProduct *= nums[i];
        maxProduct = Math.max(maxProduct, currentProduct);

        if (nums[i] === 0) {
            currentProduct = 1;
        }
    }

    return maxProduct;
}
```

### 💡 Solution 3: Kadane Algorithm Variant

```javascript
function maxProductKadane(nums) {
    let maxProduct = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let tempMax = Math.max(nums[i], currentMax * nums[i], currentMin * nums[i]);
        currentMin = Math.min(nums[i], currentMax * nums[i], currentMin * nums[i]);
        currentMax = tempMax;
        maxProduct = Math.max(maxProduct, currentMax);
    }

    return maxProduct;
}
```

### 💡 Solution 4: Brute Force Approach

```javascript
function maxProductBruteForce(nums) {
    let maxProduct = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentProduct = 1;
        for (let j = i; j < nums.length; j++) {
            currentProduct *= nums[j];
            maxProduct = Math.max(maxProduct, currentProduct);
        }
    }

    return maxProduct;
}
```

### 💡 Solution 5: Sliding Window Approach

```javascript
function maxProductSlidingWindow(nums) {
    let maxProduct = nums[0];
    let currentProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        currentProduct *= nums[i];
        maxProduct = Math.max(maxProduct, currentProduct);
        if (nums[i] === 0) {
            currentProduct = 1;
        }
    }

    currentProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        currentProduct *= nums[i];
        maxProduct = Math.max(maxProduct, currentProduct);
        if (nums[i] === 0) {
            currentProduct = 1;
        }
    }

    return maxProduct;
}
```

### 💡 Solution 6: Maximum Subarray Product with Indices

```javascript
function maxProductWithIndices(nums) {
    let maxProduct = nums[0];
    let curMax = nums[0];
    let curMin = nums[0];
    let start = 0, end = 0, s = 0;

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            [curMax, curMin] = [curMin, curMax];
        }

        curMax = Math.max(num, curMax * num);
        curMin = Math.min(num, curMin * num);

        if (curMax > maxProduct) {
            maxProduct = curMax;
            start = s;
            end = i;
        }

        if (curMax < 1) {
            s = i + 1;
        }
    }

    return maxProduct;
}
```

### 💡 Solution 7: Product Calculation with Zero Reset

```javascript
function maxProductZeroReset(nums) {
    let maxProduct = nums[0];
    let currentProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        currentProduct *= nums[i];
        if (nums[i] === 0) {
            currentProduct = 1;
        }
        maxProduct = Math.max(maxProduct, currentProduct);
    }

    currentProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        currentProduct *= nums[i];
        if (nums[i] === 0) {
            currentProduct = 1;
        }
        maxProduct = Math.max(maxProduct, currentProduct);
    }

    return maxProduct;
}
```

### 💡 Solution 8: Prefix Product Calculation with Two Passes

```javascript
function maxProductTwoPass(nums) {
    let maxProduct = nums[0];
    let prefixProduct = 1;
    let suffixProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        prefixProduct *= nums[i];
        suffixProduct *= nums[nums.length - 1 - i];
        maxProduct = Math.max(maxProduct, prefixProduct, suffixProduct);
        if (prefixProduct === 0) prefixProduct = 1;
        if (suffixProduct === 0) suffixProduct = 1;
    }

    return maxProduct;
}
```

### 💡 Solution 9: Maximum Product Using Logarithms

```javascript
function maxProductLogarithms(nums) {
    if (nums.length === 0) return 0;

    let maxProduct = nums[0];
    let curMax = nums[0];
    let curMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            [curMax, curMin] = [curMin, curMax];
        }

        curMax = Math.max(num, curMax * num);
        curMin = Math.min(num, curMin * num);

        maxProduct = Math.max(maxProduct, curMax);
    }

    return maxProduct;
}
```