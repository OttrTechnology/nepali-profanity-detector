import { hasProfane } from "../src";

test("simple profane word", () => {
  expect(hasProfane("muji")).toBe(true);
});

test("profane with UPPERCASE", () => {
  expect(hasProfane("MUJI")).toBe(true);
});

test("simple whitelisted word", () => {
  expect(hasProfane("muji store")).toBe(false);
});

test("profane with accents", () => {
  expect(hasProfane("ḿüjį")).toBe(true);
});