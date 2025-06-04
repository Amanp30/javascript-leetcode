# Extract version numbers from strings

## 📝 Problem

In software development and project management, version numbers are crucial for tracking releases, updates, and changes. These version numbers often appear in various documents, release notes, or even in code comments. The format of these version numbers typically follows a pattern such as `v1.2.3`, where:

*   `v` is a common prefix indicating a version.
    
*   The version number consists of several numeric segments separated by dots.
    

**Objective:**

Develop a JavaScript function that extracts all version numbers from a given block of text. The function should be capable of identifying and standardizing version numbers that follow a specific pattern and return them as an array. The function needs to handle:

*   Version numbers prefixed with `v` (e.g., `v1.2.3`, `v10.11.12`).
    
*   Versions with multiple numeric segments (e.g., `v1.2`, `v2.3.4`).
    
*   Different formats of version numbers with consistent structure.
    

**Requirements:**

1.  **Pattern Matching:** The function should correctly identify version numbers prefixed with a lowercase `v`, followed by numeric segments separated by dots.
    
2.  **Output:** The function should return an array of version numbers extracted from the text. Each version number should be returned in the same format as it was found in the text.
    
3.  **Handling Edge Cases:** The function should handle common variations and ensure that no leading or trailing whitespace affects the result.


## 📌 Examples

### Example 1

**Input:** textString = "The software is available in versions v1.0.0, v2.3, and v10.5.2."  
**Output:** ["v1.0.0", "v2.3", "v10.5.2"]

### Example 2

**Input:** textString = "Please check the release notes for v3.4.5.6 and v12.1.0.
"  
**Output:** ["v3.4.5.6", "v12.1.0"]

---

## ✅ Solutions

### 💡 Solution 1: Extract version numbers from strings using regex

```javascript
function extractVersionNumbers(text) {
    // Define the regex pattern to match version numbers (e.g., v1.2.3)
    const versionRegex = /\bv\d+(\.\d+)+\b/g;

    // Find all matches in the text
    const matches = text.match(versionRegex);

    // Return matches, or an empty array if no matches are found
    return matches ? matches.map(version => version.trim()) : [];
}
```