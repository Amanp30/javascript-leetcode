# Intersection of Two Arrays II

## 📝 Problem

You are tasked with finding the common elements between two integer arrays, `nums1` and `nums2`. Specifically, you need to return an array containing the intersection of these two arrays, with each element appearing as many times as it occurs in both arrays.

**Details:**

*   **Input:** Two integer arrays, `nums1` and `nums2`, where each array has a length between 1 and 1,000. The elements of these arrays are non-negative integers, each ranging from 0 to 1,000.
    
*   **Output:** An array of integers representing the intersection of `nums1` and `nums2`. Each integer should appear in the result as many times as it appears in both arrays. The order of elements in the output does not need to match any specific order.


## 📌 Examples

### Example 1

**Input:** nums1 = [1,2,2,1], nums2 = [2,2]  
**Output:** [2,2]

---

## ✅ Solutions

### 💡 Solution 1: Hash Map Approach

```javascript
function intersectHashMap(nums1, nums2) {
    const map = new Map();
    const result = [];

    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const num of nums2) {
        if (map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return result;
}
```

### 💡 Solution 2: Counting Elements Approach

```javascript
function intersectCounting(nums1, nums2) {
    const countMap = {};
    const result = [];

    for (const num of nums1) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    for (const num of nums2) {
        if (countMap[num] > 0) {
            result.push(num);
            countMap[num]--;
        }
    }

    return result;
}
```

### 💡 Solution 3: Using Frequency Count and Filtering

```javascript
function intersectFrequencyCount(nums1, nums2) {
    const freq = nums1.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
    const result = nums2.filter(num => {
        if (freq[num]) {
            freq[num]--;
            return true;
        }
        return false;
    });

    return result;
}
```

### 💡 Solution 4: Two Pointers

```javascript
function intersectSortingTwoPointers(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const result = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }

    return result;
}
```