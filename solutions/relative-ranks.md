# Relative Ranks

## 📝 Problem

You are given an array of integers called `score`, where each element represents the unique score of an athlete in a competition. Your goal is to determine the ranking of each athlete based on their scores.

The ranking system is as follows:

*   The athlete with the highest score receives the "Gold Medal".
    
*   The athlete with the second highest score receives the "Silver Medal".
    
*   The athlete with the third highest score receives the "Bronze Medal".
    
*   For athletes placed 4th and beyond, their rank is simply their placement number (e.g., the 4th highest score is ranked "4", the 5th highest score is ranked "5", and so forth).
    

Return an array `answer` where `answer[i]` is the rank of the `i-th` athlete based on their score.


## 📌 Examples

### Example 1

**Input:** score = [5,4,3,2,1]  
**Output:** ["Gold Medal","Silver Medal","Bronze Medal","4","5"]

### Example 2

**Input:** score = [10,3,8,9,4]  
**Output:** ["Gold Medal","5","Bronze Medal","Silver Medal","4"]

---

## ✅ Solutions

### 💡 Solution 1: Sorting-Based Ranking with Medal Assignment

```javascript
function findRelativeRanks(score) {
    // Create an array of [score, index] pairs
    const sIdx = score.map((value, index) => [value, index]);

    // Sort the array in descending order based on scores
    sIdx.sort((a, b) => b[0] - a[0]);

    // Prepare the result array with the same length as the input
    const ans = new Array(score.length);

    // Assign medals or ranks based on sorted scores
    if (sIdx.length > 0) ans[sIdx[0][1]] = "Gold Medal";
    if (sIdx.length > 1) ans[sIdx[1][1]] = "Silver Medal";
    if (sIdx.length > 2) ans[sIdx[2][1]] = "Bronze Medal";
    
    for (let i = 3; i < sIdx.length; i++) {
        ans[sIdx[i][1]] = (i + 1).toString();
    }

    return ans;
}
```

### 💡 Solution 2: Using radix sort

```javascript
function findRelativeRanksRadix(score) {
    const n = score.length;
    const sIdx = score.map((value, index) => [value, index]);

    // Radix sort
    function radixSort(nums) {
        const bucket = Array.from({ length: 1024 }, () => []);
        
        // 1st round
        for (const [x, i] of nums) {
            bucket[x & 1023].push([x, i]);
        }
        let index = 0;
        for (const B of bucket) {
            for (const v of B) {
                nums[index++] = v;
            }
            B.length = 0;  // Clear bucket
        }
        
        // 2nd round
        for (const [x, i] of nums) {
            bucket[(x >> 10) & 1023].push([x, i]);
        }
        index = 0;
        for (const B of bucket) {
            for (const v of B) {
                nums[index++] = v;
            }
        }
    }

    radixSort(sIdx);

    const ans = new Array(n);
    if (n > 0) ans[sIdx[n - 1][1]] = "Gold Medal";
    if (n > 1) ans[sIdx[n - 2][1]] = "Silver Medal";
    if (n > 2) ans[sIdx[n - 3][1]] = "Bronze Medal";
    
    for (let i = n - 4; i >= 0; i--) {
        ans[sIdx[i][1]] = (n - i).toString();
    }

    return ans;
}
```

### 💡 Solution 3: Rank Scores Using Max Heap for Efficient Medal Assignment

```javascript
function findRelativeRanksMaxHeap(score) {
    const maxHeap = new MaxHeap();
    for (let i = 0; i < score.length; i++) {
        maxHeap.push([score[i], i]);
    }

    const res = new Array(score.length);
    let cnt = 0;
    while (maxHeap.heap.length > 0) {
        const [currScore, index] = maxHeap.pop();
        cnt++;

        if (cnt === 1) {
            res[index] = "Gold Medal";
        } else if (cnt === 2) {
            res[index] = "Silver Medal";
        } else if (cnt === 3) {
            res[index] = "Bronze Medal";
        } else {
            res[index] = cnt.toString();
        }
    }

    return res;
}



class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this._heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return root;
    }

    top() {
        return this.heap[0];
    }

    _heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index][0] > this.heap[parentIndex][0]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this._heapifyUp(parentIndex);
        }
    }

    _heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largest = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][0] > this.heap[largest][0]) {
            largest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] > this.heap[largest][0]) {
            largest = rightChildIndex;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this._heapifyDown(largest);
        }
    }
}
```

### 💡 Solution 4: Sorting 2

```javascript
function findRelativeRanksSorting2(score) {
    // Create a sorted copy of the scores
    const sorted = [...score].sort((a, b) => b - a);

    // Function to find the rank of a score
    function findNum(sorted, n) {
        const index = sorted.indexOf(n);
        return index === -1 ? 0 : sorted.length - index;
    }

    // Map to store rank for each score
    const rankMap = new Map();
    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) {
            rankMap.set(sorted[i], 'Gold Medal');
        } else if (i === 1) {
            rankMap.set(sorted[i], 'Silver Medal');
        } else if (i === 2) {
            rankMap.set(sorted[i], 'Bronze Medal');
        } else {
            rankMap.set(sorted[i], (i + 1).toString());
        }
    }

    // Create the result array
    return score.map(s => rankMap.get(s));
}
```