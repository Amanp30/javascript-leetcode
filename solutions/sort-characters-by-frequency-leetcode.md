# Sort Characters By Frequency

## 📝 Problem

Hi there! I'm Aman, and I need your help with a string manipulation task. Given a string `s`, I want to sort its characters based on how often they appear. The more frequently a character appears, the closer it should be to the front of the sorted result.

### Task

Your task is to write a function that takes the string `s` as input and returns a new string sorted in decreasing order of character frequency. If two characters have the same frequency, their order can be arbitrary.


## 📌 Examples

### Example 1

**Input:** string = "tree"  
**Output:** "eert"

### Example 2

**Input:** string = "cccaaa"  
**Output:** "aaaccc"

### Example 3

**Input:** string = "Aabb"  
**Output:** "bbaA"

---

## ✅ Solutions

### 💡 Solution 1: Frequency Sort Using Object Counting and Custom Sorting

```javascript
function frequencySortCustomSort(inputString) {
    // Count the frequency of each character
    const characterFrequency = {};
    for (const character of inputString) {
        characterFrequency[character] = (characterFrequency[character] || 0) + 1;
    }

    // Sort characters by frequency in descending order and then by character
    const sortedCharacters = Object.entries(characterFrequency).sort((a, b) => {
        if (b[1] === a[1]) {
            return a[0].localeCompare(b[0]); // Sort alphabetically if frequencies are the same
        }
        return b[1] - a[1]; // Sort by frequency
    });

    // Build the result string by repeating characters according to their frequency
    let sortedString = '';
    for (const [character, frequency] of sortedCharacters) {
        sortedString += character.repeat(frequency);
    }

    return sortedString;
}
```

### 💡 Solution 2: Frequency Sort via Counting and Sorting Algorithm

```javascript
function frequencySortCounting(inputString) {
  // Create a Map to store character frequencies
  let characterFrequencies = new Map();

  // Count the frequency of each character
  for (let character of inputString) {
    characterFrequencies.set(
      character,
      (characterFrequencies.get(character) ?? 0) + 1
    );
  }

  // Sort characters by frequency and build the output string
  let sortedOutput = [...characterFrequencies.entries()]
    .sort((a, b) => b[1] - a[1]) // Sort by frequency in descending order
    .map((entry) => entry[0].repeat(entry[1])) // Repeat characters according to their frequency
    .join(""); // Join the array into a single string

  return sortedOutput;
};
```

### 💡 Solution 3: Frequency Sort Using a Priority Queue

```javascript
function frequencySortPriorityQueue(inputString) {
    let sortedResult = "";
    let characterCountMap = new Map();
    
    // Count the frequency of each character
    for (let i = 0; i < inputString.length; i++) {
        characterCountMap.set(inputString[i], (characterCountMap.get(inputString[i]) || 0) + 1);
    }

    let characterArray = [...characterCountMap.entries()];
    // Sort the array using a priority queue
    let priorityQueue = new PriorityQueue();
    for (let i = 0; i < characterArray.length; i++) {
        priorityQueue.enqueue(characterArray[i][0], characterArray[i][1]);
    }
    characterArray = priorityQueue.getQueue();

    // Build the result string based on frequencies
    for (let i = characterArray.length - 1; i >= 0; i--) {
        let frequency = characterArray[i].frequency;
        while (frequency) {
            sortedResult += characterArray[i].character;
            frequency -= 1;
        }
    }

    return sortedResult;
};

class QueueElement {
    constructor(character, frequency) {
        this.character = character;
        this.frequency = frequency;
    }
}

class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(character, frequency) {
        let queueElement = new QueueElement(character, frequency);
        let inserted = false;
        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i].frequency > queueElement.frequency) {
                this.elements.splice(i, 0, queueElement);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            this.elements.push(queueElement);
        }
    }

    getQueue() {
        return this.elements;
    }
}
```

### 💡 Solution 4: Frequency Count and Bitwise Encoding Approach for Character Sorting

```javascript
function frequencySortBitwise(s) {
    const freq = new Array(75).fill(0);

    for (const char of s) {
        const code = char.charCodeAt(0) - 48;
        freq[code] = ((freq[code] >> 7) + 1) << 7 | code;
    }

    // Sort the array in descending order
    freq.sort((a, b) => b - a);

    let result = '';
    for (const v of freq) {
        if (v > 0) { // Only process non-zero frequencies
            const count = v >> 7; // Extract frequency
            const char = String.fromCharCode((v & 127) + 48); // Extract character
            result += char.repeat(count); // Repeat the character by its frequency
        }
    }

    return result;
}
```

### 💡 Solution 5: Merge Sort-Based Character Frequency Sorter in JavaScript

```javascript
function frequencySortMergeSort(s) {
    const N = 63;
    const map = new Array(N).fill(0).map(() => ({ val: '', f: 0 }));

    // Count frequencies
    for (const char of s) {
        let index;
        if (char >= 'A' && char <= 'Z') {
            index = char.charCodeAt(0) - 'A'.charCodeAt(0) + 10; // 10-35 for uppercase
        } else if (char >= 'a' && char <= 'z') {
            index = char.charCodeAt(0) - 'a'.charCodeAt(0) + 36; // 36-61 for lowercase
        } else {
            index = char.charCodeAt(0) - '0'.charCodeAt(0); // 0-9 for digits
        }
        map[index].val = char;
        map[index].f++;
    }

    // Merge sort function
    function merge(A, B, l, r, c) {
        let i = l, j = c + 1, k = l;

        while (i <= c && j <= r) {
            if (A[i].f <= A[j].f) {
                B[k++] = A[i++];
            } else {
                B[k++] = A[j++];
            }
        }

        while (i <= c) B[k++] = A[i++];
        while (j <= r) B[k++] = A[j++];

        for (let m = l; m <= r; m++) {
            A[m] = B[m];
        }
    }

    function mergeSort(A, B, l, r) {
        if (r <= l) return;
        const c = Math.floor((l + r) / 2);
        mergeSort(A, B, l, c);
        mergeSort(A, B, c + 1, r);
        merge(A, B, l, r, c);
    }

    const B = new Array(N);
    mergeSort(map, B, 0, N - 1);

    // Build the result string
    let result = '';
    for (let i = N - 1; map[i].f > 0; i--) {
        result += map[i].val.repeat(map[i].f);
    }

    return result;
}
```