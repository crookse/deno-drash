/**
 * For testing the view resource (Response.render) when
 * template_engine is set to use
 */

import members from "../tests/members.ts";
import serverTwo from "./app_server_two.ts";
serverTwo.run({
  hostname: "localhost",
  port: 9999
});

members.test("ViewResource - Template Engine", async () => {
  let response = await members.fetch.get(
    "http://localhost:9999/view?data=true&file=/template_engine.html",
  );
  members.assert.equals(
    await response.text(),
    "<body>     <h1>Hello Drash</h1> </body>",
  );
});

await Deno.runTests();

serverTwo.close();
