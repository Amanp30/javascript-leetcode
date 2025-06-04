# Count primes

## 📝 Problem

Write a JavaScript function that returns the count of prime numbers that are strictly less than a given integer `n`.


## 📌 Examples

### Example 1

**Input:** n = 10  
**Output:** 4

### Example 2

**Input:** n = 15  
**Output:** 6

### Example 3

**Input:** n = 0  
**Output:** 0

---

## ✅ Solutions

### 💡 Solution 1: Using Simple Iteration and Prime Checking

```javascript
function countPrimesSimple(n) {
    if (n <= 2) return 0;

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) count++;
    }
    return count;
}
```

### 💡 Solution 2: Using Sieve of Eratosthenes

```javascript
function countPrimesSieve(n) {
    if (n <= 2) return 0;

    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.reduce((count, prime) => count + (prime ? 1 : 0), 0);
}
```

### 💡 Solution 3: Using a Set to Track Prime Numbers

```javascript
function countPrimesSet(n) {
    if (n <= 2) return 0;

    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return Array.from(new Set(isPrime.map((val, idx) => val ? idx : null).filter(v => v !== null))).length;
}
```

### 💡 Solution 4: Using Dynamic Programming

```javascript
function countPrimesDynamic(n) {
    if (n <= 2) return 0;

    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.filter(val => val).length;
}
```

### 💡 Solution 5: Using Array filter Method

```javascript
function countPrimesFilter(n) {
    if (n <= 2) return 0;

    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.map((val, idx) => val ? idx : null).filter(v => v !== null).length;
}
```

### 💡 Solution 6: Using Map to Track Prime Status

```javascript
function countPrimesMap(n) {
    if (n <= 2) return 0;

    let isPrime = new Map();
    for (let i = 2; i < n; i++) {
        isPrime.set(i, true);
    }

    for (let i = 2; i * i < n; i++) {
        if (isPrime.get(i)) {
            for (let j = i * i; j < n; j += i) {
                isPrime.set(j, false);
            }
        }
    }

    return Array.from(isPrime.values()).filter(val => val).length;
}
```

### 💡 Solution 7: Using Generators

```javascript
function* primesGenerator(n) {
    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (isPrime[i]) yield i;
    }
}

function countPrimesGenerator(n) {
    return Array.from(primesGenerator(n)).length;
}
```

### 💡 Solution 8: Using Functional Programming

```javascript
function countPrimesFunctional(n) {
    if (n <= 2) return 0;

    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.reduce((acc, val) => acc + (val ? 1 : 0), 0);
}
```

### 💡 Solution 9: Using While Loop

```javascript
function countPrimesWhile(n) {
    if (n <= 2) return 0;

    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    let i = 2;
    while (i * i < n) {
        if (isPrime[i]) {
            let j = i * i;
            while (j < n) {
                isPrime[j] = false;
                j += i;
            }
        }
        i++;
    }

    return isPrime.reduce((count, prime) => count + (prime ? 1 : 0), 0);
}
```

### 💡 Solution 10: Using Nested Loops

```javascript
function countPrimesNestedLoops(n) {
    if (n <= 2) return 0;

    let count = 0;
    for (let i = 2; i < n; i++) {
        let prime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) count++;
    }
    return count;
}
```