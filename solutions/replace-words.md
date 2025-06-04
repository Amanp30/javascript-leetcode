# Replace Words

## 📝 Problem

In English, a root can be followed by some other word to form a longer word, which we call a derivative. For instance, the root "help" followed by "ful" forms the derivative "helpful".

Given a dictionary of roots and a sentence of words separated by spaces, your task is to replace all derivatives in the sentence with their corresponding root. If a derivative can be replaced by more than one root, choose the root with the shortest length.

Return the modified sentence after performing all replacements.


## 📌 Examples

### Example 1

**Input:** dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"  
**Output:** "the cat was rat by the bat"

### Example 2

**Input:** dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"  
**Output:** "a a b c"

---

## ✅ Solutions

### 💡 Solution 1: Replace words using Trie Approach

```javascript
function replaceWordsTrie(dictionary, sentence) {
    const words = sentence.split(' '); // Split sentence into words
    const trie = new Trie();

    // Insert each root into the trie
    for (const root of dictionary) {
        trie.insert(root);
    }

    // Replace words in the sentence with roots
    const result = words.map(word => trie.contains(word)).join(' ');

    return result;
}

 class Node {
    constructor() {
        this.links = new Array(26).fill(null);
        this.flag = false;
    }

    add(char, node) {
        this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
    }

    get(char) {
        return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    contains(char) {
        return this.links[char.charCodeAt(0) - 'a'.charCodeAt(0)] !== null;
    }

    setEnd() {
        this.flag = true;
    }

    getEnd() {
        return this.flag;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.contains(char)) {
                node.add(char, new Node());
            }
            node = node.get(char);
        }
        node.setEnd();
    }

    contains(word) {
        let node = this.root;
        let ans = "";
        for (const char of word) {
            if (!node.contains(char)) {
                return word; // Return the original word if no prefix is found
            } else {
                ans += char;
                node = node.get(char);
                if (node.getEnd()) {
                    return ans; // Return the root if found
                }
            }
        }
        return word; // Return the original word if no root found
    }
}
```

### 💡 Solution 2: Using HashTable

```javascript
function replaceWordsHashTable(dictionary, sentence) {
    const roots = new Set(dictionary);
    let words = sentence.split(' '); // Split the sentence into words
    let ans = '';

    for (let word of words) {
        let str = '';
        let flag = false;

        for (let char of word) {
            str += char;
            if (roots.has(str)) {
                flag = true; // Found a root
                break;
            }
        }

        ans += flag ? str : word; // Use the root or the original word
        ans += ' '; // Add a space
    }

    return ans.trim(); // Remove the trailing space
}
```

### 💡 Solution 3: Replace words using sorting

```javascript
function replaceWords(dictionary, sentence) {
    const rootSet = new Set(dictionary); // Create a set for efficient root lookups
    sentence += " "; // Add a space to handle the last word
    let s = ""; // To build the current word
    let res = ""; // To accumulate the result

    for (let i = 0; i < sentence.length; i++) {
        let flag = false;

        if (sentence[i] === ' ') {
            // When we reach a space, we check the current word
            for (let root of rootSet) {
                if (root === s.substr(0, root.length)) {
                    flag = true;
                    res += root + " "; // Add the root to the result
                    break;
                }
            }
            if (!flag) {
                res += s + " "; // Add the original word if no root matched
            }
            s = ""; // Reset the current word
        } else {
            s += sentence[i]; // Build the current word
        }
    }

    return res.trim(); // Trim any trailing spaces and return the result
}
```

### 💡 Solution 4: Replace Words using DFS Depth first search

```javascript
function replaceWordsDFS(dictionary, sentence) {
    class Node {
        constructor() {
            this.children = {}; // Object to hold child nodes
            this.isWord = false; // Flag to indicate if this node is the end of a word
        }
    }

    // Build the Trie from the dictionary
    const buildTrie = (dictionary) => {
        const root = new Node();
        for (const word of dictionary) {
            let node = root;
            for (const char of word) {
                if (!(char in node.children)) {
                    node.children[char] = new Node();
                }
                node = node.children[char];
            }
            node.isWord = true; // Mark the end of a word
        }
        return root;
    };

    // Replace a word using the Trie
    const replaceWord = (word, root) => {
        let maxIdx = word.length; // Start with the maximum index being the length of the word

        const dfs = (node, idx) => {
            if (idx >= word.length || !(word[idx] in node.children)) {
                return;
            }
            const nextNode = node.children[word[idx]];
            if (nextNode.isWord) {
                maxIdx = idx + 1; // Update maxIdx if a root is found
                return;
            }
            dfs(nextNode, idx + 1); // Continue DFS with the next character
        };

        dfs(root, 0); // Start DFS from the root
        return word.slice(0, maxIdx); // Return the root or the original word
    };

    const root = buildTrie(dictionary); // Build the Trie
    return sentence.split(' ')
                   .map(word => replaceWord(word, root)) // Replace words
                   .join(' '); // Join them back into a sentence
}
```