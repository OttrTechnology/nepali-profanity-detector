import { sanitizeAccents } from "../../../src/utils";

test("Accent Sanity", () => {
  expect(
    sanitizeAccents(
      "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż"
    )
  ).toStrictEqual(
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz"
  );
});
