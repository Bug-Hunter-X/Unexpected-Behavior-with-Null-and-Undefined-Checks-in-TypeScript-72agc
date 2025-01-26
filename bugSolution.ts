function greet(name: string | null | undefined): string {
  if (name === null || name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(undefined)); // Output: Hello, world!

//Alternative solution using optional chaining and nullish coalescing
function greet2(name: string | null | undefined): string {
    return `Hello, ${name ?? 'world'}!`;
}
console.log(greet2(null)); // Output: Hello, world!
console.log(greet2("Alice")); // Output: Hello, Alice!
console.log(greet2(undefined)); // Output: Hello, world!