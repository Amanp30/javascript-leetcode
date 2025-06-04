# Can Place Flowers

## 📝 Problem

You are given a flowerbed, which is a long row of plots, where each plot can either be empty or already occupied by a flower. The flowerbed is represented as an integer array, `flowerbed`, where `0` indicates an empty plot and `1` indicates an occupied plot. The constraint is that flowers cannot be planted in adjacent plots; thus, there must be at least one empty plot between any two flowers.

Your task is to determine if you can plant `n` new flowers in the flowerbed while adhering to the rule that no two flowers can be adjacent.


## 📌 Examples

### Example 1

**Input:** flowerBedArray = [1,0,0,0,1], n = 1  
**Output:** true

### Example 2

**Input:** flowerBedArray = [1,0,0,0,1], n = 2  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Greedy approach to solve Can Place Flowers leetcode problem

```javascript
function canPlaceFlowersGreedy(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        const left = i === 0 || flowerbed[i - 1] === 0;
        const right = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1; // Plant a flower here
            n -= 1; // Decrease the number of flowers needed
        }
    }

    return n <= 0;
}
```

### 💡 Solution 2: Edge Case Handling and Greedy Placement

```javascript
function canPlaceFlowersWithEdgeCases(flowerbed, n) {
    const s = flowerbed.length;

    // Edge case: Single plot
    if (s === 1) {
        return flowerbed[0] === 0 ? true : n === 0;
    }

    // Check first plot
    if (s >= 2 && flowerbed[0] === 0 && flowerbed[1] === 0) {
        if (n === 0) return true;
        flowerbed[0] = 1; // Plant a flower
        n--;
    }

    // Check last plot
    if (s >= 2 && flowerbed[s - 1] === 0 && flowerbed[s - 2] === 0) {
        if (n === 0) return true;
        flowerbed[s - 1] = 1; // Plant a flower
        n--;
    }

    // Check the rest of the plots
    for (let i = 1; n !== 0 && i < s - 1; i++) {
        if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1; // Plant a flower
            n--;
        }
    }

    return n === 0;
}
```

### 💡 Solution 3: Sliding Window with Boundary Handling

```javascript
function canPlaceFlowersSlidingWindowWithBoundaryHandling(flowerbed, n) {
    let a = 0;
    const length = flowerbed.length;
    
    // Add a 0 at the end to handle boundary case
    flowerbed.push(0);

    for (let i = 0; i < length; i++) {
        let b = flowerbed[i];
        let c = flowerbed[i + 1];

        // Check if current, previous, and next positions are empty
        if (a === 0 && b === 0 && c === 0) {
            n--;  // A flower can be planted here
            a = 1;  // Update previous spot to avoid adjacent flowers
        } else {
            a = b;  // Update previous spot value
        }

        // Return true if we have planted enough flowers
        if (n <= 0) {
            return true;
        }
    }

    // Return true if we have planted enough flowers
    return n <= 0;
}
```

### 💡 Solution 4: Recursive Check with Slicing

```javascript
function canPlaceFlowersRecursiveCheck(flowerbed, n) {
    if (n === 0) return true;
    if (flowerbed.length === 0) return false;

    function canPlaceRecursive(flowerbed, n) {
        if (n === 0) return true;
        if (flowerbed.length === 0) return false;

        let prv = 0;

        for (let i = 0; i < flowerbed.length; i++) {
            if (prv === 0 && flowerbed[i] === 0 && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                return canPlaceRecursive(flowerbed.slice(i + 2), n - 1);
            }
            prv = flowerbed[i];
        }

        return false;
    }

    return canPlaceRecursive(flowerbed, n);
}
```

### 💡 Solution 5: Recursive Backtracking

```javascript
function canPlaceFlowersRecursive(flowerbed, n) {
    // Helper function to recursively check if we can place n flowers starting from index 'start'
    function helper(flowerbed, flowerbedSize, start, n) {
        if (n === 0) return true; // Base case: If no more flowers need to be planted, return true
        if (start >= flowerbedSize) return false; // Out of bounds, no more space to place flowers

        if (start === flowerbedSize - 1) {
            // If we are at the last plot
            if (n === 1 && flowerbed[flowerbedSize - 1] === 0) return true;
            else return false;
        }

        for (let i = start; i < flowerbedSize; i++) {
            if (flowerbed[i] === 0) {
                // Check if we can plant a flower here
                if ((i === start && flowerbed[i + 1] === 0) || // Start of the flowerbed
                    (i === flowerbedSize - 1 && flowerbed[i - 1] === 0) || // End of the flowerbed
                    (i > start && i < flowerbedSize - 1 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0)) { // Middle of the flowerbed
                    if (helper(flowerbed, flowerbedSize, i + 2, n - 1)) {
                        return true; // If we successfully place a flower, return true
                    }
                }
            }
        }

        return false; // No valid placement found
    }

    return helper(flowerbed, flowerbed.length, 0, n);
}
```

### 💡 Solution 6: Greedy with Count Tracking

```javascript
function canPlaceFlowersGreedy2(flowerbed, n) {
    let planted = 0;  // Counter for the number of flowers planted
    let count = 1;    // Counter for the current length of consecutive empty plots

    for (let i = 0; i < flowerbed.length; i++) {
        if (planted >= n) return true; // If the required number of flowers are planted, return true

        if (flowerbed[i] === 1) {
            count = 0;  // Reset the count as we hit a flower
        } else {
            count++;  // Increase the count of consecutive empty plots
        }

        // Check if there is enough space to plant a flower (3 consecutive empty plots)
        if (count === 3) {
            count = 1;  // Reset count to 1, as we place a flower here
            planted++;  // Increment the number of planted flowers
        }
    }

    // If the last segment of the flowerbed ends with exactly 2 empty plots, we can plant one more flower
    if (count === 2) {
        planted++;
    }

    return planted >= n;  // Check if we have planted the required number of flowers
}
```