# Isomorphic Strings

## 📝 Problem

Imagine you have two strings, `s` and `t`, and you want to know if you can make them identical by replacing each character in `s` with a character in `t`. The catch is that each character in `s` must map to a single character in `t`, and no two characters in `s` can map to the same character in `t`. Additionally, a character in `s` can map to itself.


## 📌 Examples

### Example 1

**Input:** s = "egg", t = "add"  
**Output:** true

### Example 2

**Input:** s = "foo", t = "bar"  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Basic Hash Map Approach

```javascript
function areIsomorphic_BasicHashMap(s, t) {
    if (s.length !== t.length) return false;

    const mapSToT = {};
    const mapTToS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapSToT[charS] === undefined) {
            mapSToT[charS] = charT;
        } else if (mapSToT[charS] !== charT) {
            return false;
        }

        if (mapTToS[charT] === undefined) {
            mapTToS[charT] = charS;
        } else if (mapTToS[charT] !== charS) {
            return false;
        }
    }

    return true;
}
```

### 💡 Solution 2: Single Hash Map Approach

```javascript
function areIsomorphic_SingleHashMap(s, t) {
    if (s.length !== t.length) return false;

    const map = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (map[charS] === undefined) {
            map[charS] = charT;
        } else if (map[charS] !== charT) {
            return false;
        }
    }

    const reversedMap = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (reversedMap[charT] === undefined) {
            reversedMap[charT] = charS;
        } else if (reversedMap[charT] !== charS) {
            return false;
        }
    }

    return true;
}
```

### 💡 Solution 3: Two Pass Hash Map Approach

```javascript
function areIsomorphic_TwoPassHashMap(s, t) {
    if (s.length !== t.length) return false;

    const mapSToT = {};
    const mapTToS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapSToT[charS] !== undefined && mapSToT[charS] !== charT) {
            return false;
        }
        if (mapTToS[charT] !== undefined && mapTToS[charT] !== charS) {
            return false;
        }

        mapSToT[charS] = charT;
        mapTToS[charT] = charS;
    }

    return true;
}
```

### 💡 Solution 4: Character Mapping Arrays

```javascript
function areIsomorphic_CharArrays(s, t) {
    if (s.length !== t.length) return false;

    const mapS = Array(256).fill(-1);
    const mapT = Array(256).fill(-1);

    for (let i = 0; i < s.length; i++) {
        const charS = s.charCodeAt(i);
        const charT = t.charCodeAt(i);

        if (mapS[charS] === -1 && mapT[charT] === -1) {
            mapS[charS] = charT;
            mapT[charT] = charS;
        } else if (mapS[charS] !== charT || mapT[charT] !== charS) {
            return false;
        }
    }

    return true;
}
```

### 💡 Solution 5: One Pass Hash Map

```javascript
function areIsomorphic_OnePass(s, t) {
    if (s.length !== t.length) return false;

    const sToT = {};
    const tToS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((sToT[charS] && sToT[charS] !== charT) ||
            (tToS[charT] && tToS[charT] !== charS)) {
            return false;
        }

        sToT[charS] = charT;
        tToS[charT] = charS;
    }

    return true;
}
```

### 💡 Solution 6: Array Index Mapping

```javascript
function areIsomorphic_ArrayIndexMapping(s, t) {
    if (s.length !== t.length) return false;

    const sMap = Array(256).fill(-1);
    const tMap = Array(256).fill(-1);

    for (let i = 0; i < s.length; i++) {
        const sIndex = s.charCodeAt(i);
        const tIndex = t.charCodeAt(i);

        if (sMap[sIndex] === -1 && tMap[tIndex] === -1) {
            sMap[sIndex] = tIndex;
            tMap[tIndex] = sIndex;
        } else if (sMap[sIndex] !== tIndex || tMap[tIndex] !== sIndex) {
            return false;
        }
    }

    return true;
}
```

### 💡 Solution 7: Hash Map with String Comparison

```javascript
function areIsomorphic_HashMapStringComparison(s, t) {
    if (s.length !== t.length) return false;

    const sToT = new Map();
    const tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (sToT.get(charS) !== undefined && sToT.get(charS) !== charT) {
            return false;
        }
        if (tToS.get(charT) !== undefined && tToS.get(charT) !== charS) {
            return false;
        }

        sToT.set(charS, charT);
        tToS.set(charT, charS);
    }

    return true;
}
```

### 💡 Solution 8: Bi-directional Hash Map Approach

```javascript
function areIsomorphic_BiDirectionalHashMap(s, t) {
    if (s.length !== t.length) return false;

    const mapSToT = {};
    const mapTToS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapSToT[charS] === undefined && mapTToS[charT] === undefined) {
            mapSToT[charS] = charT;
            mapTToS[charT] = charS;
        } else if (mapSToT[charS] !== charT || mapTToS[charT] !== charS) {
            return false;
        }
    }

    return true;
}
```

### 💡 Solution 9: Character Mapping with Set

```javascript
function areIsomorphic_Set(s, t) {
    if (s.length !== t.length) return false;

    const mapSToT = new Map();
    const mapTToS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapSToT.has(charS) && mapSToT.get(charS) !== charT) return false;
        if (mapTToS.has(charT) && mapTToS.get(charT) !== charS) return false;

        mapSToT.set(charS, charT);
        mapTToS.set(charT, charS);
    }

    return true;
}
```