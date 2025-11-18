// Hardcoded credentials (Security issue)
const PASSWORD = "123456";
const SECRET_KEY = "mysecret";

// Unused variable (Maintainability)
let unusedVar = 99;

// Magic number, bad naming, var keyword
let x = 42;

// Duplicate function (Code smell)

// Too many parameters (Maintainability)
function calculate(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

// Shadowing built-in module (Security + maintainability)
import fs from "fs"; // Should use node:fs

// Unsafe eval (Security)
function run(command) {
  eval(command); // Security hotspot
}

// Unhandled Promise + async issues
async function fetchData() {
  const res = fetch("https://example.com"); // Missing await
  return res.data; // res is promise → Possible bug
}

// Cognitive complexity (terrible nested code)
function checkNumber(n) {
    if (n > 0) {
        if (n > 10) {
            if (n > 20) {
                if (n > 30) {
                    console.log("Very big");
                }
            }
        }
    }
}

// Missing error handling
function riskyOperation() {
    JSON.parse("not json"); // Causes exception, no try/catch
}

// Inconsistent return type
function getValue(flag) {
  if (flag) return 123;
  return "wrong type";
}

// Bad equality operator
if (x == "42") { // Should be ===
    console.log("Bad comparison");
}

// Long line (style issue)
const longString = "This is a very very very long string that should exceed typical line length and cause a linter warning because it is way too long to read easily and violates multiple style and maintainability rules.";

// Dead code
if (false) {
  console.log("This will never run");
}

// Callback hell
function doStuff(cb) {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                cb();
            }, 100);
        }, 100);
    }, 100);
}

doStuff(() => console.log("Callback hell finished"));

if(x) return


