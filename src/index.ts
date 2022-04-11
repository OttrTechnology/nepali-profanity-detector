import internalWhitelist from "./whitelist.json";
import profanities from "./profanity.json";
import { 
  sanitizeAccents, 
  // sanitizeLeetspeak
 } from "./utils";

export enum Behavior {
  THROW_ERR = "THROW_ERR",
  BOOLEAN = "BOOLEAN",
}

type BehaviorType = `${Behavior}`;

interface Options {
  includeAccents?: boolean;
  // includeLeetspeak?: boolean;
  trimSymbols?: boolean;
  behavior?: Behavior | BehaviorType;
  error?: Error;
  whitelist?: string[];
  blacklist?: string[];
}

const defaultOptions = {
  includeAccents: true,
  // includeLeetspeak: false,
  trimSymbols: true,
  behavior: Behavior.BOOLEAN,
  error: new Error("Nepali profanity detected"),
  whitelist: [],
  blacklist: []
};

export const hasProfane = (text: string, options?: Options): boolean => {
  const {
    includeAccents,
    // includeLeetspeak,
    trimSymbols,
    behavior,
    error,
    whitelist,
    blacklist
  } = Object.assign(defaultOptions, options);

  let interimText = text.toLowerCase();

  if (internalWhitelist.length) {
    internalWhitelist.concat(whitelist).forEach((whitelistedValue) => {
      interimText = interimText.replace(
        new RegExp(whitelistedValue, "gi"),
        "whitelisted"
      );
    });
  }

  if (includeAccents) interimText = sanitizeAccents(interimText);

  // if (includeLeetspeak) interimText = sanitizeLeetspeak(interimText);

  if (trimSymbols) interimText = interimText.replace(/[\W_]+/g, "");

  let hasProfane = false;

  hasProfane = profanities.concat(blacklist).some(({ value }) =>
    new RegExp(value, "gi").test(interimText)
  );

  if (behavior === Behavior.THROW_ERR) throw error;

  return hasProfane;
};
