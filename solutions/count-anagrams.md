# Count Anagrams

## 📝 Problem

You are tasked with finding the number of distinct anagrams of a given string `s`. This string `s` consists of one or more words, each separated by a single space. A distinct anagram of `s` is defined as a new string where each word in the new string is a permutation of the corresponding word in the original string.

To illustrate, consider the string `"too hot"`. The goal is to count all possible distinct rearrangements of this string where:

*   The first word in the new string is a permutation of `"too"`.
    
*   The second word in the new string is a permutation of `"hot"`.
    

For example, `"too hot"` itself is one such anagram. Other possible distinct anagrams include `"oot hot"`, `"oto toh"`, `"too toh"`, and `"too oht"`. The total number of distinct anagrams for `"too hot"` is 18.

Since the number of possible distinct anagrams can be extremely large, your solution should return the count modulo 109+710^9 + 7109+7 to ensure it fits within standard computational limits.


## 📌 Examples

### Example 1

**Input:** s = "too hot"  
**Output:** 18

### Example 2

**Input:** s = "aa"  
**Output:** 1

---

## ✅ Solutions

### 💡 Solution 1: Calculate Number of Distinct Anagrams in a String

```javascript
function countAnagrams1(s) {
    const MOD = 1_000_000_007;

    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result = (result * i) % MOD;
        }
        return result;
    }

    function countDistinctAnagrams(word) {
        const freqMap = {};
        for (const char of word) {
            freqMap[char] = (freqMap[char] || 0) + 1;
        }

        let totalFactorial = factorial(word.length);
        for (const count of Object.values(freqMap)) {
            totalFactorial = (totalFactorial / factorial(count)) % MOD;
        }
        return totalFactorial;
    }

    let result = 1;
    const words = s.split(' ');
    for (const word of words) {
        result = (result * countDistinctAnagrams(word)) % MOD;
    }

    return result;
}
```

### 💡 Solution 2: Count Distinct Anagrams Using Permutations

```javascript
function countAnagrams2(s) {
    const MOD = 1_000_000_007;

    // Compute factorial of n % MOD
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result = (result * i) % MOD;
        }
        return result;
    }

    // Compute permutations for a given word
    function perm(n) {
        return factorial(n);
    }

    // Compute product of permutations for counts
    function prodPerm(counts) {
        return counts.reduce((acc, count) => (acc * factorial(count)) % MOD, 1);
    }

    // Count frequency of each character in the word
    function countFreq(word) {
        const freqMap = {};
        for (const char of word) {
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
        return Object.values(freqMap);
    }

    // Main calculation
    let result = 1;
    const words = s.split(' ');
    for (const word of words) {
        const counts = countFreq(word);
        result = (result * perm(word.length) / prodPerm(counts)) % MOD;
    }

    return result;
}
```

### 💡 Solution 3: Count Distinct Anagrams Using Precomputed Factorials and Modular Inverses

```javascript
function countAnagrams3(s) {
    const MOD = 1_000_000_007;
    const n = s.length;

    // Precompute factorials and modular inverses
    const fact = new Array(n + 1).fill(1);
    const ifact = new Array(n + 1).fill(1);
    const inv = new Array(n + 1).fill(1);

    for (let x = 1; x <= n; ++x) {
        if (x >= 2) {
            inv[x] = MOD - Math.floor(MOD / x) * inv[MOD % x] % MOD;
        }
        fact[x] = (fact[x - 1] * x) % MOD;
        ifact[x] = (ifact[x - 1] * inv[x]) % MOD;
    }

    let ans = 1;
    const words = s.split(/\s+/); // Split by whitespace

    for (const word of words) {
        ans = (ans * fact[word.length]) % MOD;
        
        const freq = new Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (const count of freq) {
            ans = (ans * ifact[count]) % MOD;
        }
    }

    return ans;
}
```

### 💡 Solution 4: Count Distinct Anagrams Using Prime Factorization

```javascript
function countAnagramsPrimeFactorization(s) {
    const MOD = 1_000_000_007;

    // Helper function to compute power with modulo
    function modPow(base, exp, mod) {
        let result = 1;
        while (exp > 0) {
            if (exp % 2 === 1) result = (result * base) % mod;
            base = (base * base) % mod;
            exp = Math.floor(exp / 2);
        }
        return result;
    }

    // Helper function to get all primes up to max_number
    function getPrimes(maxNumber) {
        const sieve = Array(maxNumber + 1).fill(true);
        sieve[0] = sieve[1] = false;
        const primes = [];
        for (let i = 2; i <= maxNumber; i++) {
            if (sieve[i]) {
                primes.push(i);
                for (let j = i * i; j <= maxNumber; j += i) {
                    sieve[j] = false;
                }
            }
        }
        return primes;
    }

    // Helper function to get the prime factors of a number
    function getPrimeFactors(value, primes) {
        const factors = new Map();
        for (const prime of primes) {
            if (prime > value) break;
            let primePower = prime;
            while (primePower <= value) {
                if (factors.has(prime)) {
                    factors.set(prime, factors.get(prime) + Math.floor(value / primePower));
                } else {
                    factors.set(prime, Math.floor(value / primePower));
                }
                primePower *= prime;
            }
        }
        return factors;
    }

    const words = s.split(/\s+/);
    const maxLength = Math.max(...words.map(word => word.length));
    const primes = getPrimes(maxLength);

    const factorials = new Map();
    words.forEach(word => {
        const len = word.length;
        factorials.set(len, (factorials.get(len) || 0) + 1);
        const freq = new Map();
        for (const char of word) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }
        for (const count of freq.values()) {
            factorials.set(count, (factorials.get(count) || 0) - 1);
        }
    });

    const allPrimes = new Map();
    for (const [value, count] of factorials) {
        if (count !== 0) {
            const primeFactors = getPrimeFactors(value, primes);
            for (const [prime, primeCount] of primeFactors) {
                allPrimes.set(prime, (allPrimes.get(prime) || 0) + count * primeCount);
            }
        }
    }

    let result = 1;
    for (const [prime, power] of allPrimes) {
        result = (result * modPow(prime, power, MOD)) % MOD;
    }

    return result;
}
```

### 💡 Solution 5: Count Distinct Anagrams Using Factorial Calculation

```javascript
function countAnagrams(s) {
    const MOD = 1_000_000_007;

    // Helper function to compute factorial of n % MOD
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result = (result * i) % MOD;
        }
        return result;
    }

    // Split the string into words and calculate the result
    let result = 1;
    const words = s.split(/\s+/);

    for (const word of words) {
        const freq = {};
        let denominator = 1;
        
        // Count frequency of each character in the word
        for (const char of word) {
            freq[char] = (freq[char] || 0) + 1;
        }

        // Calculate denominator product of factorials of character counts
        for (const count of Object.values(freq)) {
            if (count > 1) {
                denominator = (denominator * factorial(count)) % MOD;
            }
        }

        // Calculate the number of distinct anagrams for the current word
        const totalPermutations = factorial(word.length);
        const distinctAnagrams = (totalPermutations / denominator) % MOD;

        // Multiply the result with the number of distinct anagrams for the current word
        result = (result * distinctAnagrams) % MOD;
    }

    return result;
}
```