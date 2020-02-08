import members from "../../members.ts";

members.test("-", () => {
  console.log("http_exception.ts");
});

members.test("Exceptions.NameCollisionException('Error')", () => {
  let actual = new members.Drash.Exceptions.NameCollisionException("Error");
  members.assert.equal(actual.message, "Error");
});
