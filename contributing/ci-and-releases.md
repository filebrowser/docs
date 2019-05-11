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
   2. Build the frontend and the backend, generating `rice-box.go`.
      * If the commit **is not** tagged, we will push the latest `filebrowser/filebrowser` docker image to [hub.docker.com/r/filebrowser/filebrowser](https://hub.docker.com/r/filebrowser/filebrowser/).
   3. If the commit **is** tagged, then:
      1. Build the release artifacts for all supported platforms and a new docker image \(see [`.goreleaser.yml`](https://github.com/filebrowser/filebrowser/blob/master/.goreleaser.yml) for more information\).
      2. The artifacts are published to [GitHub Releases](https://github.com/filebrowser/filebrowser/releases).
      3. The tagged docker image is published to [hub.docker.com/r/filebrowser/filebrowser](https://hub.docker.com/r/filebrowser/filebrowser/).



