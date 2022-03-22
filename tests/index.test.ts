import { hasProfane, Behavior } from "../src";

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

test("profane with throw behaviour", () => {
  expect(() => hasProfane("muji", { behavior: "THROW_ERR" })).toThrowError();
});

test("profane with throw behaviour and custom error", () => {
  class CustomError extends Error {
    public readonly httpStatusCode: number;
    public readonly isOperational: boolean;

    constructor(
      message: string,
      httpStatusCode: number,
      isOperational: boolean = false
    ) {
      super(message);

      this.httpStatusCode = httpStatusCode;
      this.isOperational = isOperational;
    }
  }

  const error = new CustomError("sth went wrong", 400, true);

  expect(() => {
    hasProfane("muji", {
      behavior: "THROW_ERR",
      error,
    });
  }).toThrowError(error);
});
