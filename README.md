# JavaScript Null Check Error

This repository demonstrates a common error in JavaScript: attempting to access the length property of a null or undefined value.  This leads to a TypeError.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a solution that handles the null case explicitly before trying to access the length property.

## Bug

The bug is in the `foo` function where it tries to access `x.length` without checking if `x` is null or undefined. 

## Solution

The solution adds a check for `x` being null before attempting to access `x.length`. If `x` is null, the function returns 0; otherwise, it proceeds as normal.