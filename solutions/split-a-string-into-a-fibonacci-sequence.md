# Split a String into a Fibonacci Sequence

## 📝 Problem

Imagine you have a string made up of digits, like `"123456579"`. Your goal is to split this string into a sequence of numbers that follow the Fibonacci sequence rules.

A **Fibonacci-like sequence** is a list of numbers where:

1.  Each number is less than 2312^{31}231 (i.e., it fits within a 32-bit signed integer).
    
2.  There are at least three numbers in the sequence.
    
3.  Each number in the sequence, starting from the third one, is the sum of the two preceding numbers.
    

For instance, in a sequence `[a, b, c]`, it must hold that `a + b = c`, and this rule should apply to all subsequent numbers.

When you split the string into numbers, each number must not have unnecessary leading zeroes (e.g., `"01"` is not allowed, but `"0"` is fine).

**Your task** is to determine if you can split the string into such a sequence. If it is possible, return any valid sequence. If not, return an empty list.


## 📌 Examples

### Example 1

**Input:** str = "1101111"  
**Output:** [11, 0, 11, 11]

### Example 2

**Input:** str = "112358130"  
**Output:** []

### Example 3

**Input:** str = "0123"  
**Output:** []

---

## ✅ Solutions

### 💡 Solution 1: Recursive Backtracking

```javascript
function backtrackingFibonacciSequence(num) { // Backtracking Approach
    const sequence = [];
    
    function explore(index) {
        if (index === num.length && sequence.length >= 3) return true;
        for (let length = 1; length <= num.length - index; length++) {
            if (length > 10) break; // Prevent large numbers
            const segment = num.slice(index, index + length);
            if (segment.length > 1 && segment[0] === '0') break; // No leading zeros
            const value = parseInt(segment, 10);
            if (value > 2**31 - 1) break; // 32-bit limit
            if (sequence.length >= 2) {
                const [first, second] = [sequence[sequence.length - 2], sequence[sequence.length - 1]];
                if (first + second !== value) continue;
            }
            sequence.push(value);
            if (explore(index + length)) return true;
            sequence.pop();
        }
        return false;
    }
    
    explore(0);
    return sequence;
}
```

### 💡 Solution 2: Two-Pointer Approach

```javascript
function twoPointerFibonacciSequence(num) { // Two-Pointer Approach
    const length = num.length;
    for (let firstEnd = 1; firstEnd < length / 2; firstEnd++) {
        for (let secondEnd = firstEnd + 1; secondEnd < length; secondEnd++) {
            const firstPart = num.slice(0, firstEnd);
            const secondPart = num.slice(firstEnd, secondEnd);
            if (firstPart.length > 1 && firstPart[0] === '0' || secondPart.length > 1 && secondPart[0] === '0') continue;
            const fibSeq = [parseInt(firstPart), parseInt(secondPart)];
            let pos = secondEnd;
            while (pos < length) {
                const next = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
                const nextStr = next.toString();
                if (num.slice(pos, pos + nextStr.length) !== nextStr) break;
                fibSeq.push(next);
                pos += nextStr.length;
            }
            if (pos === length && fibSeq.length >= 3) return fibSeq;
        }
    }
    return [];
}
```

### 💡 Solution 3: Recursive Depth-First Search

```javascript
function dfsFibonacciSequence(num) { // Recursive Depth-First Search
    function isValidSegment(segment) {
        return segment.length === 1 || segment[0] !== '0';
    }
    
    function dfs(startIndex, currentSeq) {
        if (startIndex === num.length && currentSeq.length >= 3) return currentSeq;
        
        for (let length = 1; length <= 10 && startIndex + length <= num.length; length++) {
            const segment = num.slice(startIndex, startIndex + length);
            if (!isValidSegment(segment)) continue;
            const segmentValue = parseInt(segment, 10);
            if (segmentValue >= 2**31) continue;
            if (currentSeq.length < 2) {
                // Start the sequence with the first two numbers
                currentSeq.push(segmentValue);
                const result = dfs(startIndex + length, currentSeq);
                if (result) return result;
                currentSeq.pop();
            } else {
                // Check if the current segment can continue the sequence
                const [secondLast, last] = [currentSeq[currentSeq.length - 2], currentSeq[currentSeq.length - 1]];
                if (secondLast + last === segmentValue) {
                    currentSeq.push(segmentValue);
                    const result = dfs(startIndex + length, currentSeq);
                    if (result) return result;
                    currentSeq.pop();
                }
            }
        }
        return null;
    }
    
    return dfs(0, []) || [];
}
```

