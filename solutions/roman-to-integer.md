# Roman to Integer

## 📝 Problem

Roman numerals are a system of numerical notation used in ancient Rome. They are represented by combinations of the following seven symbols:

*   **I** for 1
    
*   **V** for 5
    
*   **X** for 10
    
*   **L** for 50
    
*   **C** for 100
    
*   **D** for 500
    
*   **M** for 1000
    

In Roman numerals, symbols are usually written from largest to smallest from left to right. However, there are a few exceptions where a smaller numeral precedes a larger numeral to indicate subtraction. For example:

*   **IV** represents 4 (5 - 1).
    
*   **IX** represents 9 (10 - 1).
    
*   **XC** represents 90 (100 - 10).
    
*   **CD** represents 400 (500 - 100).
    
*   **CM** represents 900 (1000 - 100).
    

Your task is to write a function that converts a given Roman numeral into its integer value.


## 📌 Examples

### Example 1

**Input:** s = "III"  
**Output:** 3

### Example 2

**Input:** s = "LVIII"  
**Output:** 58

### Example 3

**Input:** s = "MCMXCIV"  
**Output:** 1994

---

## ✅ Solutions

### 💡 Solution 1: Basic Approach

```javascript
function romanToIntBasic(s) {
    const romanToValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const current = romanToValue[s[i]];
        const next = i < length - 1 ? romanToValue[s[i + 1]] : 0;

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}
```

### 💡 Solution 2: Using Two-Pass Technique

```javascript
function romanToIntTwoPass(s) {
    const romanToValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        total += romanToValue[s[i]];
    }

    for (let i = 0; i < length - 1; i++) {
        if (romanToValue[s[i]] < romanToValue[s[i + 1]]) {
            total -= 2 * romanToValue[s[i]];
        }
    }

    return total;
}
```

### 💡 Solution 3: Using a Map and Iteration

```javascript
function romanToIntMap(s) {
    const romanToValue = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const current = romanToValue.get(s[i]);
        const next = i < length - 1 ? romanToValue.get(s[i + 1]) : 0;

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}
```

### 💡 Solution 4: Using Recursion

```javascript
function romanToIntRecursive(s) {
    const romanToValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    function helper(index) {
        if (index >= s.length) return 0;
        const current = romanToValue[s[index]];
        const next = index < s.length - 1 ? romanToValue[s[index + 1]] : 0;

        if (current < next) {
            return -current + helper(index + 1);
        } else {
            return current + helper(index + 1);
        }
    }

    return helper(0);
}
```

### 💡 Solution 5: Using Switch Case for Mapping

```javascript
function romanToIntSwitch(s) {
    function romanToValue(char) {
        switch (char) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
        }
    }

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const current = romanToValue(s[i]);
        const next = i < length - 1 ? romanToValue(s[i + 1]) : 0;

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}
```

### 💡 Solution 6: Using a Function Object for Mapping

```javascript
function romanToIntFunctionObject(s) {
    const romanToValue = {
        I: () => 1,
        V: () => 5,
        X: () => 10,
        L: () => 50,
        C: () => 100,
        D: () => 500,
        M: () => 1000
    };

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const current = romanToValue[s[i]]();
        const next = i < length - 1 ? romanToValue[s[i + 1]]() : 0;

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}
```

### 💡 Solution 7: Using a Lookup Table Array

```javascript
function romanToIntLookupArray(s) {
    const romanToValue = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const values = [1, 5, 10, 50, 100, 500, 1000];

    function getValue(char) {
        return values[romanToValue.indexOf(char)];
    }

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const current = getValue(s[i]);
        const next = i < length - 1 ? getValue(s[i + 1]) : 0;

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}
```

### 💡 Solution 8: Using a Dictionary and Reduce

```javascript
function romanToIntReduce(s) {
    const romanToValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    return s.split('').reduce((total, current, index, arr) => {
        const value = romanToValue[current];
        const next = index < arr.length - 1 ? romanToValue[arr[index + 1]] : 0;

        return total + (value < next ? -value : value);
    }, 0);
}
```

### 💡 Solution 9: Using String Index for Mapping

```javascript
function romanToIntStringIndex(s) {
    const romanToValue = 'IVXLCDM';
    const values = [1, 5, 10, 50, 100, 500, 1000];

    function getValue(char) {
        return values[romanToValue.indexOf(char)];
    }

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const current = getValue(s[i]);
        const next = i < length - 1 ? getValue(s[i + 1]) : 0;

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}
```

### 💡 Solution 10: Using Object for Value Lookup

```javascript
function romanToIntObject(s) {
    const romanToValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const current = romanToValue[s[i]];
        const next = i < length - 1 ? romanToValue[s[i + 1]] : 0;

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}
```