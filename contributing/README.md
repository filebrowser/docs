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

## Get Started

## Development

{% page-ref page="authentication-provider.md" %}



