<p align="center">
  <img height="200" src="https://drash.land/public/assets/img/drash.svg" alt="Drash logo">
  <h1 align="center">Drash</h1>
</p>
<p align="center">A REST microframework for <a href="https://github.com/denoland/deno">Deno</a> with zero dependencies.</p>
<p align="center">
  <a href="https://github.com/drashland/deno-drash/releases">
    <img src="https://img.shields.io/github/release/drashland/deno-drash.svg?color=bright_green&label=latest">
  </a>
  <a href="https://github.com/drashland/deno-drash/actions">
    <img src="https://img.shields.io/github/workflow/status/drashland/deno-drash/master?label=ci">
  </a>
  <a href="https://discord.gg/SgejNXq">
    <img src="https://img.shields.io/badge/chat-on%20discord-blue">
  </a>
  <a href="https://twitter.com/drash_land">
    <img src="https://img.shields.io/twitter/url?label=%40drash_land&style=social&url=https%3A%2F%2Ftwitter.com%2Fdrash_land">
  </a>
</p>

---

```typescript
// File: app.ts

import { Drash } from "https://deno.land/x/drash@v0.41.0/mod.ts";

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    this.response.body = "Hello World! deno + Drash is cool!";
    return this.response;
  }
}

const server = new Drash.Http.Server({
  address: "localhost:1337",
  response_output: "text/html",
  resources: [HomeResource]
});

server.run();
```

```
$ deno --allow-net --allow-env app.ts
```

```
$ curl localhost:1337
Hello World! deno + Drash is cool!
```

## Documentation

[Full Documentation](https://drash.land/docs)

[Lifecycle Diagram](http://drash.land/docs/#/lifecycle-diagram)

## Features

- [Content Negotiation](http://drash.land/docs/#/advanced-tutorials/content-negotiation/user-profiles)
- [Static Path Routing](http://drash.land/docs/#/tutorials/servers/serving-static-paths)
- [Regex Path Routing](http://drash.land/docs/#/tutorials/resources/creating-a-resource#regular-expression-uris)
- [Middleware](http://drash.land/docs/#/tutorials/middleware/introduction)
- [Body Handling: application/json](http://drash.land/docs/#/tutorials/requests/handling-application-json-bodies)
- [Body Handling: application/x-www-form-urlencoded](http://drash.land/docs/#/tutorials/requests/handling-application-x-www-form-urlencoded-bodies)
- [Body Handling: multipart/form-data](http://drash.land/docs/#/tutorials/requests/handling-multipart-form-data-bodies)
- [Handling Path Params](http://drash.land/docs/#/tutorials/requests/handling-path-params)
- [Handling URL Query Params](http://drash.land/docs/#/tutorials/requests/handling-url-query-params)
- [Console Logging](http://drash.land/docs/#/tutorials/logging/logging-to-the-terminal)
- [File Logging](http://drash.land/docs/#/tutorials/logging/logging-to-files)

## Why Use Drash?

Drash is designed to help you build your projects quickly with the ability to scale. You can build an API, a web app, an SPA (like the documentation pages), or even a static HTML site. How you use Drash is up to you, so it can be everything you need and nothing you don't &mdash; like a DRASH tent.


Drash takes concepts from the following:


* <a href="https://flask.palletsprojects.com/en/1.1.x/" target="_BLANK">Flask</a> &mdash; being <a href="https://flask.palletsprojects.com/en/1.1.x/foreword/#what-does-micro-mean" target="_BLANK">micro</a> and extensible
* <a href="https://laravel.com/" target="_BLANK">Laravel</a> &mdash; use of similarly styled <a href="https://laravel.com/docs/master/middleware">middleware</a>
* <a href="https://www.peej.co.uk/tonic/" target="_BLANK">Tonic</a> &mdash; use of <a href="https://github.com/peej/tonic#how-it-works" target="_BLANK">resources</a>
* <a href="https://www.restapitutorial.com/lessons/whatisrest.html" target="_BLANK">RESTful</a> principles &mdash; content negotiation, HTTP verbs, URIs, etc.

Thrown into the mix is Drash's own concepts such as:


* Documentation-driven development
* Test-driven development
* Lowering barriers to usage

Drash does not force you to use all of its code. You can pick and choose which data members you want/need and use them however you deem fit. For example, Drash comes with a console logger and a file logger. If you only want these, then you only import these into your non-Drash project. How you use it is really up to you.

## Example Drash App

The [`example_app`](https://github.com/drashland/deno-drash/tree/master/example_app) directory contains an example Drash application. You can run it using `deno` locally.

1. Install deno.

```
curl -fsSL https://deno.land/x/install/install.sh | sh -s v0.41.0
```

2. Run the Drash application using `deno`.

```
deno --allow-net --allow-env https://deno.land/x/drash@v0.41.0/example_app/app.ts
```

2. Make the following request: `GET /`.

```
curl --request GET localhost:1447

"GET request received!"
```

3. Make the following request `GET /coffee/17`.

```
curl --request GET localhost:1447/coffee/17

{"name":"Light"}
```

4. Make the following request `POST /`.

```
curl --request POST localhost:1447

"POST request received!"
```

5. Make the following request `PATCH /` (with verbose flag). This method is not defined in the [`HomeResource`](https://github.com/drashland/deno-drash/blob/master/example_app/home_resource.ts) class, so you should receive a `405` response.

```
curl --request PATCH --verbose localhost:1447

*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 1447 (#0)
> PATCH / HTTP/1.1
> Host: localhost:1447
> User-Agent: curl/7.64.1
> Accept: */*
>
< HTTP/1.1 405 Method Not Allowed
< content-type: application/json
< content-length: 20
<
* Connection #0 to host localhost left intact
"Method Not Allowed"* Closing connection 0
```

## Contributing

Contributors are welcomed!
