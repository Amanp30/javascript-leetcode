# Search Insert Position

## 📝 Problem

You are given a sorted array of distinct integers and a target value. Your task is to find the index of the target value if it exists in the array. If the target is not found, you need to determine the index where it should be inserted to maintain the sorted order.

To solve this problem, you must write an efficient algorithm.


## 📌 Examples

### Example 1

**Input:** nums = [1,3,5,6], target = 5  
**Output:** 2

### Example 2

**Input:** nums = [1,3,5,6], target = 2  
**Output:** 1

### Example 3

**Input:** nums = [1,3,5,6], target = 7  
**Output:** 4

---

## ✅ Solutions

### 💡 Solution 1: Binary Search for Insert Position

```javascript
function searchInsertBinarySearch(arr, target) {
    let st = 0;
    let end = arr.length - 1;
    let ans = arr.length; // Initialize ans to the end of the array

    while (st <= end) {
        const mid = Math.floor(st + (end - st) / 2);
        if (target === arr[mid]) {
            return mid;
        }
        if (target < arr[mid]) {
            end = mid - 1;
            ans = mid; // Update ans to the current mid
        } else {
            st = mid + 1;
        }
    }
    return ans;
}
```

### 💡 Solution 2: Linear Search for Insert Position

```javascript
function searchInsert(nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (target > nums[i]) {
            count++;
        }
    }
    return count;
}
```

### 💡 Solution 3: Binary Search with Lower Bound for Insert Position

```javascript
function searchInsertLowerBound(nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
```

### 💡 Solution 4: Linear Search for Insert Position in Sorted Array

```javascript
function searchInsertLS(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
}
```

### 💡 Solution 5: Recursive Binary Search for Insert Position

```javascript
function searchInsertRecursive(nums, target) {
    function binarySearch(nums, target, start, end) {
        if (start > end) {
            return start;
        }
        
        const mid = Math.floor(start + (end - start) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            return binarySearch(nums, target, mid + 1, end);
        }
        return binarySearch(nums, target, start, mid - 1);
    }

    return binarySearch(nums, target, 0, nums.length - 1);
}
```

### 💡 Solution 6: Linear Scan

```javascript
function searchInsertPositionMethod(nums, target) {
  const arrLength = nums.length;
  if (arrLength === 0) throw new Error("Empty Array");

  for (let i = 0; i < arrLength; i++) {
    if (nums[i] === target) return i; // Target found, return the index
    if (nums[i] > target) return i; // Target should be inserted before this index
  }

  // If target is greater than all elements, return the length of the array
  return arrLength;
}
```

### 💡 Solution 7: Search Insert Position using exponentaion search algorithm

```javascript
function searchInsertExponentialSearch(arr, target) {
    const n = arr.length;

    // If the array is empty
    if (n === 0) {
        return 0;
    }

    // If the target is less than the first element
    if (target <= arr[0]) {
        return 0;
    }

    // Find the range where the target could be
    let index = 1;
    while (index < n && arr[index] < target) {
        index *= 2;
    }

    // Perform binary search within the range
    let left = Math.floor(index / 2);
    let right = Math.min(index, n - 1);

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // If target is not found, `left` will be the insertion point
    return left;
}
```