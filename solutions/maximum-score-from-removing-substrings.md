# Maximum Score From Removing Substrings

## 📝 Problem

You are given a string `s` and two integers `x` and `y`. You can perform two types of operations on the string `s` any number of times:

1.  Remove the substring `"ab"` and gain `x` points.
    
2.  Remove the substring `"ba"` and gain `y` points.
    

Your task is to determine the maximum score you can achieve by applying these operations optimally on the string `s`.


## 📌 Examples

### Example 1

**Input:** s = "cdbcbbaaabab", x = 4, y = 5  
**Output:** 19

### Example 2

**Input:** s = "aabbaaxybbaabb", x = 5, y = 4  
**Output:** 20

---

## ✅ Solutions

### 💡 Solution 1: Greedy Approach

```javascript
function getMaxScoreGreedy(s, x, y) {
    let score = 0;
    while (s.includes('ab') || s.includes('ba')) {
        if (s.includes('ab') && (s.includes('ba') === false || x >= y)) {
            s = s.replace('ab', '');
            score += x;
        } else if (s.includes('ba')) {
            s = s.replace('ba', '');
            score += y;
        }
    }
    return score;
}
```

### 💡 Solution 2: Brute Force Approach

```javascript
function getMaxScoreBruteForce(s, x, y) {
    let maxScore = 0;

    function backtrack(s, score) {
        maxScore = Math.max(maxScore, score);
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] === 'a' && s[i + 1] === 'b') {
                backtrack(s.slice(0, i) + s.slice(i + 2), score + x);
            } else if (s[i] === 'b' && s[i + 1] === 'a') {
                backtrack(s.slice(0, i) + s.slice(i + 2), score + y);
            }
        }
    }

    backtrack(s, 0);
    return maxScore;
}
```

### 💡 Solution 3: Greedy with Recursive Function

```javascript
function getMaxScoreGreedyRecursive(s, x, y) {
    let maxScore = 0;

    function dfs(s, score) {
        let i = 0;
        let found = false;

        while (i < s.length - 1) {
            if (s[i] === 'a' && s[i + 1] === 'b') {
                found = true;
                dfs(s.slice(0, i) + s.slice(i + 2), score + x);
                i++;
            } else if (s[i] === 'b' && s[i + 1] === 'a') {
                found = true;
                dfs(s.slice(0, i) + s.slice(i + 2), score + y);
                i++;
            } else {
                i++;
            }
        }

        if (!found) {
            maxScore = Math.max(maxScore, score);
        }
    }

    dfs(s, 0);
    return maxScore;
}
```

### 💡 Solution 4: Method 4

```javascript
function maximumScore(s, pointsForAB, pointsForBA) {
    const length = s.length;
    let totalScore = 0;
    let charA = "a";
    let charB = "b";
    let pointsForABTemp = pointsForAB; // Temporary variable for swapping
    let pointsForBATemp = pointsForBA; // Temporary variable for swapping

    // Ensure that pointsForBA is always greater than or equal to pointsForAB
    if (pointsForBA > pointsForAB) {
        [charA, charB] = [charB, charA];
        [pointsForABTemp, pointsForBATemp] = [pointsForBATemp, pointsForABTemp];
    }

    let countA = 0; // Counts occurrences of 'a'
    let countB = 0; // Counts occurrences of 'b'

    for (let i = 0; i <= length; i++) {
        const currentChar = s[i];
        
        if (currentChar === charA) {
            countA++;
        } else if (currentChar === charB) {
            if (countA > 0) {
                totalScore += pointsForABTemp;
                countA--;
            } else {
                countB++;
            }
        } else {
            // If currentChar is neither 'a' nor 'b', resolve remaining counts
            totalScore += pointsForBATemp * Math.min(countA, countB);
            countA = countB = 0;
        }
    }
    
    return totalScore;
}
```