# Distribute Candies

## 📝 Problem

Aman has a collection of `n` candies, where each candy is identified by its type in the array `candyType`. Aman has been advised by his doctor to limit his candy consumption to exactly half of his total candy collection. The goal is to help Aman enjoy the maximum variety of candy types while adhering to this limitation.

Specifically, Aman wants to maximize the number of distinct candy types he can eat given that he can only consume `n / 2` candies.


## 📌 Examples

### Example 1

**Input:** candyType = [1,1,2,2,3,3]  
**Output:** 3

### Example 2

**Input:** candyType = [1,1,2,3]  
**Output:** 2

### Example 3

**Input:** candyType = [6,6,6,6]  
**Output:** 1

---

## ✅ Solutions

### 💡 Solution 1: Hash Set Approach

```javascript
function distributeCandiesHashSet(candyType) {
    const uniqueTypes = new Set(candyType);
    const maxDistinctTypes = candyType.length / 2;
    return Math.min(uniqueTypes.size, maxDistinctTypes);
}
```

### 💡 Solution 2: Frequency Map Approach

```javascript
function distributeCandiesFrequencyMap(candyType) {
    const frequencyMap = {};
    candyType.forEach(candy => frequencyMap[candy] = (frequencyMap[candy] || 0) + 1);
    const distinctTypes = Object.keys(frequencyMap).length;
    const maxDistinctTypes = candyType.length / 2;
    return Math.min(distinctTypes, maxDistinctTypes);
}
```

### 💡 Solution 3: Sorting Approach

```javascript
function distributeCandiesSorting(candyType) {
    const sortedTypes = [...new Set(candyType)].sort();
    const maxDistinctTypes = candyType.length / 2;
    return Math.min(sortedTypes.length, maxDistinctTypes);
}
```

### 💡 Solution 4: Using a Map for Counting

```javascript
function distributeCandiesMapCounting(candyType) {
    const candyCountMap = new Map();
    candyType.forEach(candy => {
        if (!candyCountMap.has(candy)) {
            candyCountMap.set(candy, 1);
        }
    });
    const distinctTypes = candyCountMap.size;
    const maxDistinctTypes = candyType.length / 2;
    return Math.min(distinctTypes, maxDistinctTypes);
}
```

### 💡 Solution 5: Array Deduplication and Length Check

```javascript
function distributeCandiesArrayDeduplication(candyType) {
    const uniqueTypes = Array.from(new Set(candyType));
    const maxDistinctTypes = candyType.length / 2;
    return Math.min(uniqueTypes.length, maxDistinctTypes);
}
```

### 💡 Solution 6: Greedy Approach with Array Processing

```javascript
function distributeCandiesGreedy(candyType) {
    const distinctTypes = new Set();
    let count = 0;
    for (const candy of candyType) {
        if (!distinctTypes.has(candy)) {
            distinctTypes.add(candy);
            count++;
        }
        if (count >= candyType.length / 2) {
            break;
        }
    }
    return Math.min(distinctTypes.size, candyType.length / 2);
}
```

### 💡 Solution 7: Using Filter for Uniqueness

```javascript
function distributeCandiesFilter(candyType) {
    const uniqueTypes = candyType.filter((value, index, self) => self.indexOf(value) === index);
    const maxDistinctTypes = candyType.length / 2;
    return Math.min(uniqueTypes.length, maxDistinctTypes);
}
```

### 💡 Solution 8: Using Reduce to Count Unique Types

```javascript
function distributeCandiesReduce(candyType) {
    const uniqueTypes = candyType.reduce((acc, candy) => {
        if (!acc.includes(candy)) {
            acc.push(candy);
        }
        return acc;
    }, []);
    const maxDistinctTypes = candyType.length / 2;
    return Math.min(uniqueTypes.length, maxDistinctTypes);
}
```