### 💡 Solution 4: Dynamic Programming Approach

```javascript
function dpFibonacciSequence(num) { // Dynamic Programming Approach
    const len = num.length;
    const dp = Array(len).fill(false);
    dp[0] = true;

    function isValidNumber(segment) {
        return segment.length === 1 || segment[0] !== '0';
    }
    
    for (let firstSplit = 1; firstSplit < len; firstSplit++) {
        for (let secondSplit = firstSplit + 1; secondSplit < len; secondSplit++) {
            const first = num.slice(0, firstSplit);
            const second = num.slice(firstSplit, secondSplit);
            if (isValidNumber(first) && isValidNumber(second)) {
                const firstNum = parseInt(first, 10);
                const secondNum = parseInt(second, 10);
                let rest = num.slice(secondSplit);
                const sequence = [firstNum, secondNum];
                while (rest.length > 0) {
                    const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
                    const nextStr = nextNum.toString();
                    if (rest.startsWith(nextStr)) {
                        sequence.push(nextNum);
                        rest = rest.slice(nextStr.length);
                    } else {
                        break;
                    }
                }
                if (rest.length === 0 && sequence.length >= 3) return sequence;
            }
        }
    }
    return [];
}
```

### 💡 Solution 5: Greedy Approach with Early Termination

```javascript
function greedyFibonacciSequence(num) { // Greedy Approach with Early Termination
    function isValidPart(part) {
        return part.length === 1 || part[0] !== '0';
    }
    
    for (let i = 1; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            const first = num.slice(0, i);
            const second = num.slice(i, j);
            if (!isValidPart(first) || !isValidPart(second)) continue;
            const sequence = [parseInt(first, 10), parseInt(second, 10)];
            let k = j;
            while (k < num.length) {
                const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
                const nextStr = nextNumber.toString();
                if (num.slice(k, k + nextStr.length) !== nextStr) break;
                sequence.push(nextNumber);
                k += nextStr.length;
            }
            if (k === num.length && sequence.length >= 3) return sequence;
        }
    }
    return [];
}
```

### 💡 Solution 6: String Manipulation with Validation

```javascript
function stringManipulationFibonacci(num) { // String Manipulation with Validation
    function isValid(part) {
        return part.length === 1 || part[0] !== '0';
    }
    
    for (let i = 1; i < num.length / 2; i++) {
        for (let j = i + 1; j < num.length; j++) {
            const first = num.slice(0, i);
            const second = num.slice(i, j);
            if (!isValid(first) || !isValid(second)) continue;
            const fibSequence = [parseInt(first, 10), parseInt(second, 10)];
            let k = j;
            while (k < num.length) {
                const nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
                const nextStr = nextValue.toString();
                if (num.slice(k, k + nextStr.length) !== nextStr) break;
                fibSequence.push(nextValue);
                k += nextStr.length;
            }
            if (k === num.length && fibSequence.length >= 3) return fibSequence;
        }
    }
    return [];
}
```

### 💡 Solution 7: Iterative Approach with Early Exit

```javascript
function iterativeFibonacciSequence(num) { // Iterative Approach with Early Exit
    const length = num.length;
    for (let firstEnd = 1; firstEnd < length; firstEnd++) {
        for (let secondEnd = firstEnd + 1; secondEnd < length; secondEnd++) {
            const firstPart = num.slice(0, firstEnd);
            const secondPart = num.slice(firstEnd, secondEnd);
            if (firstPart.length > 1 && firstPart[0] === '0' || secondPart.length > 1 && secondPart[0] === '0') continue;
            const sequence = [parseInt(firstPart, 10), parseInt(secondPart, 10)];
            let index = secondEnd;
            while (index < length) {
                const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
                const nextStr = nextNumber.toString();
                if (num.slice(index, index + nextStr.length) !== nextStr) break;
                sequence.push(nextNumber);
                index += nextStr.length;
            }
            if (index === length && sequence.length >= 3) return sequence;
        }
    }
    return [];
}
```