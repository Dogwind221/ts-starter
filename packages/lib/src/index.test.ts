import { expect, it } from "vitest";
import { add, greet, sum } from "./index.js";

it("greets a name", () => {
  expect(greet("world")).toBe("Hello, world!");
});

it("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

it("sums a list", () => {
  expect(sum([1, 2, 3, 4])).toBe(10);
});
