# Contributing

If you're interested in contributing to this project, this is the best place to start. Before contributing to this project, please take a bit of time to read our [Code of Conduct](code-of-conduct.md). Also, note that this project is open-source and licensed under [Apache License 2.0](https://github.com/filebrowser/filebrowser/blob/master/LICENSE).

## Project Structure

This project is composed of two main repositories, both hosted at GitHub:

* The [**backend**](https://github.com/filebrowser/filebrowser)**,** which is entirely written in [Go](https://golang.org/).
* The [**frontend**](https://github.com/filebrowser/frontend), which is written in [Vue.js](https://vuejs.org/), a framework to produce [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) and [HTML](https://www.w3.org/html/).

This modular approach is meant to make contributing easier for users willing to focus on/reuse only some piece, instead of being forced to analyze the whole project. However, due to the tight coupling required by some features, basic knowledge of both Go and Vue.js is recommended.

* Learn Go: [https://github.com/golang/go/wiki/Learn](https://github.com/golang/go/wiki/Learn)
* Learn Vue.js: [https://vuejs.org/v2/guide/index.html](https://vuejs.org/v2/guide/index.html)

This structure is also valuable for third parties to develop alternative implementations of any of the pieces. E.g. a different frontend can be written using Angular, but keeping the same backend. Equally, a different backend can be written using Python or Ruby, but keeping the same frontend.

Furthermore, File Browser can also be used as a middleware for another app. Indeed, it is available as a plugin for [Caddy](https://caddyserver.com/). For more information about this plugin, please see the repository [filebrowser/caddy](https://github.com/filebrowser/caddy).

## Get the source code

We encourage you to use git to manage your fork. The main repository has a [submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) to the frontend repository to allow easy development and deployment. So, to clone the main repository and its submodules, just run:

```bash
git clone --recurse-submodules https://github.com/filebrowser/filebrowser
```

Since it is a submodule, when developing the frontend remember to update the backend repository accordingly.

## Build

### Frontend

We are using [Node.js](https://nodejs.org/en/) on the frontend to manage the build process. The steps to build it are:

```bash
# Install the dependencies
npm install
# Build the frontend
npm run build
```

This will install the dependencies and build the frontend so you can then embed it into the Go app. Although, if you want to play with it, you'll get bored of building it after every change you do. So, you can run the command bellow to watch for changes:

```bash
npm run watch
```

### Backend

First of all, you need to download the required dependencies. We are using the built-in `go mod` tool for dependency management. To get the modules, run:

```bash
go mod download
```

The magic of File Browser is that the static assets are bundled into the final binary. For that, we use [go.rice](https://github.com/GeertJohan/go.rice/), which you'll need to [install](https://github.com/GeertJohan/go.rice/#installation). Then you can just run the commands bellow to embed the assets:

```bash
cd http
rice embed-go
```

That will generate a `rice-box.go` file which has all the files from `frontend/dist` in it. Although, during development go.rice is smart enough to read the files from the file system directly. So you don't need these two steps during development. Although you **must** run them before building the final binary.

To build File Browser is just like any other Go program:

```bash
go build
```



