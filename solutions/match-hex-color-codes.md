# Match hex color codes

## 📝 Problem

Alia is a web developer working on a project that involves analyzing stylesheets and design documents. She needs to extract hex color codes from various text sources, such as CSS files and HTML documents. The color codes can appear in different formats:

*   Full hex format: `#RRGGBB`
    
*   Short hex format: `#RGB`
    

**Objective:**

Develop a JavaScript function that helps Alia efficiently extract and standardize hex color codes from a block of text. The function should handle both full and short formats and return a consistent array of color codes.


## 📌 Examples

### Example 1

**Input:** string = "The colors used are #ff5733 for the header, #33cc99 for the footer, and #abc for the background."  
**Output:** ["#ff5733", "#33cc99", "#aabbcc"]

### Example 2

**Input:** string = " The new color scheme includes #f00 for alerts, #0f0 for success, and #00f for links. Avoid using invalid colors like #1234567 or #xyz. Ensure you use the correct format."  
**Output:** ["#f00", "#0f0", "#00f"]

---

## ✅ Solutions

### 💡 Solution 1: Match hex color codes using regex

```javascript
function extractHexColorCodes(text) {
    // Define regex patterns for both full and short hex color codes
    const hexColorRegex = /#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;

    // Find all matches in the text
    const matches = text.match(hexColorRegex);

    // If matches are found, expand short format codes to full format
    if (matches) {
        return matches.map(color => {
            // Expand short format #RGB to #RRGGBB
            if (color.length === 4) {
                return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
            }
            return color;
        });
    }

    // Return an empty array if no matches are found
    return [];
}
```