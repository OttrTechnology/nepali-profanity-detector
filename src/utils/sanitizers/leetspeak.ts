import chunk from "lodash/chunk";
import leetspeaks from "./leetspeaks.json";

const unescapeLeetspeak = (leetspeak: string) => {
  let unescaped = leetspeak;

  if (leetspeak.at(-1) === "\\") unescaped = unescaped + "\\";

  if (
    leetspeak.at(-1) === "(" ||
    leetspeak.at(-1) === ")" ||
    leetspeak.at(-1) === "[" ||
    leetspeak.at(-1) === "]"
  ) {
    unescaped = unescaped.slice(0, -1) + "\\" + unescaped.slice(-1);

    if (
      unescaped.at(0) === "[" ||
      unescaped.at(0) === ")" ||
      unescaped.at(0) === "("
    )
      unescaped = "\\" + unescaped;
  } else if (
    leetspeak.at(0) === "?" ||
    leetspeak.at(0) === "(" ||
    leetspeak.at(0) === ")" ||
    leetspeak.at(0) === "[" ||
    leetspeak.at(0) === "]"
  )
    unescaped = "\\" + unescaped;

  return unescaped;
};

export const sanitizeLeetspeak = (text: string) => {
  leetspeaks.map((leetspeak) => {
    const key = Object.keys(leetspeak)[0];
    // text = text.replace(
    //   new RegExp(unescapeLeetspeak(key), "g"),
    //   // @ts-ignore
    //   leetspeak[key]
    // );

    console.log(
      text.replace(
        new RegExp(unescapeLeetspeak(key), "g"),
        // @ts-ignore
        leetspeak[key]
      )
    );
  });

  return text;
};
