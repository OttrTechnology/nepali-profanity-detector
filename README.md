# nepali-profanity-detector
Detect Nepali profane words with configurable options.

## Install
```
npm i nepali-profanity-detector
```

## Usage
```ts
import { hasProfane } from "nepali-profanity-detector";

console.log(hasProfane("Oi muji")); // true
console.log(hasProfane("Oi mUjI")); // true
console.log(hasProfane("Oi yaar")); // false

// detects accent by default
console.log(hasProfane("Oi ḿüjį")); // true

// change behavior to throw error
hasProfane("Oi muji", { behavior: "THROW_ERR" }); // throws new Error("Nepali profanity detected")

// change behavior to throw custom error
hasProfane("Oi muji", {
  behavior: "THROW_ERR",
  error: new AppError("My Custom Error", 400),
}); // throws new new AppError("My Custom Error", 400)

```

### `options`
| Key | Description | Default |
| --- | --- | --- |
| `includeAccents` | Allows accents like `ä` to be interpreted as `a`. | `true` |
| `trimSymbols` | Removes any non-alphanumeric characters. For eg. `m.u.j.i` will be interpreted as `muji`. | `true` |
| `behavior` | Change whether the function should return boolean or throw error if profanity is detected.  | `Behavior.BOOLEAN` |
| `error` | Pass custom error to be thrown **IF** behavior is set to `"THROW_ERR"` or `Behavior.THROW_ERR` | `new Error("Nepali profanity detected")` |

## Roadmap
- [x] Handle Accents
- [x] Throw Error Behaviour Option
- [x] Usage Documentation with examples
- [ ] @use JSDoc
- [ ] Whitelisting support
- [ ] Further Blacklisting support
- [ ] Automate Code Linting
- [ ] Test Coverage
- [ ] Handle Leetspeaks