# check whether one string is a rotation of another

## 📝 Problem

Given two strings `s1` and `s2`, write a function to determine if `s2` is a rotation of `s1`. A string `s2` is considered a rotation of `s1` if it can be obtained by shifting `s1` some number of characters to the left or right.


## 📌 Examples

### Example 1

**Input:** s1 = "waterbottle", s2 = "erbottlewat"  
**Output:** true

### Example 2

**Input:** s1 = "hello", s2 = "lohell"  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Using Concatenation

```javascript
function isRotationConcat(s1, s2) {
    if (s1.length !== s2.length) return false;
    return (s1 + s1).includes(s2);
}
```

### 💡 Solution 2: Using Two-Pointer Technique

```javascript
function isRotationTwoPointer(s1, s2) {

    if (s1.length !== s2.length) return false;

    let i = 0, j = 0;

    while (i < s1.length) {

        while (j < s2.length && s2[j] !== s1[i]) j++;

        if (j === s2.length) return false;

        let k = i, l = j;

        while (k < s1.length && s2[l] === s1[k]) {

            k++;

            l = (l + 1) % s2.length;

        }

        if (k === s1.length) return true;

        i++;

    }

    return false;

}
```

### 💡 Solution 3: Using a Set to Store Rotations

```javascript
function isRotationSet(s1, s2) {
    if (s1.length !== s2.length) return false;
    
    const rotations = new Set();
    let temp = s1;

    for (let i = 0; i < s1.length; i++) {
        rotations.add(temp);
        temp = temp.slice(1) + temp[0];
    }

    return rotations.has(s2);
}
```

### 💡 Solution 4: Using a Queue

```javascript
function isRotationQueue(s1, s2) {
    if (s1.length !== s2.length) return false;

    const queue = [...s1];
    for (let i = 0; i < s1.length; i++) {
        if (queue.join('') === s2) return true;
        queue.push(queue.shift());
    }

    return false;
}
```

### 💡 Solution 5: Using String Rotation Check

```javascript
function isRotationStringRotationCheck(s1, s2) {
    if (s1.length !== s2.length) return false;

    for (let i = 0; i < s1.length; i++) {
        const rotated = s1.slice(i) + s1.slice(0, i);
        if (rotated === s2) return true;
    }

    return false;
}
```

### 💡 Solution 6: Using String Substring

```javascript
function isRotationSubstring(s1, s2) {
    if (s1.length !== s2.length) return false;

    const doubledS1 = s1 + s1;
    return doubledS1.includes(s2);
}
```