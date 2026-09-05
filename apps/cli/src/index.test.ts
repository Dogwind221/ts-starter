import { sum } from "@ts-starter/lib";
import { expect, it } from "vitest";

it("works as a CLI entrypoint", () => {
  expect(sum([1, 2, 3])).toBe(6);
});
