import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App.js";

describe("App", () => {
  it("renders the greeting", () => {
    render(<App />);
    expect(screen.getByText("Hello, world!")).toBeDefined();
  });
});
