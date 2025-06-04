# Product of array except self

## 📝 Problem

Given an array of integers, you need to return a new array where each element at index `i` is the product of all the numbers in the original array except the number at `i`. You should aim for an efficient solution that avoids using division.


## 📌 Examples

### Example 1

**Input:** array = [1, 2, 3, 4]  
**Output:** [24, 12, 8, 6]

### Example 2

**Input:** array = [0, 1, 2, 3]  
**Output:** [6, 0, 0, 0]

### Example 3

**Input:** array = [1, 0, 3, 4]  
**Output:** [0, 12, 0, 0]

---

## ✅ Solutions

### 💡 Solution 1: Prefix and Suffix Products

```javascript
function computeProductWithoutSelf(nums) {
    const n = nums.length;
    const result = new Array(n);

    // Calculate prefix products
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    // Calculate suffix products and combine with prefix products
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
}
```

### 💡 Solution 2: Using Two Passes

```javascript
function calculateProductExcludingSelf(nums) {
    const n = nums.length;
    const result = new Array(n);

    // Calculate prefix products
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    // Calculate suffix products and combine with prefix products
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
}
```

### 💡 Solution 3: Using Division

```javascript
function productArrayWithDivision(nums) {
    const n = nums.length;
    const result = new Array(n);

    let totalProduct = 1;
    let zeroCount = 0;

    // Calculate the total product and count zeros
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else {
            totalProduct *= nums[i];
        }
    }

    // If more than one zero, all products are zero
    if (zeroCount > 1) {
        return new Array(n).fill(0);
    }

    // If exactly one zero, set the product at that position to the total product
    if (zeroCount === 1) {
        return nums.map(num => num === 0 ? totalProduct : 0);
    }

    // No zeros, return the product of all elements except self
    return nums.map(num => totalProduct / num);
}
```

### 💡 Solution 4: Using a Helper Function for Comparison

```javascript
function computeProductArrayComparison(nums) {
    const n = nums.length;
    const result = new Array(n);

    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
}

function areArraysEqual(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) {
        throw new Error('Both arguments must be arrays');
    }
    
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
```