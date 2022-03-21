import whitelist from "./whitelist.json";
import { sanitizeAccents, sanitizeLeetspeak } from "./utils";

enum Behavior {
  THROW_CUSTOM_ERR = "THROW_CUSTOM_ERR",
  BOOLEAN = "BOOLEAN",
}

interface Options {
  includeAccents?: boolean;
  includeLeetspeak?: boolean;
  trimSymbols?: boolean;
  behavior?: Behavior;
}

const defaultOptions = {
  includeAccents: true,
  includeLeetspeak: false,
  trimSymbols: true,
  behavior: Behavior.BOOLEAN,
};

export const hasProfane = (text: string, options?: Options): boolean => {
  const { includeAccents, includeLeetspeak, trimSymbols, behavior } =
    Object.assign(defaultOptions, options);

  let interimText = text.toLowerCase();

  if (whitelist.length)
    whitelist.forEach((whitelistedValue) => {
      interimText = interimText.replace(
        new RegExp(whitelistedValue, "gi"),
        "whitelisted"
      );
    });

  if (includeAccents) interimText = sanitizeAccents(interimText);

  if (includeLeetspeak) interimText = sanitizeLeetspeak(interimText);

  if (trimSymbols) interimText = interimText.replace(/[\W_]+/g, "");
  
  let hasProfane = false;

  

  return hasProfane;
};

hasProfane("muji store", { includeLeetspeak: true });
