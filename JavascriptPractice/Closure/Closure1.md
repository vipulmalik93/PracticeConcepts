## What is a Closure?
A closure is created when an inner function accesses variables from its outer (enclosing) function, even after the outer function has finished executing.

###  Your Example:
```
function abc() {
    var b = 20;
    var test = 100;

    xyz();

    function xyz() {
        var c = 30;
        console.log(b); // Accessing 'b' from parent scope
    }
}

var a = 10;

abc();

```

### Behavior Explained:
1. xyz() is defined inside abc(), so it has access to b and test.
2. Inside xyz(), you're only using b, so the closure of xyz() only includes b.
3. The browser (e.g., Chrome DevTools) will show only the variables actually used from the outer scope inside the closure.

### Summary:
| Case                     | Variables in Closure |
| ------------------------ | -------------------- |
| Only `b` used in child   | `b`                  |
| Both `b` and `test` used | `b`, `test`          |
| None used                | (Maybe no closure)   |

*** NOTE: "Only those variables from parent come in closure which are actually used in child." ***