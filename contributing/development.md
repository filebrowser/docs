# Development



```text
# Development

Prior to starting any modification, please:

- Check the issues in [filebrowser/filebrowser](https://github.com/filebrowser/filebrowser/issues) and [filebrowser/frontend](https://github.com/filebrowser/frontend/issues). Someone might already be working in a similar solution, and being aware of it will help reduce duplicate effort.
  - If there are no similar issues/PRs, please open a new one to let others know.

- Read and understand [Builds](./builds.md).
- See [godoc.org/github.com/filebrowser/filebrowser](https://godoc.org/github.com/filebrowser/filebrowser).

In order to allow iterative and fast development, a bunch of scripts are provided to perform several tasks at once. All of this are available at [filebrowser/filebrowser/tree/master/build](https://github.com/filebrowser/filebrowser/tree/master/build):

- [`build_assets.sh`](https://github.com/filebrowser/filebrowser/tree/master/build/build_assets.sh): get frontend dependencies, build the frontend and update `rice-box.go`.
- [`build.sh`](https://github.com/filebrowser/filebrowser/tree/master/build/build.sh): build the backend.
- [`build_all.sh`](https://github.com/filebrowser/filebrowser/tree/master/build/build_all.sh): execute `build_assets.sh` and `build.sh`, one after the other.

Furthermore, a docker image named [filebrowser/dev](https://hub.docker.com/r/filebrowser/dev/) is provided to support development/collaboration from hosts with a single dependency: [docker](https://www.docker.com/). This also allows to develop File Browser offline (see [No connection](#offline) below). You can either get it from [hub.docker.com/r/filebrowser/dev](https://hub.docker.com/r/filebrowser/dev/) or build it locally (see [filebrowser/docker-dev](https://github.com/filebrowser/docker-dev)).

Note that the scripts above are the ones used in CI environments in order to have File Browser tested after each commit is pushed to the repo. Therefore, using these locally ensures consistency all along the design and deployment flow.

> NOTE: in order to build specific versions of the frontend and/or the backend, checkout the desired commits before using any of the described procedures.

Depending on which tools you want/can install locally, several development environments are supported:

## No dependencies

If you don't want, or cannot, install any dependency at all, sources can be edited through GitHub. See [Editing files in another user's repository](https://help.github.com/articles/editing-files-in-another-user-s-repository/) and [Editing files in your repository](https://help.github.com/articles/editing-files-in-your-repository/).

## All the dependencies

If you are willing to install `nodejs`, `yarn`, `go`, `git`, `docker` and `shell`, just use the scripts mentioned above.

> NOTE: the repo must be cloned in a path inside GOPATH.

> NOTE: the scripts are agnostic of the specific shell that is used. Therefore, on Windows Git for Windows, MinGW, MSYS2, Cygwin, Linux Subsystem... can be used. Alternatively, see [PowerShell](#powershell) below.

## Docker and shell

If you want to install `docker` and `shell` only:

- `USE_DOCKER="true" ./build/build_all.sh` executes `build_assets.sh` and `build.sh` inside a `filebrowser/dev` container, instead of running them on the host.
- `docker build -t filebrowser/filebrowser .` builds the docker image.

> NOTE: the repo can be cloned anywhere.

> NOTE: `docker build` should be executed outside of the container.

## Docker and shell, interactive

If you want to install `docker` and `shell` only, but desire to execute `build_assets.sh` and `build.sh` separately, you can work inside a container:

``` bash
  WORKDIR="/go/src/github.com/filebrowser/filebrowser"

  $(command -v winpty) docker run --rm -it \
    -v /$(pwd):${WORKDIR}:z \
    -w /${WORKDIR} \
    -p 8000:80 \
    sh -c "\
      cd build && \
      dos2unix build_assets.sh && \
      dos2unix build.sh \
      sh
    "
```

Exposing a port (`8000:80`) allows to execute File Browser inside the container, and browse it from the host.

> NOTES:
>  - The repo can be cloned anywhere.
>  - Since the repo in the host is mounted inside the container, the developer can use any text editor/IDE in the host to edit the sources (say Atom, notepad++, Visual Studio Code, Sublime...)

## play-with-docker

Any of the options above can be used in a [play-with-docker](https://labs.play-with-docker.com/) playground. To do so, just a web browser and a docker user are required. However, note that it is not secure to use your GitHub credentials there; so you should download the files you modified and commit the changes from a secure environment.

<a name="offline"></a>
## No connection

After a first execution of `build_all.sh`, dependencies (`vendor` and `frontend/node_modules`) are saved in the host. Therefore, as long as `filebrowser/dev` is already pulled, no internet connection is required for development. This applies to any of the options above.

<a name="powershell"></a>
## PowerShell

If you are using a Windows box without any shell, the interactive option above can be used by slightly modifying the syntax. Then, there is a single dependency: `docker`.

Alternatively, `docker run --rm -tv $(pwd):$(pwd) -w $(pwd) -v /var/run/docker.sock:/var/run/docker.sock busybox sh -c "USE_DOCKER='true' ./build/build_all.sh"` can be used.
```

