# Count and Say

## 📝 Problem

The "Count and Say" sequence is a sequence of digit strings that is defined recursively. Here's how it works:

1.  **countAndSay(1)** starts with the string "1".
    
2.  For any number **n** greater than 1, **countAndSay(n)** is obtained by describing the digits of **countAndSay(n - 1)**. This is done using a technique called run-length encoding (RLE).
    

**Run-Length Encoding (RLE):** This is a method where you count consecutive identical characters in a string and then encode them as the count followed by the character. For example, if you have the string "3322251":

*   "33" is encoded as "23" (2 occurrences of '3')
    
*   "222" is encoded as "32" (3 occurrences of '2')
    
*   "5" is encoded as "15" (1 occurrence of '5')
    
*   "1" is encoded as "11" (1 occurrence of '1')
    

Putting it all together, the RLE of "3322251" would be "23321511".

**Objective:**

Given a positive integer **n**, return the nth term in the "Count and Say" sequence.


## 📌 Examples

### Example 1

**Input:** n = 1  
**Output:** "1"

### Example 2

**Input:** n = 4  
**Output:** "1211"

---

## ✅ Solutions

### 💡 Solution 1: Iterative Approach

```javascript
function countAndSay(n) {
    function generateNextSequence(currentSequence) {
        let result = "";
        let index = 0;
        while (index < currentSequence.length) {
            let count = 1;
            while (index + 1 < currentSequence.length && currentSequence[index] === currentSequence[index + 1]) {
                index++;
                count++;
            }
            result += count + currentSequence[index];
            index++;
        }
        return result;
    }

    let sequence = "1";
    for (let i = 2; i <= n; i++) {
        sequence = generateNextSequence(sequence);
    }

    return sequence;
}
```

### 💡 Solution 2: Recursive Approach

```javascript
function countAndSayRecursive(n) {
    if (n === 1) return "1";

    function generateNextSequence(currentSequence) {
        let result = "";
        let index = 0;
        while (index < currentSequence.length) {
            let count = 1;
            while (index + 1 < currentSequence.length && currentSequence[index] === currentSequence[index + 1]) {
                index++;
                count++;
            }
            result += count + currentSequence[index];
            index++;
        }
        return result;
    }

    return generateNextSequence(countAndSay(n - 1));
}
```

### 💡 Solution 3: Dynamic Programming

```javascript
function countAndSayDynamicProgramming(n) {
    const sequences = ["1"];

    function generateNextSequence(currentSequence) {
        let result = "";
        let index = 0;
        while (index < currentSequence.length) {
            let count = 1;
            while (index + 1 < currentSequence.length && currentSequence[index] === currentSequence[index + 1]) {
                index++;
                count++;
            }
            result += count + currentSequence[index];
            index++;
        }
        return result;
    }

    for (let i = 1; i < n; i++) {
        sequences.push(generateNextSequence(sequences[i - 1]));
    }

    return sequences[n - 1];
}
```

### 💡 Solution 4: Using a Queue

```javascript
function countAndSayUsingQueue(n) {
    if (n === 1) return "1";
    
    let currentSequence = "1";

    for (let i = 1; i < n; i++) {
        let newSequence = "";
        let index = 0;
        while (index < currentSequence.length) {
            let count = 1;
            while (index + 1 < currentSequence.length && currentSequence[index] === currentSequence[index + 1]) {
                index++;
                count++;
            }
            newSequence += count + currentSequence[index];
            index++;
        }
        currentSequence = newSequence;
    }

    return currentSequence;
}
```

### 💡 Solution 5: Using Array to Build Result

```javascript
function countAndSayArray(n) {
    if (n === 1) return "1";
    
    let currentSequence = "1";

    for (let i = 1; i < n; i++) {
        let parts = [];
        let index = 0;
        while (index < currentSequence.length) {
            let count = 1;
            while (index + 1 < currentSequence.length && currentSequence[index] === currentSequence[index + 1]) {
                index++;
                count++;
            }
            parts.push(count + currentSequence[index]);
            index++;
        }
        currentSequence = parts.join("");
    }

    return currentSequence;
}
```

### 💡 Solution 6: Optimized Space Complexity

```javascript
function countAndSayOptimized(n) {
    if (n === 1) return "1";

    let currentSequence = "1";

    for (let i = 1; i < n; i++) {
        let newSequence = "";
        let index = 0;
        while (index < currentSequence.length) {
            let count = 1;
            while (index + 1 < currentSequence.length && currentSequence[index] === currentSequence[index + 1]) {
                index++;
                count++;
            }
            newSequence += count + currentSequence[index];
            index++;
        }
        currentSequence = newSequence;
    }

    return currentSequence;
}
```

### 💡 Solution 7: Functional Programming Approach

```javascript
function countAndSayFunctionalProgramming(n) {
    if (n === 1) return "1";

    const generateNextSequence = (sequence) => {
        let result = "";
        let index = 0;
        while (index < sequence.length) {
            let count = 1;
            while (index + 1 < sequence.length && sequence[index] === sequence[index + 1]) {
                index++;
                count++;
            }
            result += count + sequence[index];
            index++;
        }
        return result;
    };

    let currentSequence = "1";
    Array.from({ length: n - 1 }).forEach(() => {
        currentSequence = generateNextSequence(currentSequence);
    });

    return currentSequence;
}
```