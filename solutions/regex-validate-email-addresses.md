# Validate Email Address

## 📝 Problem

Alia is working on a web application that requires users to input their email addresses. To ensure that these email addresses are correctly formatted and likely valid, she needs a function that can accurately determine if an email address is valid according to common standards.

Requirements
------------

1.  **Input**: A string representing an email address.
    
2.  **Output**: A boolean value indicating whether the email address is valid
    

Email Address **Validity Criteria**:
------------------------------------

*   The email address must follow the basic structure of `localpart@domain.tld`.
    
*   The `localpart` (the part before `@`) can contain alphanumeric characters and some special characters like `.` (dot), `_` (underscore), `%` (percent), `+` (plus), and `-` (hyphen).
    
*   The `domain` (the part after `@`) can include alphanumeric characters, dots, and hyphens.
    
*   The `tld` (top-level domain) must be at least two characters long and consist of alphabetic characters.


## 📌 Examples

### Example 1

**Input:** password = "example@example.com"  
**Output:** true

### Example 2

**Input:** password = "invalid-email"  
**Output:** false

### Example 3

**Input:** password = "user@domain.co"  
**Output:** true

### Example 4

**Input:** password = "user@domain.c"  
**Output:** false

---

## ✅ Solutions

### 💡 Solution 1: Email Address Validation using Regular Expressions

```javascript
function isValidEmail(email) {
    // Regex pattern for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Test the email against the regex pattern
    return emailRegex.test(email);
}
```