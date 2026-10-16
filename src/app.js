export function greet(name = "World") {
  if (typeof name !== "string" || name.trim() === "") {
    throw new TypeError("Name must be a non-empty string");
  }

  return `Hello, ${name.trim()}!`;
}
