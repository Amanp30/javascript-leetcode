# Minimum Index Sum of Two Lists

## 📝 Problem

You are given two lists of strings, `list1` and `list2`. Your task is to find all the common strings between these two lists and return those with the smallest index sum. The index sum for a common string is defined as the sum of its indices in `list1` and `list2`.

To put it simply, you need to find the common strings such that the sum of their positions in both lists is the smallest possible. If multiple strings have the same minimum index sum, return all of them.


## 📌 Examples

### Example 1

**Input:** list1 =  ["Shogun","Tapioca Express","Burger King","KFC"], list2  =  ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]  
**Output:** ["Shogun"]

### Example 2

**Input:** list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2  = ["KFC","Shogun","Burger King"]  
**Output:** ["Shogun"]

### Example 3

**Input:** list1 = ["happy","sad","good"], list2  = ["sad","happy","good"]  
**Output:** ["happy","sad"]

---

## ✅ Solutions

### 💡 Solution 1: Set Difference and Index Calculation

```javascript
function findRestaurantUsingSetDifferenceAndIndexCalculation(list1, list2) {
    const set1 = new Set(list1);
    const set2 = new Set(list2);
    const common = [...set1].filter(item => set2.has(item));
    
    const indexSumMap = new Map();
    
    common.forEach(item => {
        const indexInList1 = list1.indexOf(item);
        const indexInList2 = list2.indexOf(item);
        const sum = indexInList1 + indexInList2;
        
        indexSumMap.set(item, sum);
    });
    
    let minSum = Infinity;
    const result = [];
    
    indexSumMap.forEach((sum, item) => {
        if (sum < minSum) {
            minSum = sum;
            result.length = 0;
            result.push(item);
        } else if (sum === minSum) {
            result.push(item);
        }
    });
    
    return result;
}
```

### 💡 Solution 2: Index Mapping and Sorting

```javascript
function findRestaurantUsingIndexMappingAndSorting(list1, list2) {
    const indexMap = {};
    const combinedList = [];

    // Create a map of indices for list2
    list2.forEach((item, index) => {
        indexMap[item] = index;
    });

    // Find common items and their index sums
    list1.forEach((item, index) => {
        if (indexMap.hasOwnProperty(item)) {
            combinedList.push([index + indexMap[item], item]);
        }
    });

    // Sort the list by index sum
    combinedList.sort((a, b) => a[0] - b[0]);

    const result = [];
    let minSum = combinedList.length > 0 ? combinedList[0][0] : Infinity;

    // Collect all items with the minimum index sum
    combinedList.forEach(([sum, item]) => {
        if (sum === minSum) {
            result.push(item);
        } else {
            return;
        }
    });

    return result;
}
```

### 💡 Solution 3: Double Loop Comparison with Minimum Sum Calculation

```javascript
function findRestaurantUsingDoubleLoopComparison(list1, list2) {
    const result = [];
    let minSum = Infinity;

    // Iterate through both lists to find common elements and their index sums
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                const sum = i + j;

                if (sum < minSum) {
                    result.length = 0; // Clear the result array
                    result.push(list1[i]);
                    minSum = sum;
                } else if (sum === minSum) {
                    result.push(list1[i]);
                }
            }
        }
    }

    return result;
}
```

### 💡 Solution 4: Double Loop with Minimum Index Sum Tracking

```javascript
function findRestaurantUsingDoubleLoopWithIndexSumTracking(list1, list2) {
    let minSum = list1.length + list2.length; // Initialize with the maximum possible sum
    const result = [];

    // Iterate through both lists to find common elements and their index sums
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                const sum = i + j;

                if (sum < minSum) {
                    // New minimum sum found, update result array
                    result.length = 0;
                    result.push(list2[j]);
                    minSum = sum;
                } else if (sum === minSum) {
                    // Same minimum sum, add the element to the result array
                    result.push(list2[j]);
                }
            }
        }
    }

    return result;
}
```

### 💡 Solution 5: Set Intersection and Index Sum Calculation

```javascript
function findRestaurantUsingSetIntersectionAndIndexSum(list1, list2) {
    const set1 = new Set(list1);
    const set2 = new Set(list2);
    
    // Find the intersection of both sets to get common elements
    const common = [...set1].filter(item => set2.has(item));
    
    const indexSumMap = {};
    
    // Calculate the index sum for each common element
    common.forEach(item => {
        indexSumMap[item] = list1.indexOf(item) + list2.indexOf(item);
    });
    
    // Find the minimum index sum
    const minIndexSum = Math.min(...Object.values(indexSumMap));
    
    // Collect all elements with the minimum index sum
    const result = [];
    for (const [item, sum] of Object.entries(indexSumMap)) {
        if (sum === minIndexSum) {
            result.push(item);
        }
    }
    
    return result;
}
```

### 💡 Solution 6: Double Loop with Index Sum Comparison

```javascript
function findRestaurantUsingDoubleLoopAndIndexComparison(list1, list2) {
    const result = [];
    let minIndexSum = Infinity;

    for (let i = 0; i < list1.length; i++) {
        const word = list1[i];
        
        if (list2.includes(word)) {
            for (let j = 0; j < list2.length; j++) {
                const w2 = list2[j];
                
                if (w2 === word) {
                    const indexSum = i + j;

                    if (indexSum < minIndexSum) {
                        result.length = 0; // Clear the result array
                        result.push(word);
                        minIndexSum = indexSum;
                    } else if (indexSum === minIndexSum) {
                        result.push(word);
                    }
                }
            }
        }
    }

    return result;
}
```

### 💡 Solution 7: Index Tracking and Sum Mapping

```javascript
function findRestaurantUsingIndexTrackingAndSumMapping(list1, list2) {
    const indexMap = new Map();
    const sumMap = new Map();

    // Map elements of list1 to their indices
    for (let i = 0; i < list1.length; i++) {
        indexMap.set(list1[i], i);
    }

    // Find common elements and map their index sums
    for (let i = 0; i < list2.length; i++) {
        if (indexMap.has(list2[i])) {
            const key = i + indexMap.get(list2[i]);
            if (!sumMap.has(key)) {
                sumMap.set(key, []);
            }
            sumMap.get(key).push(list2[i]);
        }
    }

    // Get the list of common strings with the minimum index sum
    const minIndexSum = Math.min(...sumMap.keys());
    const resultList = sumMap.get(minIndexSum) || [];

    return resultList;
}
```