# CI and Releases

Currently, a single CI service is being used: [travis-ci.com/filebrowser](https://travis-ci.com/filebrowser) and we use our [wizard script](https://github.com/filebrowser/filebrowser/blob/master/wizard.sh) to manage our builds and releases.

## Release Procedure

{% hint style="info" %}
We use semantic versioning. For more info check [semver.org](https://semver.org).
{% endhint %}

1. Manually tag the commit that is going to be used in [filebrowser/frontend](https://github.com/filebrowser/frontend).
2. Execute `./wizard.sh -r $semver` in [filebrowser/filebrowser](https://github.com/filebrowser/filebrowser). It will:
   1. Check if the tag exists in [filebrowser/frontend](https://github.com/filebrowser/frontend).
   2. Update the submodule to that tag.
   3. Replace `untracked` with the version in `types/version.go`.
   4. Commit and tag [filebrowser/filebrowser](https://github.com/filebrowser/filebrowser).
   5. Revert the version to `untracked` and commit again.
3. When the tag is pushed, Travis will detect it and execute the following [procedures](https://github.com/filebrowser/filebrowser/blob/master/.travis.yml):
   1. Run through the linters to check if the code is alright.
   2. Build the frontend and the backend, generating `rice-box.go`\`





> NOTE: `release.sh` depends on `git` and requires `frontend` to be a submodule of `filebrowser`.

* When the tag in [filebrowser/filebrowser](https://github.com/filebrowser/filebrowser) is pushed, [travis-ci](https://travis-ci.com/filebrowser/filebrowser/builds) detects it and two of the following stages \(`0,1` or `0,2`\) are automatically executed \(see [`.travis.yml`](https://github.com/filebrowser/filebrowser/blob/master/.travis.yml)\):
  * STAGE 0: golang linting tools \([gometalinter](https://github.com/alecthomas/gometalinter)\) are executed. See [`build/run_gometalinter.sh`](https://github.com/filebrowser/filebrowser/blob/master/build/run_gometalinter.sh) and [`.gometalinter.json`](https://github.com/filebrowser/filebrowser/blob/master/.gometalinter.json).
  * STAGE 1: the frontend and the backend are built, thus `rice-box.go` is created. See [`build/build_all.sh`](https://github.com/filebrowser/filebrowser/blob/master/build/build_all.sh).
    * If the commit is not tagged, docker image `filebrowser/filebrowser` is built and it is pushed to [hub.docker.com/r/filebrowser/filebrowser](https://hub.docker.com/r/filebrowser/filebrowser/).
  * STAGE 2: if the commit is tagged,
    * [goreleaser](https://github.com/goreleaser/goreleaser) is used to build the release artifacts for all the supported platforms and to build a single docker image \(tagged/named twice\). The artifacts are published to [GitHub Releases](https://github.com/filebrowser/filebrowser/releases) and the image is pushed to [hub.docker.com/r/filebrowser/filebrowser](https://hub.docker.com/r/filebrowser/filebrowser/). See [`.goreleaser.yml`](https://github.com/filebrowser/filebrowser/blob/master/.goreleaser.yml).
    * [`./build/push_ricebox.sh`](https://github.com/filebrowser/filebrowser/blob/master/build/push_ricebox.sh) is executed in order to update `rice-box.go` in [filebrowser/caddy/assets](https://github.com/filebrowser/caddy/tree/master/assets).
      * [filebrowser/caddy](https://github.com/filebrowser/caddy) is cloned.
      * A branch named `update-rice-box` is created from `master`.
      * `assets/rice-box.go` is replaced.
      * A commit is added.
      * The commit is tagged.
      * The branch and tag are pushed to [filebrowser/caddy](https://github.com/filebrowser/caddy).

> NOTE: A maintainer is required to merge/squash/rebase branch `update-rice-box` in [filebrowser/caddy](https://github.com/filebrowser/caddy) to `master`.
>
> HELP: a PR could be automatically created by using the GitHub REST API: [https://developer.github.com/v3/pulls/\#create-a-pull-request](https://developer.github.com/v3/pulls/#create-a-pull-request). However, even though creating the PR is quite easy, we don't know how to properly handle the authentication: [https://developer.github.com/v3/auth/](https://developer.github.com/v3/auth/). Should be willing to help us, please [let us know](https://github.com/filebrowser/filebrowser/issues/new).

