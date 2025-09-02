import { cn } from "@/shared/utils/cn";

describe("cn utility", () => {
  it("merges simple class strings", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("ignores falsy values and merges tailwind correctly", () => {
    expect(cn("p-2", false && "px-4", undefined, null as any, "p-4")).toBe(
      "p-4"
    );
  });

  it("supports conditional object syntax", () => {
    expect(cn("base", { active: true, hidden: false })).toBe("base active");
  });
});
