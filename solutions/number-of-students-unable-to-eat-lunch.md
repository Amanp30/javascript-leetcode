# Number of Students Unable to Eat Lunch

## 📝 Problem

In a school cafeteria, students line up to get their lunch, which consists of two types of sandwiches: circular and square. The sandwiches are stacked in a specific order, and each student has a preference for either type. The sandwiches are served in a Last In, First Out (LIFO) manner, meaning the top sandwich in the stack is served first.

Here's how the process works:

*   Students queue up in line, and each has a preference for either circular or square sandwiches.
    
*   At each step, the student at the front of the queue checks the sandwich on top of the stack.
    
    *   If the sandwich matches their preference, they take it and leave the queue.
        
    *   If not, they move to the end of the queue, leaving the sandwich on the stack.
        
*   This process continues until no more sandwiches are available or all students have been served.
    

The goal is to determine how many students will end up without their preferred sandwich.

You are given two integer arrays:

1.  `students`: where each element represents a student's sandwich preference (0 for circular and 1 for square).
    
2.  `sandwiches`: where each element represents the type of sandwich on the stack (0 for circular and 1 for square).


## 📌 Examples

### Example 1

**Input:** students = [1,1,0,0], sandwiches = [0,1,0,1]  
**Output:** 0

### Example 2

**Input:** students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]  
**Output:** 3

---

## ✅ Solutions

### 💡 Solution 1: Greedy Matching

```javascript
function countStudentsUnableToEatGreedyMatching(students, sandwiches) {
    let studentPrefs = { 0: 0, 1: 0 };
    let sandwichPrefs = { 0: 0, 1: 0 };

    for (let student of students) studentPrefs[student]++;
    for (let sandwich of sandwiches) sandwichPrefs[sandwich]++;

    for (let i = 0; i < sandwiches.length; i++) {
        if (studentPrefs[sandwiches[i]] > 0) {
            studentPrefs[sandwiches[i]]--;
        } else {
            break;
        }
    }
    return Object.values(studentPrefs).reduce((acc, val) => acc + val, 0);
}
```

### 💡 Solution 2: Rotate and Count

```javascript
function countStudentsUnableToEatRotateAndCount(students, sandwiches) {
    let queue = students.slice();
    let stack = sandwiches.slice();
    let attempts = 0;

    while (attempts < queue.length) {
        if (queue[0] === stack[0]) {
            queue.shift();
            stack.shift();
            attempts = 0;
        } else {
            queue.push(queue.shift());
            attempts++;
        }
    }
    return queue.length;
}
```

### 💡 Solution 3: Simulation with Max Attempts

```javascript
function countStudentsUnableToEatMaxAttempts(students, sandwiches) {
    let queue = students.slice();
    let stack = sandwiches.slice();
    let maxAttempts = queue.length;

    while (maxAttempts > 0) {
        if (queue[0] === stack[0]) {
            queue.shift();
            stack.shift();
            maxAttempts = queue.length;
        } else {
            queue.push(queue.shift());
            maxAttempts--;
        }
    }
    return queue.length;
}
```

### 💡 Solution 4: Cycle Detection

```javascript
function countStudentsUnableToEatCycleDetection(students, sandwiches) {
    let queue = students.slice();
    let stack = sandwiches.slice();
    let seen = new Set();
    
    while (queue.length > 0) {
        if (seen.has(queue.join())) break;
        seen.add(queue.join());

        if (queue[0] === stack[0]) {
            queue.shift();
            stack.shift();
        } else {
            queue.push(queue.shift());
        }
    }
    return queue.length;
}
```