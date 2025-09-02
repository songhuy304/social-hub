import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/button";

describe("Button component", () => {
  it("renders default content", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("applies variant and size", () => {
    render(
      <Button variant="secondary" size="lg">
        Submit
      </Button>
    );
    const btn = screen.getByRole("button", { name: /submit/i });
    expect(btn.className).toMatch(/bg-secondary/);
    expect(btn.className).toMatch(/h-10/);
  });

  it("shows loading spinner and is disabled when loading", async () => {
    render(<Button loading>Loading</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    const spinner = btn.querySelector("svg");
    expect(spinner).toBeTruthy();
  });

  it('does not render children when size="icon" and loading', () => {
    render(
      <Button size="icon" loading>
        Icon
      </Button>
    );
    const btn = screen.getByRole("button");
    expect(btn.textContent).toBe("");
  });

  it("calls onClick when clicked and not loading", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Hit</Button>);
    await user.click(screen.getByRole("button", { name: /hit/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
