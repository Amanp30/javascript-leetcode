# Sort Colors

## 📝 Problem

Given an array `nums` with integers representing red, white, and blue (0, 1, and 2), sort the array in-place so that all instances of each color are grouped together in the order red (0), white (1), and blue (2). You must solve this problem without using built-in sorting functions.

Its a [leetcode problem](https://leetcode.com/problems/sort-colors/description/)


## 📌 Examples

### Example 1

**Input:** array = [2, 0, 2, 1, 1, 0]  
**Output:** [0, 0, 1, 1, 2, 2]

### Example 2

**Input:** array = [2, 0, 1]  
**Output:** [0, 1, 2]

---

## ✅ Solutions

### 💡 Solution 1: Dutch National Flag Algorithm

```javascript
function sortColors(nums) {
    let redPointer = 0;
    let currentPointer = 0;
    let bluePointer = nums.length - 1;

    while (currentPointer <= bluePointer) {
        if (nums[currentPointer] === 0) {
            [nums[redPointer], nums[currentPointer]] = [nums[currentPointer], nums[redPointer]];
            redPointer++;
            currentPointer++;
        } else if (nums[currentPointer] === 1) {
            currentPointer++;
        } else {
            [nums[currentPointer], nums[bluePointer]] = [nums[bluePointer], nums[currentPointer]];
            bluePointer--;
        }
    }
    
    return nums;
}
```

### 💡 Solution 2: Counting Sort

```javascript
function sortColorsCounting(nums) {
    const count = [0, 0, 0];

    for (let num of nums) {
        count[num]++;
    }

    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            nums[index++] = i;
            count[i]--;
        }
    }

    return nums;
}
```

### 💡 Solution 3: Two-Pointer Technique

```javascript
function sortColorsTwoPointer(nums) {
    let start = 0;
    let end = nums.length - 1;

    for (let i = 0; i <= end; i++) {
        while (nums[i] === 0 && i > start) {
            [nums[i], nums[start]] = [nums[start], nums[i]];
            start++;
        }
        while (nums[i] === 2 && i < end) {
            [nums[i], nums[end]] = [nums[end], nums[i]];
            end--;
            i--;  // Recheck the swapped element
        }
    }
    
    return nums;
}
```

### 💡 Solution 4: Sort colors in place

```javascript
function sortColorsInPlace(nums) {
    let countRed = 0;     // Count of 0s (red)
    let countWhite = 0;   // Count of 1s (white)
    let countBlue = 0;    // Count of 2s (blue)

    // Count occurrences of each color
    for (let color of nums) {
        if (color === 0) countRed++;
        else if (color === 1) countWhite++;
        else if (color === 2) countBlue++;
    }

    // Rebuild the array based on the counts
    for (let i = 0; i < nums.length; i++) {
        if (i < countRed) nums[i] = 0;
        else if (i < countRed + countWhite) nums[i] = 1;
        else nums[i] = 2;
    }

    return nums;
}
```

### 💡 Solution 5: Sort colors array

```javascript
function sortColorsArray(nums) {
    let length = nums.length;
    let countRed = 0;     // Count of 0s (red)
    let countWhite = 0;   // Count of 1s (white)
    let countBlue = 0;    // Count of 2s (blue)
    let index = 0;        // Index for rebuilding the array

    // Count occurrences of each color
    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) countRed++;
        else if (nums[i] === 1) countWhite++;
        else if (nums[i] === 2) countBlue++;
    }

    // Rebuild the array based on the counts
    while (countRed-- > 0) nums[index++] = 0;
    while (countWhite-- > 0) nums[index++] = 1;
    while (countBlue-- > 0) nums[index++] = 2;

    return nums;
}
```

### 💡 Solution 6: Sort Colors Using Sort

```javascript
function sortColorsUsingSort(nums) {
    return nums.sort((a, b) => a - b);
}
```