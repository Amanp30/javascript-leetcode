# Contains Duplicate elements in array

## 📝 Problem

You have an integer array `nums` and need to determine if there are any duplicate elements in the array.

**What is a Duplicate?**

A duplicate is an element that appears more than once in the array.

**Task:**

Write a function to check if any value appears at least twice. If so, return `true`. If all elements are unique, return `false`.


## 📌 Examples

### Example 1

**Input:** array = [1,2,3,1]  
**Output:** true

### Example 2

**Input:** nums = [1,2,3,4]  
**Output:** false

### Example 3

**Input:** nums = [1,1,1,3,3,4,3,2,4,2]  
**Output:** true

---

## ✅ Solutions

### 💡 Solution 1: Using a Set

```javascript
function containsDuplicateWithSet(nums) {
    if (nums.length < 1 || nums.length > 10**5) {
        throw new Error("Array length out of bounds.");
    }


    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
```

### 💡 Solution 2: Sorting the Array

```javascript
function containsDuplicateWithSorting(nums) {
    if (nums.length < 1 || nums.length > 10**5) {
        throw new Error("Array length out of bounds.");
    }


    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
}
```

### 💡 Solution 3: Using a Hash Map

```javascript
function containsDuplicateWithHashMap(nums) {
    if (nums.length < 1 || nums.length > 10**5) {
        throw new Error("Array length out of bounds.");
    }

    const countMap = {};
    for (const num of nums) {
        if (countMap[num]) {
            return true;
        }
        countMap[num] = 1;
    }
    return false;
}
```

### 💡 Solution 4: Two-Pointer Technique (After Sorting)

```javascript
function containsDuplicateWithTwoPointer(nums) {
    if (nums.length < 1 || nums.length > 10**5) {
        throw new Error("Array length out of bounds.");
    }

    nums.sort((a, b) => a - b);
    let left = 0;
    let right = 1;
    while (right < nums.length) {
        if (nums[left] === nums[right]) {
            return true;
        }
        left++;
        right++;
    }
    return false;
}
```

### 💡 Solution 5: Using JavaScript’s Set with Array Spread

```javascript
function containsDuplicateWithSetSpread(nums) {
    if (nums.length < 1 || nums.length > 10**5) {
        throw new Error("Array length out of bounds.");
    }
    return new Set(nums).size !== nums.length;
}
```

### 💡 Solution 6: Using a Bit Vector (For Limited Range)

```javascript
function containsDuplicateWithBitVector(nums) {
    if (nums.length < 1 || nums.length > 10**5) {
        throw new Error("Array length out of bounds.");
    }

    const bitVector = new Uint8Array(2**16); // Example for limited range, adjust size if needed
    for (const num of nums) {
        const index = num & (bitVector.length - 1); // Modulo operation
        if (bitVector[index]) {
            return true;
        }
        bitVector[index] = 1;
    }
    return false;
}
```

### 💡 Solution 7: Using a Frequency Array (For Limited Range)

```javascript
function containsDuplicateWithFrequencyArray(nums) {
    // Validate the input constraints
    if (nums.length < 1 || nums.length > 100000) {
        throw new Error("Array length out of bounds.");
    }
    // Initialize the frequency map
    const frequencyMap = new Map();

    // Check for duplicates
    for (const num of nums) {
        if (frequencyMap.has(num)) {
            return true; // Duplicate found
        }
        frequencyMap.set(num, true); // Mark this number as seen
    }

    // No duplicates found
    return false;
}
```

### 💡 Solution 8: Using Sorting with a Helper Function

```javascript
function containsDuplicateWithSortingAndHelper(nums) {
    if (nums.length < 1 || nums.length > 10**5) {
        throw new Error("Array length out of bounds.");
    }

    nums.sort((a, b) => a - b);

    const hasDuplicate = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                return true;
            }
        }
        return false;
    };

    return hasDuplicate(nums);
}
```

### 💡 Solution 9: Efficient Trie-Based Duplicate Detection

```javascript
function containsDuplicateTrie(nums) {
    const root = new TrieNode();

    function insert(num) {
        let currentNode = root;
        const bitSize = 32;
        let isDuplicate = true;

        for (let bit = 0; bit < bitSize; bit++) {
            const mask = 1 << bit;
            const setBit = (num & mask) !== 0 ? 1 : 0;

            if (!(setBit in currentNode.children)) {
                isDuplicate = false;
                currentNode.children[setBit] = new TrieNode();
            }
            currentNode = currentNode.children[setBit];
        }

        if (isDuplicate) {
            isDuplicate = currentNode.isEnd;
        }

        currentNode.isEnd = true;
        return isDuplicate;
    }

    for (const num of nums) {
        if (insert(num)) {
            return true;
        }
    }

    return false;
}
class TrieNode {
    constructor() {
        this.children = {}; // Maximum size could be 2, since we only care about bits 0 and 1
        this.isEnd = false;
    }
}
```

### 💡 Solution 10: Heap-Based Duplicate Detection

```javascript
function containsDuplicateHeapBased(nums) {
    let start = Math.floor(nums.length / 2);
    let end = nums.length;

    while (end > 1) {
        if (start > 0) {
            start -= 1;
        } else {
            if (end < nums.length && nums[0] === nums[end]) {
                return true;
            }
            end -= 1;
            [nums[0], nums[end]] = [nums[end], nums[0]]; // Swap elements
        }

        let root = start;
        while ((2 * root + 1) < end) {
            let child = (2 * root + 1);
            if (child + 1 < end && nums[child] < nums[child + 1]) {
                child = child + 1;
            }
            if (nums[root] < nums[child]) {
                [nums[root], nums[child]] = [nums[child], nums[root]]; // Swap elements
                root = child;
            } else if (nums[root] === nums[child]) {
                return true;
            } else {
                break;
            }
        }
    }
    return false;
}
```

### 💡 Solution 11: Divide and Conquer Approach for Duplicate Detection

```javascript
function containsDuplicateDivide(numbers) {
    try {
        const elementCounts = getElementsCount(numbers);
        return elementCounts.some(([_, count]) => count > 1);
    } catch (error) {
        console.error(`[ERROR] containsDuplicate: ${error}`);
        return false;
    }
}


function countNumbers(numbers, low, high, table) {
    if (high - low === 1) {
        const num = numbers[low];
        table[num] = (table[num] || 0) + 1;
        return;
    }
    
    const mid = Math.floor((high + low) / 2);
    countNumbers(numbers, low, mid, table);
    countNumbers(numbers, mid, high, table);
}

function getElementsCount(numbers) {
    const mappingTable = {};
    countNumbers(numbers, 0, numbers.length, mappingTable);
    return Object.entries(mappingTable);
}
```

### 💡 Solution 12: Using merge sort algorithm

```javascript
function containsDuplicateMergeSort(nums) {
    mergeSort(nums, 0, nums.length - 1);

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }

    return false;
}

function mergeSort(nums, l, r) {
    if (l >= r) return;

    const mid = Math.floor((l + r) / 2);
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);

    const temp = new Array(r - l + 1);
    let a = l, b = mid + 1, count = 0;

    while (a <= mid && b <= r) {
        if (nums[a] <= nums[b]) {
            temp[count++] = nums[a++];
        } else {
            temp[count++] = nums[b++];
        }
    }

    while (a <= mid) temp[count++] = nums[a++];
    while (b <= r) temp[count++] = nums[b++];

    for (let i = 0; i < count; i++) {
        nums[l + i] = temp[i];
    }
}
```