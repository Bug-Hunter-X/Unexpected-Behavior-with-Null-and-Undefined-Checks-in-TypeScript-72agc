# Unexpected Behavior with Null and Undefined Checks in TypeScript

This example demonstrates a potential issue when handling null and undefined values in TypeScript.  The `greet` function is designed to handle null input, but it doesn't explicitly check for `undefined`, leading to a runtime error.

## Bug

The `greet` function uses a type guard (`name === null`) to handle null values. However, it fails to consider the case where `name` might be `undefined`, resulting in a runtime error when an undefined value is passed.

## Solution

The solution involves adding an explicit check for `undefined` to the condition, either by using `name === null || name === undefined` or by employing optional chaining and nullish coalescing (`name ?? 'world'`).