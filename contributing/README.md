# Contributing

If you're interested in contributing to this project, this is the best place to start. Before contributing to this project, please take a bit of time to read our [Code of Conduct](code-of-conduct.md). Also, note that this project is open-source and licensed under [Apache License 2.0](https://github.com/filebrowser/filebrowser/blob/master/LICENSE).

## Project Structure

The project is mainly composed by one [repository](https://github.com/filebrowser/filebrowser), hosted on GitHub. The backend side of the application is written in [Go](https://golang.org/), while the frontend \(located on a subdirectory of the same name\) is written in [Vue.js](https://vuejs.org/), a framework to produce [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) and [HTML](https://www.w3.org/html/).

Due to the tight coupling required by some features, basic knowledge of both Go and Vue.js is recommended.

* Learn Go: [https://github.com/golang/go/wiki/Learn](https://github.com/golang/go/wiki/Learn)
* Learn Vue.js: [https://vuejs.org/v2/guide/index.html](https://vuejs.org/v2/guide/index.html)

## Get the source code

We encourage you to use git to manage your fork. To clone the main repository, just run:

```bash
git clone https://github.com/filebrowser/filebrowser
```

## Build

### Frontend

We are using [Node.js](https://nodejs.org/en/) on the frontend to manage the build process. The steps to build it are:

```bash
# From the root of the repo, go to frontend/
cd frontend
# Install the dependencies
npm install
# Build the frontend
npm run build
```

This will install the dependencies and build the frontend so you can then embed it into the Go app. Although, if you want to play with it, you'll get bored of building it after every change you do. So, you can run the command below to watch for changes:

```bash
npm run watch
```

### Backend

First of all, you need to download the required dependencies. We are using the built-in `go mod` tool for dependency management. To get the modules, run:

```bash
go mod download
```

The magic of File Browser is that the static assets are bundled into the final binary. For that, we use [Go embed.FS](https://golang.org/pkg/embed/).
The files from `frontend/dist` will be embedded during the build process.

To build File Browser is just like any other Go program:

```bash
go build
```

To create a development build use the "dev" tag, this way the content inside the frontend folder will not be embedded in the binary but will be reloaded at every change:

```bash
go build -tags dev
```
