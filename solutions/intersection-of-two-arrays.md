# Intersection of Two Arrays

## 📝 Problem

In the world of data analysis, it's common to compare lists of numbers to find common elements. Imagine you have two lists of integers, and you need to identify which numbers appear in both lists. Your task is to write a function that finds these common elements and ensures that each element in the result appears only once.

#### Detailed Description

Given two integer arrays, `nums1` and `nums2`, your goal is to return an array containing the intersection of these two arrays. The intersection of two arrays consists of elements that are present in both arrays. Each element in the result should be unique, meaning duplicates are not allowed. The order of elements in the result array can be arbitrary.


## 📌 Examples

### Example 1

**Input:** nums1 = [1,2,2,1], nums2 = [2,2]  
**Output:** [2]

### Example 2

**Input:** nums1 = [4,9,5], nums2 = [9,4,9,8,4]  
**Output:** [9,4]

---

## ✅ Solutions

### 💡 Solution 1: Hash Map for Counting

```javascript
function intersectionUsingHashMap(nums1, nums2) {
    const countMap = new Map();
    nums1.forEach(num => countMap.set(num, (countMap.get(num) || 0) + 1));
    return [...new Set(nums2.filter(num => countMap.has(num)))];
}
```

### 💡 Solution 2: Frequency Array

```javascript
function intersectionUsingFrequencyArray(nums1, nums2) {
    const maxNum = 1000; // Given constraints
    const frequency = new Array(maxNum + 1).fill(0);
    nums1.forEach(num => frequency[num] = 1);
    return [...new Set(nums2.filter(num => frequency[num]))];
}
```

### 💡 Solution 3: Iterative Approach with Hash Set

```javascript
function intersectionUsingIterativeHashSet(nums1, nums2) {
    const set1 = new Set(nums1);
    const intersection = new Set();
    nums2.forEach(num => {
        if (set1.has(num)) intersection.add(num);
    });
    return [...intersection];
}
```

### 💡 Solution 4: Binary Search Approach (for Sorted Arrays)

```javascript
function intersectionUsingBinarySearch(nums1, nums2) {
    nums1 = [...new Set(nums1)].sort((a, b) => a - b);
    const result = [];
    
    function binarySearch(arr, target) {
        let low = 0, high = arr.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) return true;
            if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return false;
    }

    nums2.forEach(num => {
        if (binarySearch(nums1, num) && !result.includes(num)) {
            result.push(num);
        }
    });
    return result;
}
```

### 💡 Solution 5: Efficient Intersection of Two Arrays Using JavaScript Sets

```javascript
function intersectionTwoSets(nums1, nums2) {
    const set1 = new Set(nums1); // Create a set from the first array
    const intersectionSet = new Set(); // Set to store the intersection elements
    const result = []; // Array to store the final result

    // Iterate over the second array and check if the element exists in set1
    for (const num of nums2) {
        if (set1.has(num)) {
            intersectionSet.add(num); // Add to intersectionSet if present
        }
    }

    // Convert the intersectionSet to an array and return
    return Array.from(intersectionSet);
}
```