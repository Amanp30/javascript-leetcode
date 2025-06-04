# Reverse Vowels of a String

## 📝 Problem

You have a string `s` that consists of both uppercase and lowercase letters. Your task is to reverse just the vowels in this string. The vowels are 'a', 'e', 'i', 'o', and 'u', and their case matters—so 'A' is different from 'a'. While reversing the vowels, the positions of the consonants and the overall structure of the string should stay exactly the same.


## 📌 Examples

### Example 1

**Input:** s = "hello"  
**Output:** "holle"

---

## ✅ Solutions

### 💡 Solution 1: Two-Pointer Approach

```javascript
function reverseVowelsTwoPointer(s) {
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(arr[left])) left++;
        while (left < right && !vowels.has(arr[right])) right--;
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('');
}
```

### 💡 Solution 2: Stack-Based Approach

```javascript
function reverseVowelsWithStack(s) {
    const vowels = new Set('aeiouAEIOU');
    const stack = [];
    const arr = s.split('');

    for (const char of arr) {
        if (vowels.has(char)) stack.push(char);
    }

    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            arr[i] = stack.pop();
        }
    }

    return arr.join('');
}
```

### 💡 Solution 3: List Comprehension with Reverse

```javascript
function reverseVowelsListComprehension(s) {
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split('');
    const vowelList = arr.filter(char => vowels.has(char)).reverse();
    let vowelIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            arr[i] = vowelList[vowelIndex++];
        }
    }

    return arr.join('');
}
```

### 💡 Solution 4: Using Array Reverse Method

```javascript
function reverseVowelsArrayReverse(s) {
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split('');
    const vowelIndices = [];

    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            vowelIndices.push(i);
        }
    }

    let left = 0;
    let right = vowelIndices.length - 1;

    while (left < right) {
        const temp = arr[vowelIndices[left]];
        arr[vowelIndices[left]] = arr[vowelIndices[right]];
        arr[vowelIndices[right]] = temp;
        left++;
        right--;
    }

    return arr.join('');
}
```

### 💡 Solution 5: In-Place Replacement with HashSet

```javascript
function reverseVowelsInPlace(s) {
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split('');
    let i = 0, j = arr.length - 1;

    while (i < j) {
        if (!vowels.has(arr[i])) {
            i++;
        } else if (!vowels.has(arr[j])) {
            j--;
        } else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return arr.join('');
}
```

### 💡 Solution 6: Iterative Replacement with Set

```javascript
function reverseVowelsIterative(s) {
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split('');
    let vowelChars = [];

    for (const char of arr) {
        if (vowels.has(char)) {
            vowelChars.push(char);
        }
    }

    let index = vowelChars.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            arr[i] = vowelChars[index--];
        }
    }

    return arr.join('');
}
```

### 💡 Solution 7: Using Queue for Vowels

```javascript
function reverseVowelsWithQueue(s) {
    const vowels = new Set('aeiouAEIOU');
    const queue = [];
    const arr = s.split('');

    for (const char of arr) {
        if (vowels.has(char)) queue.push(char);
    }

    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            arr[i] = queue.pop();
        }
    }

    return arr.join('');
}
```

### 💡 Solution 8: Using Frequency Count and Replacements

```javascript
function reverseVowelsFrequency(s) {
    const vowels = new Set('aeiouAEIOU');
    const freq = [];
    const arr = s.split('');

    for (const char of arr) {
        if (vowels.has(char)) freq.push(char);
    }

    freq.reverse();
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            arr[i] = freq[index++];
        }
    }

    return arr.join('');
}
```

### 💡 Solution 9: Using Character Frequency Mapping

```javascript
function reverseVowelsCharMap(s) {
    const vowels = new Set('aeiouAEIOU');
    const vowelChars = [];
    const arr = s.split('');

    for (const char of arr) {
        if (vowels.has(char)) {
            vowelChars.push(char);
        }
    }

    vowelChars.reverse();
    let charIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            arr[i] = vowelChars[charIndex++];
        }
    }

    return arr.join('');
}
```

### 💡 Solution 10: Custom Stack Implementation

```javascript
function reverseVowelsCustomStack(s) {
    const vowels = new Set('aeiouAEIOU');
    const stack = [];
    const arr = s.split('');

    for (const char of arr) {
        if (vowels.has(char)) {
            stack.push(char);
        }
    }

    return arr.map(char => {
        if (vowels.has(char)) {
            return stack.pop();
        }
        return char;
    }).join('');
}
```