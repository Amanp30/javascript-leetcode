# Maximum Product of Three Numbers

## 📝 Problem

You are given an array of integers, `nums`. Your task is to determine the maximum product that can be obtained by multiplying any three numbers from this array.


## 📌 Examples

### Example 1

**Input:** nums = [1,2,3]  
**Output:** 6

### Example 2

**Input:** nums = [1,2,3,4]  
**Output:** 24

### Example 3

**Input:** nums = [-1,-2,-3]  
**Output:** -6

---

## ✅ Solutions

### 💡 Solution 1: Sort and Select

```javascript
function maximumProductOfThree_SortAndSelect(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    return Math.max(nums[n-1] * nums[n-2] * nums[n-3], nums[0] * nums[1] * nums[n-1]);
}
```

### 💡 Solution 2: Heap (Max-Heap)

```javascript
function maximumProductOfThree_Heap(nums) {
    class MaxHeap {
        constructor() {
            this.heap = [];
        }
        insert(val) {
            this.heap.push(val);
            this.heapifyUp();
        }
        extractMax() {
            const max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
            return max;
        }
        heapifyUp() {
            let index = this.heap.length - 1;
            while (index > 0) {
                let parentIndex = Math.floor((index - 1) / 2);
                if (this.heap[index] <= this.heap[parentIndex]) break;
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            }
        }
        heapifyDown() {
            let index = 0;
            while (true) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                let largest = index;
                if (left < this.heap.length && this.heap[left] > this.heap[largest]) largest = left;
                if (right < this.heap.length && this.heap[right] > this.heap[largest]) largest = right;
                if (largest === index) break;
                [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
                index = largest;
            }
        }
    }

    const maxHeap = new MaxHeap();
    for (const num of nums) {
        maxHeap.insert(num);
    }

    const largest = [maxHeap.extractMax(), maxHeap.extractMax(), maxHeap.extractMax()];
    return largest.reduce((prod, val) => prod * val, 1);
}
```

### 💡 Solution 3: Min-Heap for the Top 3 Largest

```javascript
function maximumProductOfThree_MinHeap(nums) {
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        insert(val) {
            this.heap.push(val);
            this.heapifyUp();
        }
        extractMin() {
            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
            return min;
        }
        heapifyUp() {
            let index = this.heap.length - 1;
            while (index > 0) {
                let parentIndex = Math.floor((index - 1) / 2);
                if (this.heap[index] >= this.heap[parentIndex]) break;
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            }
        }
        heapifyDown() {
            let index = 0;
            while (true) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                let smallest = index;
                if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
                if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
                if (smallest === index) break;
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            }
        }
    }

    const minHeap = new MinHeap();
    for (const num of nums) {
        minHeap.insert(num);
        if (minHeap.heap.length > 3) {
            minHeap.extractMin();
        }
    }

    const largestThree = minHeap.heap;
    return largestThree[0] * largestThree[1] * largestThree[2];
}
```

### 💡 Solution 4: Brute Force (Triple Nested Loop)

```javascript
function maximumProductOfThree_BruteForce(nums) {
    let maxProduct = -Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const product = nums[i] * nums[j] * nums[k];
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }
    return maxProduct;
}
```

### 💡 Solution 5: Two Largest Positive and Two Smallest Negative

```javascript
function maximumProductOfThree_LargestTwoSmallest(nums) {
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for (const num of nums) {
        if (num > max1) {
            [max3, max2, max1] = [max2, max1, num];
        } else if (num > max2) {
            [max3, max2] = [max2, num];
        } else if (num > max3) {
            max3 = num;
        }
        
        if (num < min1) {
            [min2, min1] = [min1, num];
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}
```

### 💡 Solution 6: Sorting with Optimized Comparisons

```javascript
function maximumProductOfThree_SortingOptimized(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    return Math.max(
        nums[n-1] * nums[n-2] * nums[n-3],
        nums[0] * nums[1] * nums[n-1]
    );
}
```

### 💡 Solution 7: Greedy Selection

```javascript
function maximumProductOfThree_Greedy(nums) {
    let [max1, max2, max3] = [-Infinity, -Infinity, -Infinity];
    let [min1, min2] = [Infinity, Infinity];

    for (const num of nums) {
        if (num > max1) {
            [max3, max2, max1] = [max2, max1, num];
        } else if (num > max2) {
            [max3, max2] = [max2, num];
        } else if (num > max3) {
            max3 = num;
        }

        if (num < min1) {
            [min2, min1] = [min1, num];
        } else if (num < min2) {
            min2 = num;
        }
    }

    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}
```

### 💡 Solution 8: Using Set to Find Top Three Unique Values

```javascript
function maximumProductOfThree_Set(nums) {
    const topThree = Array.from(new Set(nums)).sort((a, b) => a - b).slice(-3);
    const bottomTwo = Array.from(new Set(nums)).sort((a, b) => a - b).slice(0, 2);
    if (topThree.length < 3) throw new Error("Array must have at least three unique elements");
    const maxProduct = Math.max(
        topThree.reduce((prod, val) => prod * val, 1),
        topThree[0] * bottomTwo[0] * bottomTwo[1]
    );
    return maxProduct;
}
```