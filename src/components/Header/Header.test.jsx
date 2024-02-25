import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });
  afterEach(() => {
    cleanup();
  });
  it("displays a heading with appropriate text", () => {
    const elem = screen.getByRole("heading");
    expect(elem).toBeInTheDocument();
    expect(elem.textContent).toBe("Welcome To Pokemon Mine");
  });
});
