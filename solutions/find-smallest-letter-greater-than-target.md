# Find Smallest Letter Greater Than Target

## 📝 Problem

You are provided with a sorted array of characters, `letters`, and a single character, `target`. Your goal is to identify and return the smallest character in `letters` that is lexicographically greater than `target`. If no such character exists, return the first character in the `letters` array.


## 📌 Examples

### Example 1

**Input:** letters = ["c","f","j"], target = "a"  
**Output:** "c"

### Example 2

**Input:** letters = ["c","f","j"], target = "c"  
**Output:** "f"

### Example 3

**Input:** letters = ["x","x","y","y"], target = "z"  
**Output:** "x"

---

## ✅ Solutions

### 💡 Solution 1: Linear Search for Next Greatest Letter

```javascript
function findNextGreatestLetterLinearSearch(letters, target) {
    let result = '{'; // Use a character greater than 'z' for comparison
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target && letters[i] < result) {
            result = letters[i];
        }
    }
    if (result === '{') {
        return letters[0];
    }
    return result;
}
```

### 💡 Solution 2: Binary Search for Next Greatest Letter

```javascript
function findNextGreatestLetterBinarySearch(letters, target) {
    function ceiling(arr, target) {
        let start = 0;
        let end = arr.length - 1;

        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);

            if (target < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        // Wrap around to the beginning of the array if needed
        return arr[start % arr.length];
    }

    let ans = ceiling(letters, target);
    return ans;
}
```

### 💡 Solution 3: Frequency Array for Next Greatest Letter

```javascript
function findNextGreatestLetterFrequencyArray(letters, target) {
    const freq = new Array(26).fill(0);

    // Fill frequency array
    for (const letter of letters) {
        freq[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Determine threshold
    const threshold = target.charCodeAt(0) - 'a'.charCodeAt(0);

    // Find the smallest letter greater than target
    for (let i = 0; i < freq.length; i++) {
        if (i > threshold && freq[i] > 0) {
            return String.fromCharCode(i + 'a'.charCodeAt(0));
        }
    }

    // If no greater letter is found, return the first letter
    return letters[0];
}
```

### 💡 Solution 4: Linear Search with Immediate Return

```javascript
function findNextGreatestLetterLinearSearchImmediate(letters, target) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            return letters[i];
        }
    }
    return letters[0];
}
```