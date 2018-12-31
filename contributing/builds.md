---
description: '[NEEDS CLEANUP]'
---

# Build

## Get the source code

In order to make development easier, the frontend is included in the backend as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Then, in order to tinker with the sources, start by getting both repos at once with:

```bash
git clone --recurse-submodules https://github.com/filebrowser/filebrowser
```

{% hint style="info" %}
Since it is a submodule, when developing the frontend remember to update the backend repository accordingly.
{% endhint %}

Alternatively, you can download the repositories in two steps with `curl`/`wget`:

```bash
curl -L https://github.com/filebrowser/filebrowser/archive/master.tar.gz | tar xvz
cd filebrowser-master
curl -L https://github.com/filebrowser/frontend/archive/master.tar.gz | tar xvz
mv frontend-master frontend
```

However, note that this approach won't let you push your changes back easily.

## Build the frontend

In order to build the frontend, just execute the build script with either [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/) in the root of the [frontend](https://github.com/filebrowser/frontend) repository. It is suggested to clean sub directory `dist` first, so that artifacts from previous builds are removed. Also, running `yarn install` to get dependencies up-to-date is encouraged.

```bash
# Remove existing artifacts (if any)
if [ -d "dist" ]; then
  rm -rf dist/*
fi;

# Get dependencies up-to-date
yarn install
# Build the frontend
yarn build
```

## Run or build the backend

Frontend artifacts are embedded in the backend with [go.rice](github.com/GeertJohan/go.rice/rice). Therefore, prior to following the regular Go procedure this needs to be executed in subdir `http` of the `backend` repository:

```bash
# Install rice tool if not present
if ! [ -x "$(command -v rice)" ]; then
  go get github.com/GeertJohan/go.rice/rice
fi

# Embed the assets using rice
cd http
rice embed-go
```

Then, ensuring that all the dependencies are available is strongly recommended:

```bash
cd ../cli
go get -v ./...
```

Last, the backend can be either run or built from sub directory `cli` as usual:

```bash
cd ../cli
go run
```

or

```bash
cd ../cli
CGO_ENABLED=0 go build -a
cd ..
cp cli/filebrowser ./
```

{% hint style="info" %}
`CGO_ENABLED=0` is used so that a static binary is built. See [golang.org/cmd/cgo](https://golang.org/cmd/cgo/).
{% endhint %}

## Build a Docker image

Since File Browser is compiled to a single static binary with embedded frontend artifacts, just copying it into a [scratch](https://hub.docker.com/_/scratch/) image will work. However, setting some parameters by default is suggested. For example:

```text
FROM scratch

VOLUME /tmp
VOLUME /srv
EXPOSE 80

COPY filebrowser /filebrowser

ENTRYPOINT ["/filebrowser", "--port", "80"]
```

So, put the built binary and a `config.json` in the same dir as the [dockerfile](https://docs.docker.com/engine/reference/builder/) shown above and build it:

```bash
docker build -t filebrowser/filebrowser 
```

You can then try it:

```bash
docker run -dp 5555:80 filebrowser/filebrowser --no-auth
```

## Integrate the binary in a external Docker image

There are at least three possible approaches to use File Browser inside a existing image:

* Use a built binary that is locally available, as in the example shown above.
* Get a release tarball and extract it in the dockerfile:

```text
RUN https://github.com/filebrowser/filebrowser/releases/download/v1.8.0/linux-amd64-filebrowser.tar.gz | tar -xvz filebrowser
```

Alternatively, the following snippet will retrieve the latest available tarball:

```text
RUN curl -L $( \
         curl -s https://api.github.com/repos/filebrowser/filebrowser/releases/latest \
       | grep "browser_download_url.*linux-amd64.*tar.gz" \
       | cut -d : -f 2,3 \
       | tr -d \" \
     ) \
| tar -xvz filebrowser
```

Copy the binary from an image that contains it already. E.g. to build a image with a working shell, an [Alpine Linux](https://alpinelinux.org/) version can be built from the default scratch-based one:

```text
FROM filebrowser/filebrowser AS base
FROM alpine AS img
COPY --from=base /filebrowser <target_path>
```

