# Integer to Roman

## 📝 Problem

Imagine you’re living in ancient Rome, where numbers are represented with a set of unique symbols. Roman numerals use seven symbols to signify values:

*   **I** stands for 1
    
*   **V** stands for 5
    
*   **X** stands for 10
    
*   **L** stands for 50
    
*   **C** stands for 100
    
*   **D** stands for 500
    
*   **M** stands for 1000
    

To convert a modern-day integer into this ancient numeral system, follow these rules:

1.  **Subtracting Values**: Some numbers are written using subtraction to avoid four repetitions of a symbol. For example:
    
    *   4 is written as **IV** (5 minus 1)
        
    *   9 is written as **IX** (10 minus 1)
        
    *   Similarly, 40 is **XL** (50 minus 10), 90 is **XC** (100 minus 10), 400 is **CD** (500 minus 100), and 900 is **CM** (1000 minus 100).
        
2.  **Repetition Rules**: You can repeat certain symbols up to three times:
    
    *   Symbols **I**, **X**, **C**, and **M** can be repeated (e.g., 3 is **III**, 30 is **XXX**).
        
    *   Symbols **V**, **L**, and **D** cannot be repeated. Instead, use the subtractive forms if needed (e.g., 4 is **IV**, not **IIII**).
        
3.  **Build from Largest to Smallest**: Start with the largest value and work your way down. For example, to convert 3749:
    
    *   Start with the largest numeral (1000), then move to the next largest (500), and continue until you represent the entire number.


## 📌 Examples

### Example 1

**Input:** n = 3749  
**Output:** "MMMDCCXLIX"

### Example 2

**Input:** n = 58  
**Output:** "LVIII"

---

## ✅ Solutions

### 💡 Solution 1: Greedy Approach

```javascript
function intToRomanGreedy(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = "";
    
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }
    
    return result;
}
```

### 💡 Solution 2: Using a Map

```javascript
function intToRomanMap(num) {
    const map = new Map([
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ]);
    let result = "";
    
    for (const [value, symbol] of map) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    
    return result;
}
```

### 💡 Solution 3: Recursive Approach

```javascript
function intToRomanRecursive(num) {
    const valueSymbolPairs = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];

    function convert(n) {
        if (n === 0) return "";
        for (const [value, symbol] of valueSymbolPairs) {
            if (n >= value) {
                return symbol + convert(n - value);
            }
        }
        return "";
    }

    return convert(num);
}
```

### 💡 Solution 4: Using String Concatenation

```javascript
function intToRomanStringConcat(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = "";
    
    values.forEach((value, index) => {
        while (num >= value) {
            result += symbols[index];
            num -= value;
        }
    });
    
    return result;
}
```

### 💡 Solution 5: Array of Objects

```javascript
function intToRomanArrayOfObjects(num) {
    const arr = [
        { value: 1000, symbol: "M" }, { value: 900, symbol: "CM" }, 
        { value: 500, symbol: "D" }, { value: 400, symbol: "CD" }, 
        { value: 100, symbol: "C" }, { value: 90, symbol: "XC" }, 
        { value: 50, symbol: "L" }, { value: 40, symbol: "XL" }, 
        { value: 10, symbol: "X" }, { value: 9, symbol: "IX" }, 
        { value: 5, symbol: "V" }, { value: 4, symbol: "IV" }, 
        { value: 1, symbol: "I" }
    ];
    let result = "";
    
    arr.forEach(({ value, symbol }) => {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    });
    
    return result;
}
```

### 💡 Solution 6: Using Recursive Helper Function

```javascript
function intToRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    return intToRomanHelper(num, values, symbols);
}

function intToRomanHelper(num, values, symbols) {
    if (num === 0) return "";
    for (let i = 0; i < values.length; i++) {
        if (num >= values[i]) {
            return symbols[i] + intToRomanHelper(num - values[i], values, symbols);
        }
    }
    return "";  // Default return if no conditions are met
}
```

### 💡 Solution 7: Using a While Loop with Index

```javascript
function intToRomanWhileLoop(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = "";
    let i = 0;
    
    while (num > 0) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
        i++;
    }
    
    return result;
}
```

### 💡 Solution 8: Map with Array Reduce

```javascript
function intToRomanReduce(num) {
    // Define the Roman numeral values and their corresponding symbols
    const romanMap = new Map([
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ]);

    // Use array reduce to build the Roman numeral string
    return Array.from(romanMap.entries()).reduce((acc, [value, symbol]) => {
        while (num >= value) {
            acc += symbol;
            num -= value;
        }
        return acc;
    }, "");
}
```

### 💡 Solution 9: Using Array Reduce with Object

```javascript
function intToRomanObjectReduce(num) {
    // Define the Roman numeral values and their corresponding symbols
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    // Use array reduce to build the Roman numeral string
    return romanNumerals.reduce((acc, { value, symbol }) => {
        while (num >= value) {
            acc += symbol;
            num -= value;
        }
        return acc;
    }, "");
}
```

### 💡 Solution 10: Using Switch Case for Values

```javascript
function intToRomanSwitch(num) {
    const valueSymbols = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];
    let result = "";

    for (const [value, symbol] of valueSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}
```