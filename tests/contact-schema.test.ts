import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

describe("contactSchema", () => {
  it("accepts a valid payload", () => {
    const parsed = contactSchema.safeParse({
      name: "Alex",
      email: "alex@example.com",
      projectType: "growth",
      budget: "3to6",
      message: "We need a new marketing site for our clinic.",
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects invalid email and short message", () => {
    const parsed = contactSchema.safeParse({
      name: "A",
      email: "not-an-email",
      projectType: "launch",
      budget: "tbd",
      message: "hi",
    });
    expect(parsed.success).toBe(false);
  });
});
