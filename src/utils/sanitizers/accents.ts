export const sanitizeAccents = (text: string) => {
  const FROM =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż";
  const TO =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz";

  const specialCharReg = new RegExp(FROM.split("").join("|"), "g");

  return text.replace(specialCharReg, (character) =>
    TO.charAt(FROM.indexOf(character))
  );
};
