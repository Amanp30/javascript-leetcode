# Defuse the Bomb

## 📝 Problem

You’re on a mission to defuse a bomb, and your time is ticking down! You have a circular array called `code`, which represents the bomb's security code. Along with this array, you have an integer `k` that indicates how to modify the array to decode the bomb.

Here’s how you need to transform the `code` array based on the value of `k`:

*   **If** `k > 0`**:** Replace each element in the array with the sum of the next `k` elements. Since the array is circular, this means you will wrap around to the start of the array if needed.
    
*   **If** `k < 0`**:** Replace each element with the sum of the previous `|k|` elements. Again, wrap around to the end of the array if necessary.
    
*   **If** `k == 0`**:** Replace every element with `0`.
    

For example, if you have an array `code = [5,7,1,4]` and `k = 3`, each number will be replaced by the sum of the next 3 numbers. This means the result for the array will be `[12, 10, 16, 13]` because:

*   `5` is replaced by `7 + 1 + 4 = 12`
    
*   `7` is replaced by `1 + 4 + 5 = 10`
    
*   `1` is replaced by `4 + 5 + 7 = 16`
    
*   `4` is replaced by `5 + 7 + 1 = 13`
    

Implement a function that computes the transformed array based on the given `code` and `k` values. Ensure that your solution accurately handles the circular nature of the array and efficiently processes the transformation according to the provided constraints.


## 📌 Examples

### Example 1

**Input:** code = [5,7,1,4], k = 3  
**Output:** [12,10,16,13]

### Example 2

**Input:** code = [1,2,3,4], k = 0  
**Output:** [0,0,0,0]

### Example 3

**Input:** code = [2,4,9,3], k = -2  
**Output:** [12,5,6,13]

---

## ✅ Solutions

### 💡 Solution 1: Sliding Window Approach

```javascript
function defuseBombSlidingWindow(code, k) {
  const n = code.length;
  const result = new Array(n).fill(0);

  // Edge case: k = 0
  if (k === 0) return result;

  // Sliding window calculation
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let cnt = Math.abs(k);
    let j = 0;

    if (k > 0) {
      j = i + 1;
      while (cnt--) {
        sum += code[j % n];
        j++;
      }
    } else {
      j = i - 1;
      while (cnt--) {
        if (j < 0) j += n; // Wrap around if index is negative
        sum += code[j];
        j--;
      }
    }

    result[i] = sum;
  }

  return result;
}

// Testing the function
console.log(defuseBombSlidingWindow([5, 7, 1, 4], 3)); // Expected Output: [12, 10, 16, 13]
console.log(defuseBombSlidingWindow([1, 2, 3, 4], 0)); // Expected Output: [0, 0, 0, 0]
console.log(defuseBombSlidingWindow([2, 4, 9, 3], -2)); // Expected Output: [12, 5, 6, 13]
```

### 💡 Solution 2: Modular Arithmetic Approach

```javascript
function defuseBombModular(codeArray, key) {
  const length = codeArray.length;
  const decryptedArray = new Array(length).fill(0);
  
  if (key === 0) return decryptedArray;

  for (let index = 0; index < length; index++) {
    let sum = 0;
    if (key > 0) {
      for (let offset = 1; offset <= key; offset++) {
        sum += codeArray[(index + offset) % length];
      }
    } else {
      for (let offset = 1; offset <= -key; offset++) {
        sum += codeArray[(index - offset + length) % length];
      }
    }
    decryptedArray[index] = sum;
  }
  
  return decryptedArray;
}
```

### 💡 Solution 3: Prefix Sum Approach

```javascript
function defuseBombPrefixSum(code, k) {
  const n = code.length;
  const x = new Array(n * 2);
  
  // Extend the array
  for (let i = 0; i < n; i++) {
    x[i] = code[i];
    x[i + n] = code[i];
  }
  
  // Compute prefix sums
  const prefix = new Array(n * 2 + 1).fill(0);
  for (let i = 0; i < n * 2; i++) {
    prefix[i + 1] = prefix[i] + x[i];
  }
  
  const result = new Array(n).fill(0);
  
  // Compute results based on k
  if (k > 0) {
    for (let i = 0; i < n; i++) {
      result[i] = prefix[i + k + 1] - prefix[i + 1];
    }
  } else if (k < 0) {
    k = -k;
    for (let i = 0; i < n; i++) {
      result[i] = prefix[i + n] - prefix[i + n - k];
    }
  } else {
    result.fill(0);
  }
  
  return result;
}
```