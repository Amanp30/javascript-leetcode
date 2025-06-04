# Time Needed to Buy Tickets

## 📝 Problem

In a bustling queue for tickets, there are `n` people standing in line, each holding a different number of tickets they wish to purchase. The queue operates in a sequential manner where the 0th person is at the front and the (n - 1)th person is at the end.

Each person can only buy one ticket per second and, if they still have tickets left to buy, they return to the end of the line instantly. Once a person has bought all their tickets, they leave the queue.

Given an array `tickets` where `tickets[i]` represents the number of tickets the ith person wants to buy, and an integer `k` indicating the position of a specific person in the queue (0-indexed), your task is to determine how much time it will take for the person at position `k` to finish buying all their tickets.


## 📌 Examples

### Example 1

**Input:** tickets = [2,3,2], k = 2  
**Output:** 6

### Example 2

**Input:** tickets = [5,1,1,1], k = 0  
**Output:** 8

---

## ✅ Solutions

### 💡 Solution 1: Brute Force Approach

```javascript
function timeRequiredToBuyBruteForce(tickets, k) {
    let time = 0;
    
    while (tickets[k] > 0) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[k] === 0) break;
            if (tickets[i] > 0) {
                tickets[i]--;
                time++;
            }
        }
    }
    
    return time;
}
```

### 💡 Solution 2: Direct Time Calculation with Conditional Adjustments

```javascript
function timeRequiredToBuyConditionalArgs(tickets, k) {
    let res = 0;
    let target = tickets[k];
    
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            res += Math.min(tickets[i], target);
        } else {
            if (target <= tickets[i]) {
                res += Math.min(tickets[i], target) - 1;
            } else {
                res += Math.min(tickets[i], target);
            }
        }
    }
    
    return res;
}
```

### 💡 Solution 3: Circular Queue Simulation for Ticket Purchasing

```javascript
function timeRequiredToBuyCircularQueue(tickets, k) {
    let sec = 0;
    let i = 0;

    while (tickets[k] > 0) {
        if (i === k) {
            tickets[i]--;
            sec++;
            i++;
        } else if (i < tickets.length && tickets[i] === 0 && i !== k) {
            i++;
            continue;
        } else if (tickets[k] > 0 && i < tickets.length && tickets[i] > 0 && i !== k) {
            tickets[i]--;
            sec++;
            i++;
        }

        if (i === tickets.length) {
            i = 0;
        }
    }

    return sec;
}
```

### 💡 Solution 4: Circular Queue Simulation with Index Reset

```javascript
function timeRequiredToBuyCircularResetIndex(tickets, k) {
    let time = 0;
    let i = 0;

    while (tickets[k] > 0) {
        if (tickets[i] > 0) {
            tickets[i]--;
            time++;
        }
        
        i++;
        if (i === tickets.length) {
            i = 0;
        }
    }

    return time;
}
```

### 💡 Solution 5: Queue - Index & Value Appending

```javascript
function timeRequiredToBuyIndexAppending(tickets, k) {
    const queue = [];
    for (let i = 0; i < tickets.length; i++) {
        queue.push([i, tickets[i]]);
    }

    let timeTaken = 0;

    while (queue.length > 0) {
        const [index, numTickets] = queue.shift();
        
        if (numTickets > 0) {
            queue.push([index, numTickets - 1]);
            timeTaken++;
        }
        
        if (index === k && numTickets - 1 === 0) {
            break;
        }
    }

    return timeTaken;
}
```

### 💡 Solution 6: Simulation with

```javascript
function timeRequiredToBuySequentialEarlyTermination (tickets, k) {
    let count = 0;

    while (tickets[k] > 0) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[k] === 0) break;
            if (tickets[i] === 0) continue;
            tickets[i]--;
            count++;
        }
    }

    return count;
}
```

### 💡 Solution 7: Optimized Time Calculation with Conditional Adjustments

```javascript
function timeRequiredToBuyConditionalAdjustments (tickets, k) {
    let time = 0;
    const n = tickets.length;
    const tk = tickets[k];

    for (let i = 0; i < n; i++) {
        if (tickets[i] >= tk) {
            if (i > k) {
                time += tk - 1;
            } else {
                time += tk;
            }
        } else {
            time += tickets[i];
        }
        if (tickets[k] === 0) break;
    }

    return time;
}
```

### 💡 Solution 8: Queue-Based Simulation with Ticket Decrement"

```javascript
function timeRequiredToBuyTicketDecrement (tickets, k) {
    const queue = [];
    
    // Initialize the queue with each person's ticket count and their index
    for (let i = 0; i < tickets.length; i++) {
        queue.push([tickets[i], i]);
    }
    
    let timeTaken = 0;
    
    while (queue.length > 0) {
        timeTaken++;
        const [ticketCount, index] = queue.shift();
        
        if (ticketCount - 1 <= 0 && index === k) {
            return timeTaken;
        }
        
        if (ticketCount - 1 > 0) {
            queue.push([ticketCount - 1, index]);
        }
    }
    
    return -1;  // This line will never be reached with the given problem constraints
}
```