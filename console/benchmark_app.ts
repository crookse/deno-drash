import { Drash } from "../mod.ts";

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    this.response.body = "Hello World!";
    return this.response;
  }
}

const server = new Drash.Http.Server({
  resources: [HomeResource],
});

server.run({
  hostname: "0.0.0.0",
  port: 1447,
});

console.log(`App running at http://${server.hostname}:${server.port}.`);
