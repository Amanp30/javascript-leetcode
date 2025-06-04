# Extract phone numbers from a block of text

## 📝 Problem

Alia is a web developer working on a project that involves extracting phone numbers from blocks of text. She needs a robust and efficient solution to scrape phone numbers that can handle various formats, including international and local numbers with different separators and optional extensions.

**Objective:**

Write a JavaScript function that extracts all phone numbers from a given block of text. The function should handle multiple formats, such as:

*   Local numbers with or without area codes
    
*   International numbers with optional country codes
    
*   Numbers separated by spaces, dashes, dots, or parentheses
    
*   Optional extensions (e.g., "ext. 101" or "x101")
    

The function should return an array of phone numbers found in the text, with any leading or trailing whitespace removed.


## 📌 Examples

### Example 1

**Input:** text = " You can reach us at (555) 123-4567, or at 555.987.6543. 
    For international inquiries, call +1 555 555 5555. 
    Fax numbers are not accepted at 555-5555 or 5555555."  
**Output:** ["(555) 123-4567", "555.987.6543", "+1 555 555 5555", "555-5555", "5555555"]

### Example 2

**Input:** text = "Contact us at (123) 456-7890, 123-456-7890, or +1 123 456 7890.
You can also reach us at 123.456.7890 or 1234567890."  
**Output:** [ "(123) 456-7890", "123-456-7890", "+1 123 456 7890", "123.456.7890", "1234567890"]

---

## ✅ Solutions

### 💡 Solution 1: Extract Phone Numbers Regex

```javascript
function extractPhoneNumbers(text) {
    // Define the regex pattern to match various phone number formats
    const phoneRegex = /(?:\+?\d{1,4}\s*)?[\-\.\(\s]*\d{1,5}[\-\.\)\s]*\d{1,4}[\-\.\s]*\d{1,4}[\-\.\s]*\d{1,9}/g;

    // Find all matches in the text
    const matches = text.match(phoneRegex);

    // Return matches, or an empty array if no matches are found
    return matches ? matches.map(num => num.trim()) : [];
}
```