<p align="center">
  <img height="200" src="https://drash.land/public/assets/img/drash.svg" alt="Drash logo">
  <h1 align="center">Drash</h1>
</p>
<p align="center">A REST microframework for <a href="https://github.com/denoland/deno">Deno's HTTP server</a> with zero dependencies.</p>
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
  <a href="https://rb.gy/vxmeed">
    <img src="https://img.shields.io/badge/Tutorials-YouTube-red">
  </a>
</p>

---

## Table of Contents
- [Quick Start](#quick-start)
- [Create Drash App](#create-drash-app)
- [Documentation](#documentation)
- [Features](#features)
- [Why use Drash?](#why-use-drash)
- [Contributing](#contributing)
- [License](#license)

## Quick Start
```typescript
// File: app.ts

import { Drash } from "https://deno.land/x/drash@v1.0.7/mod.ts";

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    this.response.body = "Hello World! deno + Drash is cool!";
    return this.response;
  }
}

const server = new Drash.Http.Server({
  response_output: "text/html",
  resources: [HomeResource]
});

server.run({
  hostname: "localhost",
  port: 1447
});

console.log("Server listening: http://localhost:1447");
```

```
$ deno run --allow-net app.ts
Server listening: http://localhost:1447
```

```
$ curl localhost:1447
Hello World! deno + Drash is cool!
```

## Create Drash App

Drash provides a basic tool to help you quickly create a Drash skeleton, with everything working out of the box, ready for you to build something great with.

This tool does not require you to install any Drash scripts or modules. It will create the skeleton of your choice (an API, a full web app, or a full web app with Vue) inside your current working directory.

To get started with the Create Drash App tool, see the following commands:

```
$ mkdir my-drash-project
$ cd my-drash-project
```

* To make an API:

    ```
    $ deno run --allow-run --allow-read --allow-write --allow-net https://deno.land/x/drash/create_app.ts --api
    ```
    
* To make a web app:

    ```
    $ deno run --allow-run --allow-read --allow-write --allow-net https://deno.land/x/drash/create_app.ts --web-app
    ```

* To make a web app with Vue:

    ```
    $ deno run --allow-run --allow-read --allow-write --allow-net https://deno.land/x/drash/create_app.ts --web-app --with-vue
    ```

Display the options with `--help`:

```
$ deno run --allow-run --allow-read https://deno.land/x/drash/create_app.ts --help
```

## Documentation

[Full Documentation](https://drash.land/drash)

[Lifecycle Diagram](https://drash.land/drash/#/lifecycle-diagram)

## Features

- [Content Negotiation](http://drash.land/drash/#/advanced-tutorials/content-negotiation/user-profiles)
- [Static Path Routing](http://drash.land/drash/#/tutorials/servers/serving-static-paths)
- [Regex Path Routing](http://drash.land/drash/#/tutorials/resources/creating-a-resource#regular-expression-uris)
- [Middleware](http://drash.land/drash/#/tutorials/middleware/introduction)
- [Body Handling: application/json](http://drash.land/drash/#/tutorials/requests/handling-application-json-bodies)
- [Body Handling: application/x-www-form-urlencoded](http://drash.land/drash/#/tutorials/requests/handling-application-x-www-form-urlencoded-bodies)
- [Body Handling: multipart/form-data](http://drash.land/drash/#/tutorials/requests/handling-multipart-form-data-bodies)
- [Handling Path Params](http://drash.land/drash/#/tutorials/requests/handling-path-params)
- [Handling URL Query Params](http://drash.land/drash/#/tutorials/requests/handling-url-query-params)
- [Console Logging](http://drash.land/drash/#/tutorials/logging/logging-to-the-terminal)
- [File Logging](http://drash.land/drash/#/tutorials/logging/logging-to-files)

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

## Contributing

Contributors are welcomed!

Please read through our [contributing guidelines](./.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

## License
By contributing your code, you agree to license your contribution under the [MIT License](./LICENSE).
