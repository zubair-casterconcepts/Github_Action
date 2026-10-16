import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/app.js";

test("greets a supplied name", () => {
  assert.equal(greet("Ali"), "Hello, Ali!");
});

test("uses World as the default name", () => {
  assert.equal(greet(), "Hello, World!");
});

test("rejects an empty name", () => {
  assert.throws(() => greet(" "), TypeError);
});
